export const connectWebSocket = (callback) => {
    const socket = new WebSocket('ws://localhost:8000/ws/device-data');

    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        callback(data.message);
    };

    socket.onclose = () => {
        console.log('WebSocket connection closed');
    };

    return socket;
};