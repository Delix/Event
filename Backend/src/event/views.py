from rest_framework.views import APIView
from rest_framework.response import Response

from django.contrib.auth import get_user_model
from django.http import Http404
from rest_framework import status,authentication,permissions
from event.models import Division,Event,Company,Event_Form,Attendee
from .Serializers import FormSerializer,Form_AttendeeSerializer,Event_FormSerializer,Form_CompanySerializer,DivisionSerializer,EventSerializer
from accounts.Serializer import Form_ContactSerializer


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


class ListCompany(APIView):
        
     permission_classes = [permissions.AllowAny] 
    
     def get(self, request):
          company = Company.objects.all()
          serializer = CompanySerializer(company,many = True)
          return Response(serializer.data)  

     def post(self, request):
             Serializer = CompanySerializer(data = request.data)
             if Serializer.is_valid():
                 Serializer.save()
                 return Response(Serializer.data, status=status.HTTP_201_CREATED)
             return Response(Serializer.errors, status=status.HTTP_400_BAD_REQUEST)
               
 
     


class ListAttendee(APIView):

 permission_classes = [permissions.AllowAny]


 def get(self, request):
        attendee = Attendee.objects.all()
        serializer = AttendeeSerializer(attendee,many = True)
        return Response(serializer.data)  


 def post(self, request):
     Serializer = AttendeeSerializer(data = request.data,many = True)
     if Serializer.is_valid():
         Serializer.save()
         return Response(Serializer.data, status=status.HTTP_201_CREATED)
     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ListForm(APIView):
    
     permission_classes = [permissions.AllowAny]
     
    
    
     def checkemail(request,contact):
        
         User = get_user_model()
         try:
             return User.objects.get(email = contact.get('user'))
         except User.DoesNotExist:
             contactserializer = Form_ContactSerializer(data = contact)
             if not contactserializer.is_valid():
                return Response(contactserializer.errors, status=status.HTTP_400_BAD_REQUEST)
             contactserializer.save()
             user = User.objects.get(email = contact.get('user'))
             return user

     def get_Form(request, pk):
         try:
              return Event_Form.objects.get(id= pk)
         except Event_Form.DoesNotExist:
             return Response(status=status.HTTP_404_NOT_FOUND)
         
     def get(self, request,pk):
        form = Event_Form.objects.get(Creator = pk)
        serializer = Event_FormSerializer(form,many = True)
        return Response(serializer.data)  
      
    
             

     def post(self, request):
             creator =  self.checkemail(request.data['contact'])
             form = request.data['Form'].copy()
             form['creator'] = creator.pk
             formserializer =FormSerializer(data = form)
             if not formserializer.is_valid():
                 print(formserializer.errors)
                 return Response(formserializer.errors, status=status.HTTP_400_BAD_REQUEST)
         
             formserializer.save()
             return Response(formserializer.data,status=status.HTTP_201_CREATED)
        
      



         

        

    

