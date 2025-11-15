from django.urls import path
from . import views

urlpatterns = [
    # /lab/my-profile/ URL을 manage_lab_profile 뷰 함수와 연결
    path(
        'my-profile/', 
        views.manage_lab_profile, 
        name='manage_lab_profile' # 템플릿/뷰에서 이 이름으로 URL을 찾을 수 있음
    ),
]