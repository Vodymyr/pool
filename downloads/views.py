from django.shortcuts import render

def downloads_list(request):
    return render(request, 'downloads/downloads_list.html')  # Шаблон для загрузок.
