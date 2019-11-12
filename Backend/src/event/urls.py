from .api import DivisionViewSet,ContactViewSet,EventViewSet,TermConditionViewSet,SocialViewSet
from rest_framework import routers



router = routers.DefaultRouter()
router.register('Divisions', DivisionViewSet,'Divisions')
router.register('Contact', ContactViewSet,'Contact')
router.register('Events', EventViewSet,'Events')
router.register('TermCondition', TermConditionViewSet,'TermCondition')
router.register('Social', SocialViewSet,'Social')



urlpatterns = router.urls