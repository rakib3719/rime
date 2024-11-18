'use client';

import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


const Map = () => {
    useEffect(() => {
        const map = L.map('map').setView([23.8103, 90.4125], 13); // Coordinates for Dhaka, Bangladesh
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([23.8103, 90.4125]).addTo(map) // Add a marker at the center
            .bindPopup('Welcome to Dhaka!')
            .openPopup();
    }, []);

    return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default Map;
