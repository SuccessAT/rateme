import json
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync

class DeviceDataConsumer(WebsocketConsumer):
    def connect(self):
        async_to_sync(self.channel_layer.group_add)(
            'device_data_group',
            self.channel_name
        )
        self.accept()

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            'device_data_group',
            self.channel_name
        )

    def device_data_message(self, event):
        message = event['message']
        self.send(text_data=json.dumps({
            'message': message
        }))
