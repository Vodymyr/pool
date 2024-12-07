from django.shortcuts import render
from .models import Product

def products_list(request):
    products = Product.objects.all()
    return render(request, 'products/products_list.html', {'products': products})

def poolins_up(request):
    return render(request, 'products/poolins_up.html')

def poolins_ground(request):
    return render(request, 'products/poolins_ground.html')
