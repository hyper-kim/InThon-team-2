from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status

# [!!!] 1. 로그인 API (lab -> accounts로 이동)
class LoginAPI(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        # ... (이전 코드와 동일) ...
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({"success": True, "username": user.username})
        else:
            return Response({"error": "Invalid credentials."}, status=status.HTTP_401_UNAUTHORIZED)

# [!!!] 2. 로그아웃 API (lab -> accounts로 이동)
class LogoutAPI(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def post(self, request):
        logout(request)
        return Response({"success": True, "message": "Logout successful."})

# [!!!] 3. 세션 확인 API (lab -> accounts로 이동)
class SessionCheckAPI(APIView):
    permission_classes = [permissions.AllowAny]
    def get(self, request):
        if request.user.is_authenticated:
            return Response({"is_authenticated": True, "username": request.user.username})
        else:
            return Response({"is_authenticated": False})