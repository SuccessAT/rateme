from django.db import models

# Create your models here.

class Rating(models.Model):
    name = models.CharField(max_length=100)
    rating = models.IntegerField()

class DeviceData(models.Model):
    device_id = models.CharField(max_length=100)
    timestamp = models.DateTimeField()
    location = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.device_id} at {self.timestamp}"