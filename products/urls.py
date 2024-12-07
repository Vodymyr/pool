from django.urls import path
from . import views

app_name = 'products'

urlpatterns = [
    path('', views.products_list, name='products_list'),  # Список продуктов.
    path('poolins-up/', views.poolins_up, name='poolins_up'),
    path('poolins-ground/', views.poolins_ground, name='poolins_ground'),
]
