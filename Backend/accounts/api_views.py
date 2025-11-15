from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status, permissions
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from .serializers import RegisterSerializer
from lab.models import LabProfile
from student.models import StudentProfile

# [!!!] 1. 로그인 API (lab -> accounts로 이동)
@method_decorator(csrf_exempt, name='dispatch')
class LoginAPI(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        # ... (이전 코드와 동일) ...
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            role = None
            if hasattr(user, 'labprofile'):
                role = 'lab_admin'
            elif hasattr(user,'studentprofile'):
                role = 'student'
            return Response({"success": True, "username": user.username,"role":role})
        else:
            return Response({"error": "Invalid credentials."}, status=status.HTTP_401_UNAUTHORIZED)

# [!!!] 2. 로그아웃 API (lab -> accounts로 이동)
@method_decorator(csrf_exempt, name='dispatch')
class LogoutAPI(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        # API는 세션 기반이므로 인증 체크는 자동으로 됨
        # 필요하면 request.user.is_authenticated를 직접 확인 가능
        if request.user.is_authenticated:
            logout(request)
            return Response({"success": True, "message": "Logout successful."})
        else:
            # 이미 로그아웃된 상태도 성공으로 처리 (멱등성)
            return Response({"success": True, "message": "Already logged out or not authenticated."})

class SessionCheckAPI(APIView):
    permission_classes = [permissions.AllowAny]
    def get(self, request):
        if request.user.is_authenticated:
            role = None
            if hasattr(request.user, 'labprofile'):
                role = 'lab_admin'
            elif hasattr(request.user, 'studentprofile'):
                role = 'student'
            return Response({"is_authenticated": True, "username": request.user.username, "role": role})
        else:
            return Response({"is_authenticated": False})

@method_decorator(csrf_exempt, name='dispatch')
class RegisterAPI(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        user = serializer.save()
        login(self.request, user)