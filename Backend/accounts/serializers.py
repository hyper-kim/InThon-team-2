from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth import get_user_model

from lab.models import LabProfile


User = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=True)
    user_type = serializers.ChoiceField(choices=['student','lab_admin'])

    class Meta:
        model = User
        fields = ['email', 'password','username','user_type']
    
    def validate(self, data):
        if User.objects.filter(email=data['email']).exists():
            raise serializers.ValidationError("이미 사용 중인 이메일입니다.")

        return data

    def create(self, validated_data):
        user_type = validated_data.get('user_type')
        user = User.objects.create_user(
            username=validated_data['email'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        if user_type == 'lab_admin':
            LabProfile.objects.create(user=user)

        return user