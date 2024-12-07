from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='products/')  # Путь для загрузки изображений.

    def __str__(self):
        return self.name
