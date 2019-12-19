from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path
from .views import ListContactus,ListSocial,ListTerm

urlpatterns = [
    path('Form/', ListContactus.as_view()),
    path('company/', ListSocial.as_view()),  
    path('attendee/', ListTerm.as_view())
]
urlpatterns = format_suffix_patterns(urlpatterns)