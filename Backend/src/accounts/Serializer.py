from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from accounts.models import Contact,Company
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        #need to fill it in
        fields = ('id','username','email')


class RegisterSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        #need to fill it in
        fields = ('id','username','email','password')
        extra_kwargs = {'password':{'write_only'}}
    
      


class Form_ContactSerializer(serializers.ModelSerializer):
    user = RegisterSerializer
    class Meta:
        model = Contact
        #need to fill it in
        fields = ['id','title','name','email','user','phone','form']
    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create_user(**validated_data)
        contact = Contact.objects.create(user = user,**validated_data)
        return contact





