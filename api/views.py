from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Rating, DeviceData
from .serializers import RatingSerializer, DeviceDataSerializer
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync


class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer

@api_view(['POST'])
def device_data(request):
    if request.method == 'POST':
        serializer = DeviceDataSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            channel_layer = get_channel_layer()
            async_to_sync(channel_layer.group_send)(
                'device_data_group',
                {
                    'type': 'device_data_message',
                    'message': serializer.data
                }
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    