# lab/serializers.py (새 파일)
from rest_framework import serializers
from .models import LabProfile, JobPosting, LabAvailability

# [!] DRF는 ModelForm과 매우 유사합니다.

# 1. '면담 가능 시간' Serializer
class LabAvailabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = LabAvailability
        fields = ['id', 'day', 'start_time', 'end_time'] # 'lab' 필드는 제외 (부모가 정해줌)
        read_only_fields = ['id']

# 2. '모집 공고' Serializer
class JobPostingSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPosting
        fields = ['id', 'title', 'description', 'deadline', 'attachment']
        read_only_fields = ['id']

# 3. '연구실 프로필' Serializer (위 2개를 포함!)
class LabProfileSerializer(serializers.ModelSerializer):
    # [!] 1:N 관계인 자식들을 'nested serializer'로 포함합니다.
    # 'availability_slots'는 models.py의 related_name
    availability_slots = LabAvailabilitySerializer(many=True,required=False)
    # 'jobposting_set'은 장고가 자동으로 만든 이름 (ForeignKey)
    jobposting_set = JobPostingSerializer(many=True,required=False,source='jobposting_set.all')
    tags_list = serializers.SerializerMethodField()
    class Meta:
        model = LabProfile
        fields = [
            'id', 
            'lab_name', 
            'professor_name',
            'lab_instruction',
            'tags', # (모델에 tags 필드 추가 필요)
            'lab_link',
            'tags_list',
            'availability_slots', # (read_only=True 제거)
            'jobposting_set',     # (read_only=True 제거)
            'user'
        ]
        read_only_fields = ['user', 'tags_list'] # tags는 쓰기, tags_list는 읽기
        
    def get_tags_list(self, obj):
        if obj.tags:
            return [tag.strip() for tag in obj.tags.split(',')]
        return []

    # [!!!] 4. views.py의 저장 로직을 'update' 메서드로 구현
    def update(self, instance, validated_data):
        # 1. 중첩된 데이터(slots, jobs)를 validated_data에서 분리
        slots_data = validated_data.pop('availability_slots', None)
        jobs_data = validated_data.pop('jobposting_set', {}).get('all', None) # source='jobposting_set.all'에 맞춤

        # 2. LabProfile의 기본 필드(lab_name, description 등) 업데이트
        instance = super().update(instance, validated_data)

        # 3. 면담 시간(slots) 업데이트 로직
        if slots_data is not None:
            # (간단한 MVP: 기존 것 다 지우고 새로 생성)
            instance.availability_slots.all().delete()
            for slot_data in slots_data:
                LabAvailability.objects.create(lab=instance, **slot_data)

        # 4. 모집 공고(jobs) 업데이트 로직
        if jobs_data is not None:
            # (간단한 MVP: 기존 것 다 지우고 새로 생성)
            instance.jobposting_set.all().delete()
            for job_data in jobs_data:
                JobPosting.objects.create(lab=instance, **job_data)

        return instance