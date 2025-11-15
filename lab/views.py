
# Create your views here.
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required # [!!!] 로그인 필수
from .models import LabProfile
from .forms import LabProfileForm, JobPostingFormSet

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
        formset = JobPostingFormSet(request.POST, request.FILES, instance=profile)
        
        if form.is_valid() and formset.is_valid():
            form.save()
            formset.save()
            # 저장 후 '내 랩 관리' 페이지로 새로고침
            return redirect('manage_lab_profile') # urls.py에 설정할 name

    # 3. [GET] 그냥 페이지에 접속했을 때
    else:
        # 3-1. DB에 저장된 정보로 폼을 채움
        form = LabProfileForm(instance=profile)
        # 3-2. DB에 저장된 정보로 폼셋을 채움
        formset = JobPostingFormSet(instance=profile)

    # 4. 템플릿에 폼과 폼셋을 전달
    context = {
        'form': form,
        'formset': formset,
        'lab_name': profile.lab_name
    }
    return render(request, 'lab/lab_profile_form.html', context)