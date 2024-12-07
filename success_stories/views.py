from django.shortcuts import render, get_object_or_404
from .models import SuccessStory

def success_stories_list(request):
    stories = SuccessStory.objects.all()
    return render(request, 'success_stories/success_stories_list.html', {'stories': stories})

def success_story_detail(request, story_id):
    story = get_object_or_404(SuccessStory, id=story_id)
    return render(request, 'success_stories/success_story_detail.html', {'story': story})
