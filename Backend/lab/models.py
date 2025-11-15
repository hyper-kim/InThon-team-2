# your_app/models.py
from django.db import models
from django.contrib.auth.models import User # [!!!] 장고의 기본 유저 모델 임포트

# 1. '연구실 프로필' 모델
class LabProfile(models.Model):
    # [!!!] 이 프로필의 '주인'이 누구인지 연결 (핵심!)
    user = models.OneToOneField(
        User, 
        on_delete=models.CASCADE,
        verbose_name="랩 관리자 계정"
    )
    
    lab_name = models.CharField(
        max_length=100, 
        verbose_name="연구실 이름"
    )
    professor_name = models.CharField(
        max_length=100, 
        blank=True, 
        verbose_name="교수님 성함"
    )
    lab_instruction = models.CharField(
        blank = True,
        max_length = 500,
        verbose_name="랩 소개"
    )
    lab_link = models.URLField(
        blank = True,
        max_length = 200,
        verbose_name = "랩실 링크"
    )
    tags = models.CharField(
        max_length=255, 
        blank=True, 
        verbose_name="검색 태그", 
        help_text="쉼표(,)로 구분하여 입력 (예: 인공지능,컴퓨터비전,HCI)"
    )
    scholar_author_id = models.CharField(
        max_length=50, blank=True, 
        verbose_name="Google Scholar Author ID",
        help_text="Google Scholar 프로필 URL의 'user=' 뒤에 있는 ID (예: AAAAAA-BBBB)"
    )
    github_username = models.CharField(
        max_length=100, blank=True, 
        verbose_name="GitHub Username (또는 Organization)"
    )
    
    # [!!!] 2. LLM/크롤러가 '저장'할 요약 필드
    research_summary_ko = models.TextField(
        blank=True, verbose_name="AI 생성 연구 요약 (한글)"
    )
    # [!!!] 3. 크롤러가 '저장'할 GitHub 프로젝트 목록
    github_projects_json = models.JSONField(
        default=list, blank=True, verbose_name="GitHub 프로젝트 캐시"
    )
    dbpia_papers_json = models.JSONField(
        default=list, blank=True, verbose_name="DBPia 논문 캐시"
    )
    # [!!!] 4. 동기화 시간 추적
    last_external_sync = models.DateTimeField(
        null=True, blank=True, verbose_name="최종 외부 연동 시간"
    )

    def __str__(self):
        return self.lab_name

# 2. '모집 공고' 모델 (The "Many")
class JobPosting(models.Model):
    # [핵심] LabProfile 모델과 1:N 관계 설정
    lab = models.ForeignKey(
        LabProfile, 
        on_delete=models.CASCADE, # 랩이 삭제되면, 공고도 함께 삭제
        verbose_name="연구실"
    )
    
    title = models.CharField(
        max_length=200, 
        verbose_name="공고 제목"
    )
    description = models.TextField(
        verbose_name="상세 내용",
        help_text="모집 대상, 필요 역량, 기간 등 자세한 내용을 적어주세요."
    )
    attachment = models.FileField(
        upload_to='job_postings/', # 'media/' 폴더 하위에 'job_postings/' 폴더를 만들어 저장
        blank=True,               # 파일 첨부는 선택 사항
        verbose_name="첨부파일 (PDF 등)"
    )

    
    deadline = models.DateField(
        null=True, 
        blank=True, 
        verbose_name="모집 마감일"
    )
    
    created_at = models.DateTimeField(
        auto_now_add=True, 
        verbose_name="작성일"
    )

    def __str__(self):
        return f"[{self.lab.lab_name}] {self.title}"
    
class LabAvailability(models.Model):
    # 'LabProfile'과 1:N 관계
    lab = models.ForeignKey(
        LabProfile, 
        on_delete=models.CASCADE,
        related_name="availability_slots" # 뷰에서 부르기 편한 이름
    )
    
    # '요일' 선택 필드
    WEEKDAY_CHOICES = [
        (1, '월요일'),
        (2, '화요일'),
        (3, '수요일'),
        (4, '목요일'),
        (5, '금요일'),
        (6, '토요일'),
        (7, '일요일'),
    ]
    day = models.IntegerField(
        choices=WEEKDAY_CHOICES, 
        verbose_name="요일"
    )
    
    # '시작 시간' 선택 필드
    start_time = models.TimeField(verbose_name="시작 시간")
    
    # '종료 시간' 선택 필드
    end_time = models.TimeField(verbose_name="종료 시간")

    class Meta:
        verbose_name = "면담 가능 시간"
        verbose_name_plural = "면담 가능 시간 목록"
        # (월요일 10:00-11:00) 처럼 보이게 정렬
        ordering = ['day', 'start_time'] 

    def __str__(self):
        # "get_day_display"는 (1) -> '월요일' 처럼 choices의 값을 가져옴
        return f"{self.lab.lab_name} - {self.get_day_display()} {self.start_time} ~ {self.end_time}"