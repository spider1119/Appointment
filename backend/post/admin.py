from django.contrib import admin

from .models import Meeting

# Register your models here.
# class MeetingAdmin(admin.ModelAdmin):
#     list_display = ('user')

admin.site.register(Meeting)