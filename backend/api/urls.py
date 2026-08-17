from django.contrib import admin
from django.urls import path
from .views import *
from rest_framework.routers import  DefaultRouter

router = DefaultRouter()
router.register('countries', CountryViewSet, basename='countries')
router.register('leagues', LeagueViewSet, basename='leagues')
router.register('characteristcs', CharacteristicViewSet, basename='characteristics')

urlpatterns = router.urls