from django.contrib import admin
from .models import LabProfile, JobPosting, LabAvailability

# Register your models here.
# [핵심 1] 'JobPosting'을 'LabProfile' 수정 페이지에 끼워넣기 위한 설정
class JobPostingInline(admin.TabularInline): # TabularInline은 한 줄로 깔끔하게 보임
    model = JobPosting
    extra = 1 # 기본으로 보여줄 빈 입력 폼 개수

# [핵심 2] 'LabProfile' 관리자 설정을 커스텀
# 2. [!!!] 면담 가능 시간 Inline (새로 추가)
class LabAvailabilityInline(admin.TabularInline):
    model = LabAvailability
    extra = 1

# 3. LabProfile Admin 설정
class LabProfileAdmin(admin.ModelAdmin):
    # [!] 'schedule_info'를 삭제합니다.
    list_display = ('lab_name',) 
    
    # [!!!] 2개의 Inline을 모두 여기에 등록합니다.
    inlines = [LabAvailabilityInline, JobPostingInline]

# 4. 모델 등록
admin.site.register(LabProfile, LabProfileAdmin)
admin.site.register(JobPosting)
admin.site.register(LabAvailability) # [!] LabAvailability도 별도 관리 가능하게 등록