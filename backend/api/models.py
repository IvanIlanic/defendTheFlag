from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Teams(models.Model):
    id = models.AutoField(primary_key=True) # Change this to UUID later for security reasons
    name = models.CharField(max_length=30)
    slang = models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    # Have to add profile picture and backgroud picture

    def __str__(self):
        return self.name
    
class Notes(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes") # Cascade used to delete all if this col is deleted

# Model of profile, will display data like description and stats
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    slang = models.CharField(max_length=50, blank=True)
    description = models.TextField(max_length=100, blank=True)
    
    def __str__(self):
        return f"{self.user.username} profile"




