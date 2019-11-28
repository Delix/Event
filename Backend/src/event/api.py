from rest_framework import viewsets,permissions,status
from rest_framework.decorators import action
from rest_framework.response import Response

from django.http import Http404
from event.models import Division,Contactus,Event,TermsCondition,Social,Event_Form,Company,Contact,Attendee
from .Serializers import DivisionSerializer,ContactusSerializer,EventSerializer,TermConditionSerializer,SocialSerializer,Event_FormSerializer,CompanySerializer,ContactSerializer,AttendeeSerializer


   
class DivisionViewSet(viewsets.ModelViewSet):
    queryset = Division.objects.all()
    permission_classes = [
        permissions.AllowAny]
    serializer_class = DivisionSerializer


      
    
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

class Event_FormViewSet(viewsets.ModelViewSet):
    queryset = Event_Form.objects.all()
    permission_classes = [
        permissions.AllowAny]
    serializer_class = Event_FormSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    permission_classes = [
        permissions.AllowAny]
    serializer_class = ContactSerializer

class AttendeeViewSet(viewsets.ModelViewSet):
    queryset = Attendee.objects.all()
    permission_classes = [
        permissions.AllowAny]
    serializer_class = AttendeeSerializer
class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    permission_classes = [
        permissions.AllowAny]
    serializer_class = CompanySerializer