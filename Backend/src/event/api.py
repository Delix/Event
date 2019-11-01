from rest_framework import viewsets,permissions
from event.models import Division,Contactus,Event,TermsCondition
from .Serializers import DivisionSerializer,ContactusSerializer,EventSerializer,TermConditionSerializer

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