# lab/api_views.py
from rest_framework import generics, permissions
from .models import LabProfile
from .serializers import LabProfileSerializer
from django.http import Http404

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