#Serializers are here to convert from our database to json files, this will be used for data displaying
# This is one weird example, have to double check this
from django.contrib.auth.models import User
from rest_framework import serializers 
# Will use ORM - Object realtional mapping
# Serializers are transforming python data to json in this example, and other way around

class UserSerializer(serializers.ModelSerializer):
    model = User
    fields = ["id","username", "password"]
    
    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user