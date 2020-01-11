from rest_framework import serializers
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


class FormSerializer(serializers.ModelSerializer):

     class Meta:
         model = Event_Form
         #need to fill it in
         fields = ['id','previous','hear','event']
     
  


class Event_FormSerializer(serializers.ModelSerializer):
     attendees = serializers.PrimaryKeyRelatedField(many = True, read_only = True)
     company = serializers.IntegerField()
     
    
     class Meta:
        model = Event_Form
         #need to fill it in
        fields = ['id','previous','hear','event','attendees','company']

   

class Form_AttendeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendee
        #need to fill it in
        fields = ['id','title','name','designation','email','phone','form']

  
  
class Form_CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        #need to fill it in
        fields = ['id','name','sector','form']
   


  
 