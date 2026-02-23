#Serializers are here to convert from our database to json files, this will be used for data displaying
# This is one weird example, have to double check this
from django.contrib.auth.models import User
from rest_framework import serializers 
from .models import Teams, Notes, Profile

# Will use ORM - Object realtional mapping
# Serializers are transforming python data to json in this example, and other way around


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ["slang","description","level","gamesTotal","points","gamesWon"]

class FriendSerializer(serializers.ModelSerializer):
    slang = serializers.CharField(source="profile.slang",read_only = True)

    class Meta:
        model = User
        fields = ["id","username","slang"]

class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(required=False)
    class Meta:
        model = User
        fields = ["id","username", "password","profile"]
        extra_kwargs = {"password": {"write_only" : True}}
    
    def create(self, validated_data):
        profile_data = validated_data.pop("profile", {})
        user = User.objects.create_user(**validated_data)

        # ensure profile exists
        prof, _ = Profile.objects.get_or_create(user=user)

        # update if provided
        if profile_data:
            prof.slang = profile_data.get("slang", prof.slang)
            prof.description = profile_data.get("description", prof.description)
            prof.save()

        return user
    
    def update(self, instance, validated_data):
        profile_data = validated_data.pop("profile", None)

        # (optional) allow email updates
        if "email" in validated_data:
            instance.email = validated_data["email"]
            instance.save()

        if profile_data is not None:
            # ensure profile exists
            prof, _ = Profile.objects.get_or_create(user=instance)
            prof.slang = profile_data.get("slang", prof.slang)
            prof.description = profile_data.get("description", prof.description)
            prof.save()

        return instance
    
class TeamsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teams
        fields = ["id","name","slang","description"]
        extra_kwargs = {"author":{"read_only": True}}

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = ["id", "title", "content", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}