from rest_framework import serializers
from accounts.Serializer import Form_ContactSerializer

from event.models import Event,Division,Event_Form,Attendee,Company


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        #need to fill it in
        fields = '__all__'

class AttendeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendee
        #need to fill it in
        fields = '__all__'

class DivisionSerializer(serializers.ModelSerializer):
     events = serializers.PrimaryKeyRelatedField(many = True, read_only = True)
     class Meta:
        model = Division
         #need to fill it in
        fields = ['id','name','image','events']

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
         #need to fill it in
        fields = '__all__'



class Event_FormSerializer(serializers.ModelSerializer):
     attendees = serializers.PrimaryKeyRelatedField(many = True, read_only = True)
     company = serializers.IntegerField()
     
     
    
     class Meta:
        model = Event_Form
         #need to fill it in
        fields = ['id','previous','hear','event','attendees','company']

  
class Form_CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        #need to fill it in
        fields = ['id','name','sector']
   

class Form_AttendeeSerializer(serializers.ModelSerializer):
 
     class Meta:
         model = Attendee
                  #need to fill it in
         fields = ['id','title','name','designation','email','phone','form']

class FormSerializer(serializers.ModelSerializer):
     company = Form_CompanySerializer(required = True)
     attendees = Form_AttendeeSerializer(required = True,many = True)
     class Meta:
         model = Event_Form
         #need to fill it in
         fields = ['id','previous','hear','event','company','creator','attendees']
     
     def Checkcompany(self, **kwargs):
         try:
            
             return Company.objects.get(name = kwargs['name'].lower())
         except Company.DoesNotExist:
             return Company.objects.create(**kwargs)

     def create(self, validated_data):
        
         attendees_data = validated_data.pop('attendees')
         company_data = validated_data.pop('company')
         print(validated_data)
         company = self.Checkcompany(**company_data)
         form = Event_Form.objects.create(company = company ,**validated_data)
    
         for attendee_data in attendees_data:
             Attendee.objects.create(form = form, **attendee_data)
   
         return form

  

