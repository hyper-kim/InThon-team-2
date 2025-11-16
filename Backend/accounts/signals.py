from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from lab.models import LabProfile  # 실제 모델 경로에 맞게 수정

User = get_user_model()
