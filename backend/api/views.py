from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics, status
from .serializer import UserSerializer,  ProfileSerializer, FriendSerializer, TeamsSerializer, QueueSerializer, GameSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from .models import Profile, Teams, QueueGame, Game
from django.db import transaction

from django.utils import timezone
from datetime import timedelta

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

class GameStateTimeView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        game_id = request.data.get("game_id")
        try:
            game = Game.objects.get(id=game_id)
        except Game.DoesNotExist:
            return Response({"detail":"Game does not exist"}, status=status.HTTP_400_BAD_REQUEST)
        if game.stateEnd <= timezone.now():
            game.stateStart= timezone.now()
            if game.gameTime == '30m':
                game.stateEnd = timezone.now() + timedelta(minutes=30)
            elif game.gameTime == '24h':
                game.stateEnd = timezone.now() + timedelta(hours=24)
        else:
            return Response({"detail":"No need to switch to new state, time is valid"},status=status.HTTP_200_OK)

        game.state = 2
        game.save()
        return Response({"detail":"Successfully changed to state2 and changned time"}, status=status.HTTP_200_OK)



class CreateQueueGameView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # Get my profile
        profile = Profile.objects.get(user=request.user)

        # If I have a active game it returns me the game_id
        if profile.currentGame:
            return Response(
                {"detail": "game found", "game_id": profile.currentGame.id},
                status=status.HTTP_200_OK
            )

        # I set my queue which is in the database, if there is no queue it means its not activated, have to go back to step 1 of creating a gave
        try:
            my_queue = QueueGame.objects.get(user=request.user, state=2)
        except QueueGame.DoesNotExist:
            return Response(
                {"detail": "No active ready queue found"},
                status=status.HTTP_400_BAD_REQUEST
            )
        # Looking for enemy gamequeue with the same system and time request, and we grab afirst, if no we are waiting
        enemy_queue = QueueGame.objects.filter(
            state=2,
            gameSystem=my_queue.gameSystem,
            gameTime=my_queue.gameTime
        ).exclude(user=request.user).first()

        if not enemy_queue:
            return Response(
                {"detail": "waiting"},
                status=status.HTTP_200_OK
            )

        # This is just a edge case so the enemy users dont have a game, because it will cause chaos for it to happen
        enemy_owner_profile = Profile.objects.get(user=enemy_queue.user)
        if enemy_owner_profile.currentGame:
            return Response(
                {"detail": "waiting"},
                status=status.HTTP_200_OK
            )
        # We use with as else, where we are using transaction atomic to do everything systematically and in a case of fail it will delete itself
        with transaction.atomic():
            # We need to use select for update since we are locking the row
            my_profile = Profile.objects.select_for_update().get(user=request.user)
            enemy_owner_profile = Profile.objects.select_for_update().get(user=enemy_queue.user)
            
            # Added again the same edgecase for if there is a game 
            if my_profile.currentGame:
                return Response(
                    {"detail": "game found", "game_id": my_profile.currentGame.id},
                    status=status.HTTP_200_OK
                )

            if enemy_owner_profile.currentGame:
                return Response(
                    {"detail": "waiting"},
                    status=status.HTTP_200_OK
                )

            #If there is no game for both, wecreate agame and populate it
            game = Game(state=1)
            game.gameSystem = my_queue.gameSystem
            # Set the time for game
            if my_queue.gameTime == '30m':
                game.stateEnd = timedelta(minutes=30)+ timezone.now()
                # Have to set the also timegamemode late to know
                game.gameTime = '30m'
                game.save()
            if my_queue.gameTime == '24h':
                game.stateEnd = timedelta(hours=24)+ timezone.now()
                game.gameTime = '24h'
                game.save()
            
            
            game.teams.add(my_queue.team, enemy_queue.team)
            # Whole case when the user does not have a profile created, had to add a get ot create, but this created a tuple, we solved it by just adding _
            # Add it for each player in all the teams
            for user in my_queue.team.members.all():
                member_profile, _ = Profile.objects.get_or_create(user=user)
                member_profile.currentGame = game
                member_profile.save()

            for user in enemy_queue.team.members.all():
                member_profile, _ = Profile.objects.get_or_create(user=user)
                member_profile.currentGame = game
                member_profile.save()
            # Delete the queue since we dont need it no more
            my_queue.delete()
            enemy_queue.delete()

            return Response(
                {"detail": "game found", "game_id": game.id},
                status=status.HTTP_201_CREATED
            )
        
class ListGameView(generics.RetrieveAPIView):
    # Find this new way of listing on overflow
    permission_classes = [IsAuthenticated]
    serializer_class = GameSerializer
    queryset = Game.objects.all()
    lookup_url_kwarg = "game_id"

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