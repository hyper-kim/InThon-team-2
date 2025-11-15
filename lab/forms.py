from django import forms
from django.forms.models import inlineformset_factory
from .models import LabProfile, JobPosting, LabAvailability
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

# 1. LabProfile을 수정하기 위한 ModelForm
class LabProfileForm(forms.ModelForm):
    class Meta:
        model = LabProfile
        # 폼에서 수정할 필드 목록
        fields = ['lab_name','lab_instruction','lab_link']

# 2. JobPosting을 LabProfile과 함께 수정하기 위한 InlineFormSet
#    (admin.TabularInline의 사용자용 버전입니다)
JobPostingFormSet = inlineformset_factory(
    LabProfile,      # 부모 모델
    JobPosting,      # 자식 모델
    fields=('title', 'description', 'deadline', 'attachment'), # 폼 필드
    extra=1,         # 기본으로 보여줄 빈 폼의 개수
    can_delete=True  # 삭제 기능 활성화
)

class LabUserForm(UserCreationForm):
    email = forms.EmailField(label="이메일")

    class Meta:
        model = User
        fields = ("username", "password1", "password2", "email")

# 3. [!!!] LabAvailabilityFormSet (새로 추가) [!!!]
LabAvailabilityFormSet = inlineformset_factory(
    LabProfile,           # 부모 모델
    LabAvailability,      # 자식 모델
    fields=('day', 'start_time', 'end_time'), # 폼 필드
    extra=1,              # 기본으로 1개의 빈 폼 노출
    can_delete=True       # 삭제 기능 활성화
)