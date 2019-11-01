from django.contrib import admin
from .models import Event,Division,Guest,Contactus,TermsCondition
# Register your models here.

admin.site.register(Event)
admin.site.register(Division)
admin.site.register(Guest)
admin.site.register(Contactus)
admin.site.register(TermsCondition)