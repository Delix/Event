from rest_framework import viewset
from event.models import Division
from .Serializers from DivisionSerializer

class DivisionViewSet(viewset.ModelViewSet):
    queryset = Division.objects.all()
    permission_classes = [
        permission.AllowAny
    ]
        serializer_class = DivisionSerializer
