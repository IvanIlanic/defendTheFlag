from django.urls import path
from . import views

#re_path()

urlpatterns = [
    path("me/", views.MeView.as_view(), name='me'),
    path("friends/", views.FriendsListView.as_view(), name="friends"),
    path("friends/add/", views.AddFriendView.as_view(), name="friends-add"),
]   