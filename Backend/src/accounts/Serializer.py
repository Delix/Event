from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from accounts.models import Contact,Company

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        #need to fill it in
        fields = ('id','email')


class RegisterSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        #need to fill it in
        fields = ('id','email')
     

    def create(self, validated_data):
        user = User.objects.create_user( validated_data['email'])

    return user

class RegisterstaffSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        #need to fill it in
        fields = ('id','email','password')
        extra_kwargs = {'password': {'write_only': True}}
     
    def create(self, validated_data):
        user = User.objects.create_staffuser( validated_data['email'],,validated_data['password'])

    return user

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





