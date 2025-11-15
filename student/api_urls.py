# students/api_urls.py (새 파일)
from django.urls import path
from . import api_views

urlpatterns = [
    # /api/student/my-profile/
    path(
        'my-profile/', 
        api_views.StudentProfileAPI.as_view(), 
        name='api_student_profile'
    ),
]