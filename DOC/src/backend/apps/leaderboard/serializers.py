from rest_framework import serializers
from .models import LeaderboardEntry
from apps.users.serializers import TeamSerializer
from apps.challenges.serializers import SubmissionSerializer

class LeaderboardEntrySerializer(serializers.ModelSerializer):
    team = TeamSerializer()
    best_submission = SubmissionSerializer()

    class Meta:
        model = LeaderboardEntry
        fields = '__all__'
