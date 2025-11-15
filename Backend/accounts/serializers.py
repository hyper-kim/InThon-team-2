from django.contrib.auth.models import User
from rest_framework import serializers

from lab.models import LabProfile
from student.models import StudentProfile


class RegisterSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=False)
    email = serializers.EmailField(required=False, allow_blank=True)
    password = serializers.CharField(write_only=True, required=True)
    role = serializers.CharField(required=False, allow_blank=True)
    lab_name = serializers.CharField(required=False, allow_blank=True)
    professor_name = serializers.CharField(required=False, allow_blank=True)
    name = serializers.CharField(required=False, allow_blank=True)
    student_id = serializers.CharField(required=False, allow_blank=True)
    major = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'role', 'lab_name', 'professor_name', 'name', 'student_id', 'major']

    def validate(self, data):
        username = data.get('username') or data.get('email')
        if not username:
            raise serializers.ValidationError("username 또는 email 중 하나는 필요합니다.")

        if User.objects.filter(username=username).exists():
            raise serializers.ValidationError("이미 사용 중인 아이디입니다.")

        email = data.get('email')
        if email and User.objects.filter(email=email).exists():
            raise serializers.ValidationError("이미 사용 중인 이메일입니다.")

        return data

    def create(self, validated_data):
        username = validated_data.get('username') or validated_data.get('email')
        email = validated_data.get('email') or ''
        password = validated_data.get('password')

        user = User.objects.create_user(
            username=username,
            email=email,
            password=password
        )

        role = validated_data.get('role', '') or ''
        print(f"Creating user with role: {role}")

        # If registration includes lab details or role indicates lab admin, create LabProfile
        lab_name = validated_data.get('lab_name')
        professor_name = validated_data.get('professor_name')
        if lab_name or role in ['lab_admin', 'professor']:
            lp = LabProfile.objects.create(
                user=user,
                lab_name=lab_name or f"{username}'s Lab",
                professor_name=professor_name or '',
                lab_description='Your lab description here.'
            )
            lp.save()

        # If registration includes student details, create StudentProfile
        student_id = validated_data.get('student_id')
        major = validated_data.get('major')
        name = validated_data.get('name')
        if student_id or major or name:
            sp = StudentProfile.objects.create(
                user=user,
                student_id=student_id or '',
                major=major or ''
            )
            sp.save()

        return user