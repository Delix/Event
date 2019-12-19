
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status,permissions
from django.http import Http404
from rest_framework import status,authentication,permissions
from .Serializers import TermConditionSerializer,SocialSerializer,ContactusSerializer
from general.models import Contactus,Social,TermsCondition 

# Create your views here.
class ListTerm(APIView):
     
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        term = TermsCondition.objects.all()
        serializer = TermConditionSerializer(term,many = True)
        return Response(serializer.data)  

class ListContactus(APIView):
     
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        contact = Contactus.objects.all()
        serializer = ContactusSerializer(term,many = True)
        return Response(serializer.data)    

class ListSocial(APIView):
     
     permission_classes = [permissions.AllowAny]

     def get(self, request):
        social = Social.objects.all()
        serializer = SocialSerializer(social,many = True)
        return Response(serializer.data)  
