from rest_framework import serializers
from django.contrib.auth import get_user_model
from accounts.models import Contact
from django.contrib.auth import authenticate



User = get_user_model()
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        #need to fill it in
        fields = ('email')

class RegisteradminSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        #need to fill it in
        fields = ('id','email','password')
        extra_kwargs = {'password': { 'write_only': True}}
    
    def create(self,validated_data):
        user = User.objects.create_adminuser(validated_data['email'],validated_data['password'])
        return user

   

class LoginSerializer(serializers.Serializer):
     email = serializers.EmailField()
     password = serializers.CharField()

     def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
          return user
        raise serializers.ValidationError("Incorrect Credentials")   


class Form_ContactSerializer(serializers.ModelSerializer):
     user = serializers.EmailField()
     class Meta:
        model = Contact
        #need to fill it in
        fields = ['title','name','phone','user']

     def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create_formuser(user_data)
        contact = Contact.objects.create(creator = user,**validated_data)
        return contact




