from django.urls import path
from . import views

app_name = 'downloads'

urlpatterns = [
    path('', views.downloads_list, name='downloads_list'),  # Список файлов для скачивания.
]
