# Backend/lab/utils.py
import openai
import json
import requests
import xml.etree.ElementTree as ET # XML 파서
from django.conf import settings
from scholarly import scholarly
from github import Github

# --- 1. LLM 요약 기능 ---
def get_openai_summary(scholar_abstracts, dbpia_papers, github_repos):
    """ 3가지 소스를 모두 받아 LLM 요약을 생성합니다. """
    
    # [!!!] 2. LLM에게 전달할 '컨텍스트(자료)' 텍스트를 만듭니다.
    context = "--- Google Scholar 논문 초록 (최대 5개) ---\n"
    context += scholar_abstracts if (scholar_abstracts and "오류" not in scholar_abstracts) else "정보 없음\n"
    
    context += "\n\n--- DBPia 주요 논문 (최대 5개) ---\n"
    if dbpia_papers:
        for paper in dbpia_papers:
            context += f"- {paper.get('title', '제목 없음')}\n"
    else:
        context += "정보 없음\n"
        
    context += "\n\n--- GitHub 주요 프로젝트 (최대 5개) ---\n"
    if github_repos:
        for repo in github_repos:
            context += f"- {repo.get('name', '')}: {repo.get('description', '')}\n"
    else:
        context += "정보 없음\n"

    # [!!!] 3. 3가지 소스를 모두 분석하라는 '프롬프트'를 설계합니다.
    system_prompt = f"""
    당신은 대학생에게 연구실을 소개하는 AI 조교입니다.
    아래에 제공되는 3가지 소스(Google Scholar 초록, DBPia 논문 제목, GitHub 프로젝트)를 '종합적'으로 분석해주세요.

    [분석 자료]
    {context}

    [요약 지시]
    위 자료를 바탕으로, 이 연구실이 '주로 무엇을 연구하는지' 3~4문장의 간결한 한글 문단으로 요약해주세요.
    학부생이 이해하기 쉽게 핵심 주제와 기술(예: AI, 컴퓨터 비전, PyTorch, 백엔드)을 명확히 언급해주세요.
    Google Scholar 초록이 가장 중요하지만, DBPia의 논문 제목과 GitHub 프로젝트의 기술 키워드도 반드시 참고하여 종합적으로 결론을 내주세요.
    """
    
    try:
        client = openai.OpenAI(api_key=settings.OPENAI_API_KEY)
        
        response = client.chat.completions.create(
            model="gpt-4o-mini", # (가장 빠르고 저렴한 모델)
            messages=[
                # 시스템 프롬프트 대신 유저 프롬프트로 모든 내용을 전달
                {"role": "user", "content": system_prompt} 
            ],
            temperature=0.3,
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"OpenAI API 오류: {e}")
        return f"AI 요약 생성 중 오류 발생: {e}"

# --- (fetch_scholar_data, fetch_github_data, fetch_dbpia_data 함수는 변경 없음) ---

def fetch_scholar_data(author_id):
    if not author_id:
        return ""
    try:
        author = scholarly.search_author_id(author_id)
        author.fill(sections=['publications'])
        abstracts = []
        for pub in author.publications[:5]: # (최대 5개)
            pub.fill()
            if 'abstract' in pub.bib:
                abstracts.append(pub.bib['abstract'])
        print(f"Scholarly: 초록 {len(abstracts)}개 발견.")
        return "\n\n".join(abstracts)
    except Exception as e:
        print(f"Scholarly 크롤링 오류: {e}")
        return f"Google Scholar 연동 중 오류 발생: {e}" # 오류 메시지도 요약에 포함될 수 있게 반환

def fetch_github_data(username):
    if not username:
        return []
    try:
        g = Github(None) 
        user = g.get_user(username)
        repos_list = []
        for repo in user.get_repos(sort="pushed")[:5]:
            repos_list.append({
                "name": repo.name,
                "description": repo.description or "설명 없음",
                "url": repo.html_url,
                "stars": repo.stargazers_count
            })
        print(f"GitHub: 레포 {len(repos_list)}개 발견.")
        return repos_list
    except Exception as e:
        print(f"GitHub API 오류: {e}")
        return []

def fetch_dbpia_data(professor_name):
    if not professor_name:
        return []
    DEMO_KEY = "DBPIA_DEMO_APIKEY" 
    url = f"http://api.dbpia.co.kr/v2/search/search.xml?key={DEMO_KEY}&target=se_adv&searchauthor={professor_name}&pagecount=5"
    papers_list = []
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status() 
        root = ET.fromstring(response.content)
        for item in root.findall('.//item'):
            title_node = item.find('title')
            link_node = item.find('link_url')
            if title_node is not None and link_node is not None:
                papers_list.append({
                    "title": title_node.text or "제목 없음",
                    "url": link_node.text or ""
                })
        print(f"DBPia: 논문 {len(papers_list)}개 발견.")
        return papers_list
    except Exception as e:
        print(f"DBPia API 오류: {e}")
        return []

def analyze_student_application(application_text, job_description):
    """ 학생 지원서와 공고를 비교하여 JSON으로 요약/분석합니다. """
    
    system_prompt = f"""
    당신은 랩실의 조교(TA)입니다.
    지원자가 '모집 공고'의 인재상에 얼마나 적합한지 '지원서'를 보고 1차 필터링해야 합니다.
    두 내용을 비교하여, 지원자의 장점과 단점을 요약하고, 채용 추천 여부를 결정해주세요.

    [요청]
    1. '지원서'를 3줄로 요약합니다.
    2. '모집 공고' 대비 지원자의 장점(pros) 2가지를 리스트로 뽑아주세요.
    3. '모집 공고' 대비 지원자의 단점(cons) 2가지를 리스트로 뽑아주세요.
    4. 최종 추천 여부(recommendation)를 "추천" 또는 "비추천"으로 결정해주세요.

    [출력 형식]
    반드시 다음 JSON 형식만 반환해야 합니다:
    {{
      "summary": "...",
      "pros": ["...", "..."],
      "cons": ["...", "..."],
      "recommendation": "추천"
    }}
    """
    
    user_content = f"""
    [모집 공고 내용]
    {job_description}

    [학생 지원서 내용]
    {application_text}
    """
    
    try:
        client = openai.OpenAI(api_key=settings.OPENAI_API_KEY)
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_content}
            ],
            temperature=0.2,
            response_format={ "type": "json_object" } 
        )
        response_content = response.choices[0].message.content
        return json.loads(response_content)
        
    except Exception as e:
        print(f"OpenAI 지원서 분석 오류: {e}")
        return {
            "summary": "AI 분석 중 오류가 발생했습니다.",
            "pros": [], "cons": [],
            "recommendation": "오류"
        }