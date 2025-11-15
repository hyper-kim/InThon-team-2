from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from . import api_views # accounts 앱의 api_views

urlpatterns = [
    # 'accounts' 앱 전용 API (인증)
    path('login/', csrf_exempt(api_views.LoginAPI.as_view()), name='api_login'),
    path('logout/', csrf_exempt(api_views.LogoutAPI.as_view()), name='api_logout'),
    path('session-check/', api_views.SessionCheckAPI.as_view(), name='api_session_check'),
    path('register/', csrf_exempt(api_views.RegisterAPI.as_view()), name='api_register')
]