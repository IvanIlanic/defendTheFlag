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
