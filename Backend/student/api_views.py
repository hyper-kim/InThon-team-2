# students/api_views.py (새 파일)
from rest_framework import generics, permissions, status
from django.http import Http404
from rest_framework.response import Response
from django.http import Http404
from .models import StudentProfile
from .serializers import StudentProfileSerializer

from lab.models import JobPosting, Application
from lab.serializers import ApplicationCreateSerializer
from lab.utils import analyze_student_application

class StudentProfileAPI(generics.RetrieveUpdateAPIView):
    """
    로그인한 학생 유저의 프로필을 조회(GET)하거나 수정(PUT/PATCH)합니다.
    URL: /api/student/my-profile/
    """
    serializer_class = StudentProfileSerializer
    # [!] 로그인한 유저만 접근 가능
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        # [핵심] URL에 id가 없어도, 로그인한 유저(request.user)를 기반으로
        # 연결된 StudentProfile을 찾아서 반환합니다.
        try:
            return self.request.user.studentprofile
        except StudentProfile.DoesNotExist:
            # (추후: 프로필이 없으면 자동으로 생성해주는 로직 추가 가능)
            raise Http404("이 유저의 학생 프로필이 없습니다.")
        
# [!!!] 2. (신규) 학생 지원서 제출 API
class StudentApplicationAPI(generics.CreateAPIView):
    """
    학생이 랩 공고에 지원서를 제출(POST)하고,
    AI 분석을 트리거합니다.
    URL: /api/student/apply/
    """
    serializer_class = ApplicationCreateSerializer
    permission_classes = [permissions.IsAuthenticated] # 로그인한 학생만

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        try:
            student_profile = request.user.studentprofile
        except StudentProfile.DoesNotExist:
            return Response({"error": "학생 프로필이 없습니다."}, status=status.HTTP_400_BAD_REQUEST)

        # 1. 지원서(Application) 객체 생성 (AI 분석 전)
        application = serializer.save(student=student_profile)
        
        # 2. AI 분석 실행 (lab/utils.py의 함수 호출)
        job_description = application.job_posting.description
        application_text = application.application_text
        
        ai_result = analyze_student_application(application_text, job_description)

        # 3. AI 분석 결과를 Application 모델에 저장
        application.ai_summary = ai_result.get("summary", "오류")
        application.ai_pros = ai_result.get("pros", [])
        application.ai_cons = ai_result.get("cons", [])
        
        rec = ai_result.get("recommendation", "오류")
        if rec == "추천":
            application.ai_status = Application.AIStatus.RECOMMENDED
        else:
            application.ai_status = Application.AIStatus.NOT_RECOMMENDED
            
        application.save()

        return Response(
            {"success": "지원이 완료되었습니다."}, 
            status=status.HTTP_201_CREATED
        )