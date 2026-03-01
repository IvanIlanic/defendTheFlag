from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics, status
from .serializer import UserSerializer,  ProfileSerializer, FriendSerializer, TeamsSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from .models import Profile, Teams

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    
class TeamsListView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = TeamsSerializer

    def get_queryset(self):
        return Teams.objects.filter(members=self.request.user)
    

class AddTeamView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = TeamsSerializer

    def post(self, request):
        serializer = TeamsSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        team = Teams.objects.create(
            owner=request.user,
            name=serializer.validated_data["name"],
            slang=serializer.validated_data["slang"],
            description=serializer.validated_data["description"],
        )

        # automatically add creator as first member
        team.members.add(request.user)

        return Response(TeamsSerializer(team).data, status=status.HTTP_201_CREATED)

from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Teams

class AddTeamFriendView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, team_id):
        username = request.data.get("username")

        if not username:
            return Response({"detail": "Write in the username!"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            team = Teams.objects.get(id=team_id)
        except Teams.DoesNotExist:
            return Response({"detail": "This team does not exist!"}, status=status.HTTP_404_NOT_FOUND)

        if team.owner != request.user:
            return Response({"detail": "Only the team owner can add members!"}, status=status.HTTP_403_FORBIDDEN)

        try:
            friend_user = User.objects.get(username=username)
        except User.DoesNotExist:
            return Response({"detail": "This user does not exist!"}, status=status.HTTP_404_NOT_FOUND)

        is_friend = request.user.profile.friends.filter(id=friend_user.id).exists()
        if not is_friend and friend_user != request.user:
            return Response({"detail": "Can only add your friend"}, status=status.HTTP_400_BAD_REQUEST)

        team.members.add(friend_user)
        return Response({"detail": "Friend added to the team"}, status=status.HTTP_200_OK)

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