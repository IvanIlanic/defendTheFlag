from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Teams(models.Model):
    id = models.AutoField(primary_key=True) # Change this to UUID later for security reasons
    name = models.CharField(max_length=30)
    members = models.ManyToManyField(User, blank= True, related_name="memberof")
    slang = models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    owner = models.ForeignKey(User,on_delete=models.CASCADE,related_name="Owner_of_the")
    # Have to add profile picture and backgroud picture

    def __str__(self):
        return self.name



# Model of profile, will display data like description and stats
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    slang = models.CharField(max_length=50, blank=True)
    description = models.TextField(max_length=100, blank=True)
    level = models.IntegerField(default=1)
    points = models.IntegerField(default=0)
    gamesTotal = models.IntegerField(default=10)
    gamesWon = models.IntegerField(default=5)
    friends = models.ManyToManyField(User, blank=True, related_name="friend_of")
    currentGame = models.ForeignKey(Game, blank=True, related_name="Player_od")
    
    
    def __str__(self):
        return f"{self.user.username} profile"

class Game(models.Model):
    id = models.AutoField(primary_key=True)
    teams = models.ManyToManyField(Teams, related_name="Teams_of")
    state = models.IntegerField(default=1)
    gamemaster = models.ForeignKey(Profile, on_delete=models.CASCADE, null=True, related_name="Headmaster_of")
    winner = models.ForeignKey(Teams, null=True, on_delete=models.CASCADE)
    def __str__(self):
        return f"{self.id} game"

class QueueGame(models.Model):
    id = models.AutoField(primary_key=True)
    team = models.ForeignKey(Teams, on_delete=models.CASCADE, related_name= "QueueTeam")
    user = models.ForeignKey(User, on_delete = models.CASCADE, related_name="QueueUser")
    gameSystem = models.CharField(max_length = 30)
    gameTime = models.CharField(max_length = 30)
    
    createdAt = models.DateTimeField(auto_now_add = True)
    state = models.IntegerField(default=1)





