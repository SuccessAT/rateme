import React, { useEffect, useState } from 'react';
import { fetchDeviceData } from '../services/api';
import { connectWebSocket } from '../services/websocket';

const DeviceDataTable = () => {
    const [deviceData, setDeviceData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchDeviceData();
            setDeviceData(data);
        };

        fetchData();

        // Set up websocket connection for real-time updates
        // const ws = new WebSocket('ws://localhost:8000/ws/device-data/');
        // ws.onmessage = (event) => {
        //     const newData = JSON.parse(event.data);
        //     setDeviceData((prevData) => [...prevData, newData]);
        // };

        // return () => ws.close();

        const socket = connectWebSocket((newData) => {
            setDeviceData((prevData) => [...prevData, newData]);
        });

        return () => socket.close();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Device ID</th>
                    <th>Timestamp</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {deviceData.map((data) => (
                    <tr key={data.id}>
                        <td>{data.device_id}</td>
                        <td>{data.timestamp}</td>
                        <td>{data.location}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DeviceDataTable;