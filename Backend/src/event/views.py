from rest_framework.views import APIView
from rest_framework.response import Response
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

        
class ContactList(APIView):
     
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        contact = Contactus.objects.all()
        serializer = ContactusSerializer(term,many = True)
        return Response(serializer.data)  

class SocialList(APIView):
     
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        social = Social.objects.all()
        serializer = SocialSerializer(term,many = True)
        return Response(serializer.data)  


class Form(APIView):
     
     permission_classes = [permissions.AllowAny]

     def get_Company(self,name):
             try:
                 return Company.objects.get(name = name)
             except Company.DoesNotExist:
                 Serializer = CompanySerializer()
                 if Serializer.is_valid():
                    Serializer.save()
                    return Serializer.data.id
                 else :
                    raise http400
        


     def post(self, request):
            Company = self.get_Company(request.data.company.name)
              
            person = request.data.person
            person.Company = Company
            cSerializer = ContactSerializer(request.data.contact)
            pSerializer = AttendeeSerializer(person,many = True)
              
            if cSerializer.is_valid():
              cserializer.save()
              if not pSerializer.is_valid():
                return Response(pserializer.errors, status=status.HTTP_400_BAD_REQUEST)
              pserializer.save()
              forms = request.data.forms
              for form in range(len(person)):
                 forms[form].contact = cSerializer.data[form].id
                 forms[form].attendee = pSerializer.data[form].id
              serializer = Event_FormSerializer(forms,many =True)
              if not serializer.is_valid():
                 return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
              return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(cserializer.errors, status=status.HTTP_400_BAD_REQUEST)


         

        

    

