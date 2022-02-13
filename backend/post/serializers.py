from post.models import Meeting
from rest_framework import serializers

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meeting
        fields = (
            'pk', 'user', 'petOwner', 'starttime', 'duration', 'aptNotes'
        )
        read_only_fields = ['user']

    def validate_title(self, value):
        qs = Meeting.objects.filter(title__iexact=value)
        if self.instance:
            qs = qs.exclude(pk=self.instance.pk)
        if(qs.exists()):
            raise serializers.ValidationError("This is already created.")
        return value
