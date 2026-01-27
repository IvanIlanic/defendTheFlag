from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics # Great tool to create good looking api
from .serializer import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny # Specifies who can use the view

# Example can be found on genetric view under Django LIb
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

# Create your views here.
