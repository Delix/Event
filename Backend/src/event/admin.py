from django.contrib import admin
from .models import Contact,Event,Division,Attendee,Contactus,TermsCondition,Event_Form,Company
# Register your models here.

admin.site.register(Event)
admin.site.register(Division)
admin.site.register(Attendee)
admin.site.register(Contactus)
admin.site.register(TermsCondition)
admin.site.register(Company)
admin.site.register(Contact)
