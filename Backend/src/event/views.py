from rest_framework import viewset
from event.models import Division
from .Serializers from DivisionSerializer

class DivisionViewSet(viewset.ModelViewSet):
    queryset = Division.objects.all()
    serializer_class = DivisionSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contactus.objects.all()

    serializer_class = ContactusSerializer


# Create your views here.
