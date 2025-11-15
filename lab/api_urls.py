# lab/api_urls.py (새 파일)
from django.urls import path
from . import api_views # 방금 만든 api_views 임포트

urlpatterns = [
    # /api/lab/my-profile/ 주소를 LabProfileDetailAPI와 연결
    path(
        'my-profile/', 
        api_views.LabProfileDetailAPI.as_view(), 
        name='api_lab_profile_detail'
    ),
]