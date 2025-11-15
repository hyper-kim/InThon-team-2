"""
URL configuration for KUnnect project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include

# [!!!] 2줄 추가 [!!!]
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    # [!!!] /lab/ URL은 your_app.urls에서 처리하도록 위임
    path('lab/', include('lab.urls')), 
    
    # [!!!] 로그인/로그아웃 기능을 위해 추가 (중요)
    path('accounts/', include('django.contrib.auth.urls')),

    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
]

# [!!!] 개발 환경에서 Media 파일을 서빙하기 위한 설정 (이 줄을 추가) [!!!]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)