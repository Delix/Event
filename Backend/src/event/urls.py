from .api import DivisionViewSet,ContactViewSet,EventViewSet
from rest_framework import routers



router = routers.DefaultRouter()
router.register('Divisions', DivisionViewSet,'Divisions')
router.register('Contact', ContactViewSet,'Contact')
router.register('Events', EventViewSet,'Events')



urlpatterns = router.urls