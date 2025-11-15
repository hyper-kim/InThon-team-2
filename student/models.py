# students/models.py
from django.db import models
from django.contrib.auth.models import User

class StudentProfile(models.Model):
    # [핵심] accounts 앱의 User 모델과 1:1 연결
    user = models.OneToOneField(
        User, 
        on_delete=models.CASCADE,
        verbose_name="학생 계정"
    )
    
    # 예: 학생 프로필 필드
    student_id = models.CharField(max_length=20, blank=True, verbose_name="학번")
    major = models.CharField(max_length=100, blank=True, verbose_name="전공")
    
    # (추후 '스크랩한 랩' 등 ManyToManyField 추가 가능)
    # saved_labs = models.ManyToManyField('lab.LabProfile', blank=True)

    def __str__(self):
        return f"{self.user.username} (학생 프로필)"