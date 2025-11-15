
# Create your views here.
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required # [!!!] 로그인 필수
from .models import LabProfile
from .forms import LabProfileForm, JobPostingFormSet, LabAvailabilityFormSet

@login_required # [!!!] 이 페이지는 로그인한 사용자만 접근 가능
def manage_lab_profile(request):
    
    # 1. request.user (현재 로그인한 유저)에게 속한 LabProfile을 가져옴
    #    (프로필이 없으면 404 에러 발생. try-except로 처리)
    try:
        profile = request.user.labprofile
    except LabProfile.DoesNotExist:
        # TODO: 프로필이 없는 유저를 위한 처리 (예: 프로필 생성 페이지로 리다이렉트)
        # 지금은 간단히 에러 메시지만 표시
        return render(request, 'error.html', {'message': '랩 프로필이 존재하지 않습니다.'})

    # 2. [POST] 폼 저장 버튼을 눌렀을 때
    if request.method == 'POST':
        # 2-1. 메인 프로필 폼과 (파일 포함)
        form = LabProfileForm(request.POST, instance=profile)
        # 2-2. 하위 모집 공고 폼셋을 (파일 포함) 동시에 처리
        formset_jobs = JobPostingFormSet(request.POST, request.FILES, instance=profile)
        # [!!!] 1. 'POST'일 때 AvailabilityFormSet 인스턴스 생성
        formset_avail = LabAvailabilityFormSet(request.POST, instance=profile)
        
        # [!!!] 2. 3개 폼 모두 유효한지 검사
        if form.is_valid() and formset_jobs.is_valid() and formset_avail.is_valid():
            form.save()
            formset_jobs.save()
            formset_avail.save() # [!!!] 3. 저장
            
            return redirect('manage_lab_profile')

    else: # 'GET'일 때
        form = LabProfileForm(instance=profile)
        formset_jobs = JobPostingFormSet(instance=profile)
        
        # [!!!] 4. 'GET'일 때 AvailabilityFormSet 인스턴스 생성
        formset_avail = LabAvailabilityFormSet(instance=profile)

    context = {
        'form': form,
        'formset_jobs': formset_jobs,       # 이름 충돌을 피하기 위해 변경
        'formset_avail': formset_avail,     # [!!!] 5. 컨텍스트에 추가
        'lab_name': profile.lab_name
    }
    return render(request, 'templates/lab_profile_register.html', context)


        
        