from rest_framework import viewsets,permissions
from event.models import Division,Contactus,Event
from .Serializers import DivisionSerializer,ContactusSerializer,EventSerializer

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