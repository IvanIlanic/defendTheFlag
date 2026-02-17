from django.urls import path
from . import views

#re_path()

urlpatterns = [
    path("me/", views.MeView.as_view(), name='me'),
    path("notes/", views.NoteListCreate.as_view(), name='note-list'),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name='delete-note')
]   