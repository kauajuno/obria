from rest_framework import viewsets, permissions
from .models import LeaderboardEntry
from .serializers import LeaderboardEntrySerializer

class LeaderboardViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = LeaderboardEntry.objects.select_related("team", "best_submission", "team__tutor")
    serializer_class = LeaderboardEntrySerializer
    permission_classes = [permissions.AllowAny]  # or IsAuthenticated
