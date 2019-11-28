from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status,permissions
from django.http import Http404
from rest_framework import status,authentication,permissions
from event.models import Division,Contact,Contactus,Event,Company,Event_Form,Attendee,TermsCondition,Social
from .Serializers import AttendeeSerializer,ContactSerializer,Event_FormSerializer,CompanySerializer,DivisionSerializer,ContactusSerializer,EventSerializer,TermConditionSerializer,SocialSerializer


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

        
   
class TermList(APIView):
     
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        term = TermsCondition.objects.all()
        serializer = TermConditionSerializer(term,many = True)
        return Response(serializer.data)  

        
class ContactusList(APIView):
     
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        contact = Contactus.objects.all()
        serializer = ContactusSerializer(term,many = True)
        return Response(serializer.data)  

class SocialList(APIView):
     
     permission_classes = [permissions.AllowAny]

     def get(self, request):
        social = Social.objects.all()
        serializer = SocialSerializer(social,many = True)
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
               
 
     

class ListContact(APIView):
     permission_classes = [permissions.AllowAny]
     def get(self, request):
          company = Contact.objects.all()
          serializer = ContactSerializer(company,many = True)
          return Response(serializer.data)  

     def post(self, request):
             Serializer = ContactSerializer(data = request.data)
             if Serializer.is_valid():
                 Serializer.save()
                 return Response(Serializer.data, status=status.HTTP_201_CREATED)
             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
     
     def get(self, request):
        form = Event_Form.objects.all()
        serializer = Event_FormSerializer(company,many = True)
        return Response(serializer.data)  

     def post(self, request):
         serializer = Event_FormSerializer(data =request.data,many =True)
         if serializer.is_valid():
             serializer.save()
             return Response(serializer.data, status=status.HTTP_201_CREATED)
         return Response(cserializer.errors, status=status.HTTP_400_BAD_REQUEST)


         

        

    

