from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status,permissions
from 
from knox.models import AuthToken
from .serializers import LoginSerializer,UserSerializer
from rest_framework import status,authentication,permissions

# Create your views here.
  
class Login(APIView)
     permission_classes = [permissions.AllowAny] 
      def get(self, request):
          users = User.objects.all()
          serializer = UserSerializer(users,many = True)
          return Response(serializer.data)  

     def post(self, request, *args, **kwargs):
             Serializer = LoginSerializer(data = request.data)
             if Serializer.is_valid():
                 user = Serializer.validated_data
                 return Response({
                      "user": UserSerializer(user, context= Serializer.get_serializer_context()).data,
                      "token": AuthToken.objects.create(user)
                     })

                 return Response(Serializer.data, status=status.HTTP_201_CREATED)
             return Response(Serializer.errors, status=status.HTTP_400_BAD_REQUEST)
               
 