from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path
from event import views




urlpatterns = [
    path('Divisions/',views.DivisionList.as_view()),
    path('Events/<division>/',views.EventList.as_view())
]
#router = routers.DefaultRouter()
#router.register('Divisions', DivisionViewSet,'Divisions')
#router.register('Contact', ContactViewSet,'Contact')

#router.register('Events', EventViewSet,'Events')
#router.register('TermCondition', TermConditionViewSet,'TermCondition')
#router.register('Social', SocialViewSet,'Social')



urlpatterns =  urlpatterns