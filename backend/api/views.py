from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import *
from .serializer import *
from rest_framework.response import Response

# Create your views here

class CountryViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

