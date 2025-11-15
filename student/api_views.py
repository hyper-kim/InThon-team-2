# students/api_views.py (새 파일)
from rest_framework import generics, permissions
from django.http import Http404
from .models import StudentProfile
from .serializers import StudentProfileSerializer

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