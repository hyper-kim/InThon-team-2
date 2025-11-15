from django.contrib import admin
from .models import LabProfile, JobPosting

# Register your models here.
# [핵심 1] 'JobPosting'을 'LabProfile' 수정 페이지에 끼워넣기 위한 설정
class JobPostingInline(admin.TabularInline): # TabularInline은 한 줄로 깔끔하게 보임
    model = JobPosting
    extra = 1 # 기본으로 보여줄 빈 입력 폼 개수

# [핵심 2] 'LabProfile' 관리자 설정을 커스텀
class LabProfileAdmin(admin.ModelAdmin):
    list_display = ('lab_name', 'schedule_info') # 목록에 보일 필드
    
    # 'LabProfile' 수정 페이지에 'JobPostingInline'을 포함시킴
    inlines = [JobPostingInline]

# [핵심 3] 모델을 admin에 등록 (기존 방식과 다름)
# LabProfile은 커스텀한 LabProfileAdmin 설정을 사용해 등록
admin.site.register(LabProfile, LabProfileAdmin)

# JobPosting도 별도로 등록 (필수 아님. 공고만 따로 볼 때 유용)
admin.site.register(JobPosting)