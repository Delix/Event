from django.contrib import admin
from .models import Event,Division,Event_Form,Attendee,Event_Form,Company
# Register your models here.

admin.site.register(Event)
admin.site.register(Division)
admin.site.register(Attendee)
admin.site.register(Company)

admin.site.register(Event_Form)
