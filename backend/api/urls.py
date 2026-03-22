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
    path("queue-game/team/", views.AddQueueGameTeamView.as_view(), name="queue-team-add"),
    path("queue-game/time/", views.AddQueueGameTimeView.as_view(), name="queue-time-add"),
    path("queue-game/system/", views.AddQueueGameSystemView.as_view(), name="queue-system-add"),
    path("queue-game/", views.ListQueueGameView.as_view(), name="game-queue"),
    path("queue-game/state2/",views.ChangeQueueGameStateView.as_view(), name="game-queue-state"),
    path("game/find/", views.CreateQueueGameView.as_view(), name="game-find"),
    path("game/<int:game_id>/", views.ListGameView.as_view(), name="game"),
    path("game/changeGameState/", views.GameStateTimeView.as_view(), name="game-state-time")
]   