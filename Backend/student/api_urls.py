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
    path('apply/', 
        api_views.StudentApplicationAPI.as_view(),
        name='api_student_apply'),
    path('scraps/', api_views.StudentScrapAPI.as_view(), name='api_student_scraps_list'),
    # DELETE /api/student/scraps/<lab_id>/
    path('scraps/<int:lab_id>/', api_views.StudentScrapAPI.as_view(), name='api_student_scrap_detail'),

]