from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics, status
from .serializer import UserSerializer,  ProfileSerializer, FriendSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from .models import Profile

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class FriendsListView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = FriendSerializer

    def get_queryset(self):
        return self.request.user.profile.friends.all()

class AddFriendView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        username = request.data.get("username")
        if not username:
            return Response({"detail": "username is required"}, status=status.HTTP_400_BAD_REQUEST)

        if username == request.user.username:
            return Response({"detail": "You cant add yourself"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            friend_user = User.objects.get(username=username)
        except User.DoesNotExist:
            return Response({"detail": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        request.user.profile.friends.add(friend_user)
        return Response({"detail": "Friend added"}, status=status.HTTP_200_OK)


class MeView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user