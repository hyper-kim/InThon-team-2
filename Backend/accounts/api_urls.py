from django.urls import path
from . import api_views # accounts 앱의 api_views

urlpatterns = [
    # 'accounts' 앱 전용 API (인증)
    path('login/', api_views.LoginAPI.as_view(), name='api_login'),
    path('logout/', api_views.LogoutAPI.as_view(), name='api_logout'),
    path('session-check/', api_views.SessionCheckAPI.as_view(), name='api_session_check'),
    path('register/', api_views.RegisterAPI.as_view(), name='api_register')
]