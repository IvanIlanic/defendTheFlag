from django.urls import path
from . import views

#re_path()

urlpatterns = [
    path("me/", views.MeView.as_view(), name='me'),
    path("friends/", views.FriendsListView.as_view(), name="friends"),
    path("friends/add/", views.AddFriendView.as_view(), name="friends-add"),
    path("teams/create/", views.AddTeamView.as_view(), name="teams-create"),
    path("teams/", views.TeamsListView.as_view(), name="teams"),
    path("teams/<int:team_id>/add/", views.AddTeamFriendView.as_view(), name="team-add-friend"),
]   