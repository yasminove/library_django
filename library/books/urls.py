from rest_framework import routers 
from .api import BookViewSet

router = routers.DefaultRouter()

router.register('', BookViewSet, 'book-view-set')

urlpatterns = router.urls