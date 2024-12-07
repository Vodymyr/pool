from django.urls import path
from . import views

app_name = 'success_stories'

urlpatterns = [
    path('', views.success_stories_list, name='list'),
    path('<int:story_id>/', views.success_story_detail, name='detail'),
]
