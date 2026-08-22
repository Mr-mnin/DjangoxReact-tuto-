from django.contrib import admin
from django.urls import path
from .views import *
from rest_framework.routers import  DefaultRouter

router = DefaultRouter()
router.register('countries', CountryViewSet, basename='countries')
router.register('leagues', LeagueViewSet, basename='leagues')
router.register('characteristics', CharacteristicViewSet, basename='characteristics')
router.register('football', FootballClubViewSet, basename='football')
urlpatterns = router.urls