from rest_framework import viewsets,permissions,status
from rest_framework.views import APIView
from rest_framework.response import Response

from django.http import Http404
from event.models import Division,Contactus,Event,TermsCondition,Social
from .Serializers import DivisionSerializer,ContactusSerializer,EventSerializer,TermConditionSerializer,SocialSerializer

class DivisionList(APIView):

    def get(self,request):
         divisions = Division.objects.all()
         serializer =DivisionSerializer(divisions,many = True)
         return Response(serializer.data)
   

      
    
class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contactus.objects.all()
    permission_classes = [
        permissions.AllowAny]
    serializer_class = ContactusSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    permission_classes = [
        permissions.AllowAny]
    serializer_class = EventSerializer

class TermConditionViewSet(viewsets.ModelViewSet):
    queryset = TermsCondition.objects.all()
    permission_classes = [
        permissions.AllowAny]
    serializer_class = TermConditionSerializer

class SocialViewSet(viewsets.ModelViewSet):
    queryset = Social.objects.all()
    permission_classes = [
        permissions.AllowAny]
    serializer_class = SocialSerializer