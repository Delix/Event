from rest_framework import serializers
from event.models import Event,Contact,Division,Social,Event_Form,Attendee,Contactus,TermsCondition,Company


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


class ContactusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contactus
         #need to fill it in
        fields = '__all__'

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
         #need to fill it in
        fields = '__all__'

class TermConditionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TermsCondition
         #need to fill it in
        fields = '__all__'

class SocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Social
         #need to fill it in
        fields = '__all__'


class Event_FormSerializer(serializers.ModelSerializer):
     attendees = serializers.PrimaryKeyRelatedField(many = True, read_only = True)
     company = serializers.PrimaryKeyRelatedField(many = True, read_only = True)
     contact = serializers.PrimaryKeyRelatedField( many = True,read_only = True)
     class Meta:
        model = Event_Form
         #need to fill it in
        fields = ['id','previous','hear','event','isComplete','company','contact','attendees']
          
   
        

