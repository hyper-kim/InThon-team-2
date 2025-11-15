# lab/api_views.py
from rest_framework import generics, permissions
from .models import LabProfile
from .serializers import LabProfileSerializer
from django.http import Http404
from .utils import fetch_scholar_data, fetch_github_data, get_openai_summary, fetch_dbpia_data

# [!!!] 1. 랩 관리자용 API (기존 코드)
class LabProfileDetailAPI(generics.RetrieveUpdateAPIView):
    serializer_class = LabProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        try:
            return self.request.user.labprofile
        except LabProfile.DoesNotExist:
            raise Http404("Lab Profile not found for this user.")

# --- [!!!] 학생용 공개 API (아래 2개 추가) ---

# [!!!] 2. 랩 목록 API (학생용)
class LabPublicListAPI(generics.ListAPIView):
    """
    학생용: 모든 랩의 공개 목록을 반환합니다.
    URL: /api/lab/public/
    """
    queryset = LabProfile.objects.all()
    serializer_class = LabProfileSerializer
    permission_classes = [permissions.AllowAny] # [중요] 누구나 접근 가능

# [!!!] 3. 랩 상세 API (학생용)
class LabPublicDetailAPI(generics.RetrieveAPIView):
    """
    학생용: ID로 특정 랩의 상세 정보를 반환합니다.
    URL: /api/lab/public/<int:pk>/
    """
    queryset = LabProfile.objects.all()
    serializer_class = LabProfileSerializer
    permission_classes = [permissions.AllowAny] # [중요] 누구나 접근 가능

class LabExternalDataSyncAPI(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            lab_profile = request.user.labprofile
        except LabProfile.DoesNotExist:
            return Response({"error": "랩 프로필이 없습니다."}, status=status.HTTP_404_NOT_FOUND)

        # 1. GitHub 데이터 (결과: list)
        github_data = fetch_github_data(lab_profile.github_username)
        lab_profile.github_projects_json = github_data

        # 2. DBPia 데이터 (결과: list)
        dbpia_papers = fetch_dbpia_data(lab_profile.professor_name)
        lab_profile.dbpia_papers_json = dbpia_papers

        # 3. Scholar 데이터 (결과: str)
        abstracts = fetch_scholar_data(lab_profile.scholar_author_id)
        
        # [!!!] 4. LLM 요약 (3가지 소스를 모두 전달)
        summary = get_openai_summary(abstracts, dbpia_papers, github_data)
        lab_profile.research_summary_ko = summary

        # 5. 저장
        lab_profile.last_external_sync = timezone.now()
        lab_profile.save()

        # 6. 최신 데이터 반환
        serializer = LabProfileSerializer(lab_profile)
        return Response(serializer.data, status=status.HTTP_200_OK)