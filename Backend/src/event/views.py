from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from rest_framework import status,authentication,permissions
from event.models import Division,Contactus,Event,TermsCondition,Social
from .Serializers import DivisionSerializer,ContactusSerializer,EventSerializer,TermConditionSerializer,SocialSerializer


class DivisionList(APIView):

    #authentication_classes = [authentication.TokenAuthentication]
    
    permission_classes = [permissions.AllowAny]
    def get(self,request):
         divisions = Division.objects.all()
         serializer =DivisionSerializer(divisions,many = True)
         return Response(serializer.data)
   
class EventList(APIView):
     
    permission_classes = [permissions.AllowAny]

    def get(self, request,division):
        event = Event.objects.all().filter(division = division)
        serializer = EventSerializer(event,many = True)
        return Response(serializer.data)  

        

