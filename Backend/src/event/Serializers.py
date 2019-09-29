from rest_framework import serializers
from event.models import Event,Division,Guest

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
         #need to fill it in
        fields = '__all__'

   

class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        #need to fill it in
        fields = '__all__'

class DivisionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Division
         #need to fill it in
        fields = '__all__'

        class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
         #need to fill it in
        fields = '__all__'

   