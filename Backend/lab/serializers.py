# Backend/lab/serializers.py
from rest_framework import serializers
from .models import LabProfile, JobPosting, LabAvailability, Application

# (하위 Serializer인 LabAvailabilitySerializer, JobPostingSerializer는
# 이전 답변과 동일하게 수정 - 'id' 필드 포함, read_only=True)

class LabAvailabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = LabAvailability
        fields = ['id', 'day', 'start_time', 'end_time']
        read_only_fields = ['id'] 

class JobPostingSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPosting
        fields = ['id', 'title', 'description', 'deadline', 'attachment']
        read_only_fields = ['id']

# [!!!] 메인 LabProfileSerializer 수정
class LabProfileSerializer(serializers.ModelSerializer):
    
    availability_slots = LabAvailabilitySerializer(many=True, required=False)
    jobposting_set = JobPostingSerializer(many=True, required=False, source='jobposting_set.all')
    tags_list = serializers.SerializerMethodField()

    class Meta:
        model = LabProfile
        fields = [
            'id', 'lab_name', 'professor_name', 'lab_description',
            'tags', 'tags_list',
            'availability_slots', 'jobposting_set', 'user',
            
            # 관리자 입력용 필드
            'scholar_author_id',
            'github_username',

            # AI/크롤러 결과 필드
            'research_summary_ko',
            'github_projects_json',
            'last_external_sync',
            
            # [!!!] DBPia 결과 필드 추가
            'dbpia_papers_json',
        ]
        
        # [!!!] 읽기 전용 필드 설정 (중요)
        read_only_fields = [
            'user', 'tags_list',
            'research_summary_ko', 'github_projects_json', 'last_external_sync',
            'dbpia_papers_json', # [!!!] 읽기 전용에 추가
        ]
        
    def get_tags_list(self, obj):
        if obj.tags:
            return [tag.strip() for tag in obj.tags.split(',')]
        return []

    # [!!!] 저장/수정 로직 (이전 답변과 동일)
    def update(self, instance, validated_data):
        slots_data = validated_data.pop('availability_slots', None)
        jobs_data = validated_data.pop('jobposting_set', {}).get('all', None) 

        instance = super().update(instance, validated_data)

        if slots_data is not None:
            instance.availability_slots.all().delete()
            for slot_data in slots_data:
                LabAvailability.objects.create(lab=instance, **slot_data)

        if jobs_data is not None:
            instance.jobposting_set.all().delete()
            for job_data in jobs_data:
                JobPosting.objects.create(lab=instance, **job_data)

        return instance
    

# [!!!] (신규) 학생이 '생성(POST)'할 때 사용할 Serializer
class ApplicationCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        # 학생은 '공고 ID'와 '지원서 내용'만 보냄
        fields = ['job_posting', 'application_text'] 

# [!!!] (신규) 랩 관리자에게 '보여줄(GET)' Serializer
class ApplicationListSerializer(serializers.ModelSerializer):
    # (중첩 Serializer로 학생의 기본 정보도 함께 보여줌)
    student_username = serializers.CharField(source='student.user.username', read_only=True)
    student_major = serializers.CharField(source='student.major', read_only=True)

    class Meta:
        model = Application
        # AI가 분석한 모든 필드를 포함
        fields = [
            'id', 'student_username', 'student_major', 'submitted_at',
            'application_text',
            'ai_status', 'ai_summary', 'ai_pros', 'ai_cons'
        ]