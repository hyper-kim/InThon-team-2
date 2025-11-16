from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from lab.models import LabProfile  # 실제 모델 경로에 맞게 수정

User = get_user_model()

@receiver(post_save, sender=User)
def create_lab_profile_for_admin(sender, instance, created, **kwargs):
    """
    회원가입 시 관리자(Lab 관리자)면 자동으로 Lab Profile 생성
    """
    if created:  # 새로 생성된 사용자일 때만
        # 관리자 유형 체크 (필드명은 실제 모델에 맞게 수정)
        if instance.user_type == 'lab_admin' or instance.is_lab_manager:
            LabProfile.objects.create(
                user=instance,
                # 기본값이 필요한 필드가 있다면 여기에 추가
            )