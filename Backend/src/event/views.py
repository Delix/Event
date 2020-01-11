from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status,permissions
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
     
    
    # def Checkcontact(request,contact)
          #try:

     def get_Form(request, pk):
         try:
              return Event_Form.objects.get(id= pk)
         except Event_Form.DoesNotExist:
             return Response(status=status.HTTP_404_NOT_FOUND)
         
     def get(self, request,pk):
        form = Event_Form.objects.get(Creator = pk)
        serializer = Event_FormSerializer(form,many = True)
        return Response(serializer.data)  

     def post(self, request,pk):
         print(pk)
         if request.data["Form"].get('isComplete')== False:
             serializer = FormSerializer(data = request.data["Form"])
             if serializer.is_valid():
                 serializer.save()
                 return Response(serializer.data, status=status.HTTP_201_CREATED)
             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

         else:
             companySerializer = Form_CompanySerializer(data = request.data['company'])
             contactSerializer = Form_ContactSerializer(data = request.data['contact'])
             attendeeSerializer =Form_AttendeeSerializer(data = request.data['attendees'],many = True)
             if not companySerializer.is_valid():
                 return Response(companySerializer.errors, status=status.HTTP_400_BAD_REQUEST)
             if not contactSerializer.is_valid():
                 return Response(contactSerializer.errors, status=status.HTTP_400_BAD_REQUEST)
             if not attendeeSerializer.is_valid():
                 return Response(attendeeSerializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
         form = self.get_Form(pk)
         serializer = FormSerializer(form, data=request.data['Form'])
         if serializer.is_valid():
             serializer.save()
             companySerializer.save()
         
             contactSerializer.save()
             attendeeSerializer.save()
             return Response(serializer.data,status=status.HTTP_201_CREATED)
         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

      



         

        

    

