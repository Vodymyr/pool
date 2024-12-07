from django.db import models

class SuccessStory(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='success_stories/')
    date_completed = models.DateField()

    def __str__(self):
        return self.title
