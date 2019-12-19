from rest_framework import serializers
from general.models import Social,Contactus,TermsCondition

class ContactusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contactus
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
