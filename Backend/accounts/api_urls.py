from django.urls import path
from . import views # accounts 앱의 api_views

urlpatterns = [
    # 'accounts' 앱 전용 API (인증)
    path('login/', views.LoginAPI.as_view(), name='api_login'),
    path('logout/', views.LogoutAPI.as_view(), name='api_logout'),
    path('session-check/', views.SessionCheckAPI.as_view(), name='api_session_check'),
]