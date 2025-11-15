# lab/serializers.py (새 파일)
from rest_framework import serializers
from .models import LabProfile, JobPosting, LabAvailability

# [!] DRF는 ModelForm과 매우 유사합니다.

# 1. '면담 가능 시간' Serializer
class LabAvailabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = LabAvailability
        fields = ['id', 'day', 'start_time', 'end_time'] # 'lab' 필드는 제외 (부모가 정해줌)

# 2. '모집 공고' Serializer
class JobPostingSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPosting
        fields = ['id', 'title', 'description', 'deadline', 'attachment']

# 3. '연구실 프로필' Serializer (위 2개를 포함!)
class LabProfileSerializer(serializers.ModelSerializer):
    # [!] 1:N 관계인 자식들을 'nested serializer'로 포함합니다.
    # 'availability_slots'는 models.py의 related_name
    availability_slots = LabAvailabilitySerializer(many=True)
    # 'jobposting_set'은 장고가 자동으로 만든 이름 (ForeignKey)
    jobposting_set = JobPostingSerializer(many=True)

    class Meta:
        model = LabProfile
        # [!] 'user' 필드는 읽기 전용(read_only)으로 설정 (보안)
        fields = ['id', 'lab_name', 'availability_slots', 'jobposting_set', 'user']
        read_only_fields = ['user']

    # [!!!] Update 로직 (매우 중요)
    # React가 중첩된 JSON을 통째로 보냈을 때,
    # 장고가 자식 모델들(JobPosting, LabAvailability)을 
    # 생성/수정/삭제할 수 있게끔 'update' 메서드를 오버라이드해야 합니다.
    # (이 부분은 해커톤에서 가장 복잡한 부분이라서, 
    # 우선 'GET'(읽기)만 구현하고 'PUT'(수정)은 나중에 할 수도 있습니다.)
    
    # def update(self, instance, validated_data):
    #     # ... (중첩된 데이터(slots, jobs)를 처리하는 로직 필요) ...
    #     instance.lab_name = validated_data.get('lab_name', instance.lab_name)
    #     instance.save()
    #     return instance