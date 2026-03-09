from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics, status
from .serializer import UserSerializer,  ProfileSerializer, FriendSerializer, TeamsSerializer, QueueSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from .models import Profile, Teams, QueueGame, Game

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

class AddQueueGameSystemView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        gameSystem = request.data.get("gameSystem")

        if not gameSystem:
            return Response({"detail":"You have to choose a system first!"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            queue = QueueGame.objects.get(user = request.user, state = 1)
        except:
            return Response({"detail":"These is no queue that was previously created!"})

        queue.gameSystem = gameSystem
        queue.save()

        return Response("GameSystem added!")

class AddQueueGameTimeView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        gameTime = request.data.get("gameTime")

        if not gameTime:    
            return Response({"detail":"Have to chose a gamemode"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            queue = QueueGame.objects.get(user = request.user, state = 1)
        except:
            return Response({"detail":"There is no queue! You have to start it first!"}, status=status.HTTP_400_BAD_REQUEST)
        
        queue.gameTime = gameTime
        queue.save()
        return Response({"detail":"Time added"},status=status.HTTP_200_OK)

class ListQueueGameView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = QueueSerializer

    def get_object(self):
        try:
            return QueueGame.objects.get(user= self.request.user)
        except QueueGame.DoesNotExist:
            return Response({"detail":"Queue sent!"},status=status.HTTP_200_OK)

class ChangeQueueGameStateView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        state = 2
        try:
            queue = QueueGame.objects.get(user = request.user, state=1)
        except:
            return Response({"detail":"There is no queue! You have to start it first!"}, status=status.HTTP_400_BAD_REQUEST)
        
        queue.state= state
        queue.save()
        return Response({"detail":"State added, game started"},status=status.HTTP_200_OK)

class AddQueueGameTeamView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        QueueGame.objects.filter(user = request.user).delete()
        team_id = request.data.get("team_id")

        if not team_id:
            return Response({"detail": "Choose a team!"}, status=status.HTTP_400_BAD_REQUEST)
        try :
            team = Teams.objects.get(id = team_id)
        except Teams.DoesNotExist:
            return Response({"detail":"Team does not exits"}, status=status.HTTP_400_BAD_REQUEST)

        # Have to create a instance of new table, will have to write
        # A functions if the user quits to delete the instance!
        queue = QueueGame.objects.create(
            team = team,
            user = request.user,
            gameSystem = "",
            gameTime = "",
            state = 1
        )

        return Response({"detail":" Team added"}, status=status.HTTP_200_OK)

class CreateQueueGameView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = QueueSerializer
    def post(self, request):
        gameQueue = QueueGame.objects.get(user=request.user, state=2)

        if not gameQueue:
            return Response({"detail":"No gameQueue created"}, status=status.HTTP_400_BAD_REQUEST)
        
        enemyTeam = QueueGame.objects.filter(state=2).exclude(user=request.user).first()

        if not enemyTeam:
            return Response({"detail":"No enemy team"}, status=status.HTTP_400_BAD_REQUEST)

        game = Game.objects.create(
            state = 1
            )

        game.teams.add(gameQueue.team, enemyTeam.team)
        game.save()

        
        return game

class ListGameView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try: # Game has np user, i will have to filter from team. if member = request.user
            return Game.objects.get(team.member=request.user, state=1)

        except Game.DoesNotExist:
            return Response({"detail":"Could not find game"}, status=status.HTTP_400_BAD_REQUEST)


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