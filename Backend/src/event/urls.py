from .api import DivisionViewSet
from rest_framework import router



router = routers.DefaultRouter()
router.register('api/Divisions', DivisionViewSet,'Divisions')

urlpatterns = router.urls