from django.urls import path
from . import views

#re_path()

urlpatterns = [
    path("notes/", views.TeamsListCreate.as_view(), name='note-list'),
    path("notes/delete/<int:pk>/", views.TeamDelete.as_view(), name='delete-note')
]   