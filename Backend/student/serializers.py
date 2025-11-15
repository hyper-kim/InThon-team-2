# students/serializers.py (새 파일)
from rest_framework import serializers
from .models import StudentProfile

from lab.serializers import LabProfileSerializer

class StudentProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentProfile
        # React로 보내줄 필드 목록
        fields = ['id', 'user', 'student_id', 'major','saved_labs']
        # 'user' 필드는 API를 통해 수정할 수 없도록 읽기 전용으로 설정
        read_only_fields = ['user']
class ScrappedLabListSerializer(LabProfileSerializer):
    pass