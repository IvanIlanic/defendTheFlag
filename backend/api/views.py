from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics # Great tool to create good looking api
from .serializer import UserSerializer
from .serializer import TeamsSerializer
from .models import Teams
from rest_framework.permissions import IsAuthenticated, AllowAny # Specifies who can use the view

# Example can be found on genetric view under Django LIb
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
# Create your views here.

class TeamsListCreate(generics.CreateAPIView):
    serializer_class = TeamsSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.requst.user # Way to get the user
        return Teams.objects.filter(author=user) # User to filter 

    def perform_create(self,serializer):
        if serializer.is_valid():
            serializer.save(author=self.requst.user)
        else:
            print(serializer.errors)

class TeamDelete(generics.DestroyAPIView):
    serializer_class = TeamsSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.requst.user
        return Teams.objects.filter(author = user)
 