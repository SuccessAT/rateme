from django.urls import path, include
from rest_framework.routers import DefaultRouter
# from .views import RatingViewSet
from .views import *

router = DefaultRouter()
router.register(r'ratings', RatingViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/device-data/', device_data, name='device-data'),
    # path('api/device-data/', views.device_data, name='device-data'),
]