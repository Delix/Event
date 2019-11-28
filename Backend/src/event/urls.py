from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path
from .views import DivisionList,EventList,TermList,ContactusList,SocialList,ListCompany,ListContact,ListAttendee,ListForm

urlpatterns = [
    path('Divisions/', DivisionList.as_view()),
    path('Events/<int:division>/', EventList.as_view()),
    path('Contactus/', ContactusList.as_view()),
    path('Social/', SocialList.as_view()),
    path('Form/', ListForm.as_view()),
    path('company/', ListCompany.as_view()),  
    path('attendee/', ListAttendee.as_view()),
    path('contact/', ListContact.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)
