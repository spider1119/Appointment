from django.db import models
from django.conf import settings

# Create your models here.
class Meeting(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    petOwner=models.CharField(max_length=20)
    starttime=models.DateTimeField()
    duration=models.DurationField()
    aptNotes=models.CharField(max_length=500)

    def __str__(self):
        return str(self.user.username)

    @property
    def owner(self):
        return self.user
