'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

// Dynamically load Leaflet (avoiding SSR)
const Map = () => {
    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Import Leaflet dynamically
            const loadLeaflet = async () => {
                const L = (await import('leaflet')).default;

                const map = L.map('map').setView([23.8103, 90.4125], 13);
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                }).addTo(map);

                L.marker([23.8103, 90.4125])
                    .addTo(map)
                    .bindPopup('Welcome to Dhaka!')
                    .openPopup();
            };

            loadLeaflet().then(() => setMapLoaded(true));
        }
    }, []);

    return (
        <div>
            {!mapLoaded && <p>Loading map...</p>}
            <div id="map" style={{ height: '500px', width: '100%' }}></div>
        </div>
    );
};

export default dynamic(() => Promise.resolve(Map), { ssr: false });
