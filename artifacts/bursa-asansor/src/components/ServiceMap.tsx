import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet container size issues on initial load
const mapStyle = { height: "500px", width: "100%", borderRadius: "1.5rem" };

// Random point generation within a bounding box
const generateRandomPoints = (count: number, bbox: { minLat: number, maxLat: number, minLng: number, maxLng: number }) => {
  const points = [];
  for (let i = 0; i < count; i++) {
    const lat = Math.random() * (bbox.maxLat - bbox.minLat) + bbox.minLat;
    const lng = Math.random() * (bbox.maxLng - bbox.minLng) + bbox.minLng;
    points.push([lat, lng]);
  }
  return points;
};

// Simulated messages for the tooltips
const TOOLTIP_MESSAGES = [
  "7. Kata Kurulum Tamamlandı",
  "Nilüfer Asansör Kiralama",
  "12. Kata Eşya Taşıma Aktif",
  "Osmangazi Dış Cephe Asansörü Kuruldu",
  "Yıldırım 5. Kat İhtiyacı Karşılandı",
  "Mudanya 10. Kata Nakliyat",
  "Kestel Yeni Randevu Başarı ile Tamamlandı",
  "15. Kata Makine Kurulumu Yapıldı"
];

const getRandomMessage = () => TOOLTIP_MESSAGES[Math.floor(Math.random() * TOOLTIP_MESSAGES.length)];

export default function ServiceMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance) return;

    // Centered on Bursa
    const bursaCenter: L.LatLngTuple = [40.1828, 29.0667];
    
    // Initialize map
    const map = L.map(mapRef.current, {
      center: bursaCenter,
      zoom: 11,
      zoomControl: false,
      scrollWheelZoom: false, // Prevent accidental scrolling
    });

    // Add zoom control manually to bottom right
    L.control.zoom({ position: "bottomright" }).addTo(map);

    // Add OpenStreetMap tiles, using a slightly muted/grey style if available or default
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      className: "map-tiles-filter", // Can apply CSS filter for styling
    }).addTo(map);

    // Stylish Custom Icon
    const customIconHtml = `
      <div class="relative flex items-center justify-center w-6 h-6">
        <div class="absolute w-full h-full bg-primary/40 rounded-full animate-ping"></div>
        <div class="relative w-3 h-3 bg-primary rounded-full border-2 border-white shadow-md"></div>
      </div>
    `;

    const customIcon = L.divIcon({
      html: customIconHtml,
      className: "custom-leaflet-icon",
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    // 1. Osmangazi cluster (approx)
    const osmangaziPoints = generateRandomPoints(150, { minLat: 40.18, maxLat: 40.23, minLng: 28.98, maxLng: 29.08 });
    // 2. Nilüfer cluster (approx)
    const niluferPoints = generateRandomPoints(130, { minLat: 40.20, maxLat: 40.25, minLng: 28.88, maxLng: 28.98 });
    // 3. Yıldırım cluster (approx)
    const yildirimPoints = generateRandomPoints(80, { minLat: 40.17, maxLat: 40.21, minLng: 29.08, maxLng: 29.15 });

    const allPoints = [...osmangaziPoints, ...niluferPoints, ...yildirimPoints];

    const markers = L.layerGroup();
    
    allPoints.forEach(([lat, lng]) => {
      const marker = L.marker([lat, lng], { icon: customIcon });
      marker.bindPopup(`<div class="font-sans text-sm font-semibold text-slate-800 p-1">${getRandomMessage()}</div>`);
      markers.addLayer(marker);
    });

    markers.addTo(map);

    // Force map size update after mount to prevent render tile bugs
    setTimeout(() => {
      map.invalidateSize();
    }, 250);

    setMapInstance(map);

    return () => {
      map.remove();
      setMapInstance(null);
    };
  }, []);

  return (
    <div className="w-full relative group">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl pointer-events-none z-10"></div>
      <div className="relative shadow-2xl rounded-3xl overflow-hidden border-4 border-white dark:border-navy-light h-[500px]">
        {/* Custom CSS for map tile darkening if in dark mode */}
        <style dangerouslySetInnerHTML={{ __html: `
          .dark .map-tiles-filter { filter: invert(90%) hue-rotate(180deg) brightness(85%) contrast(85%); }
          .custom-leaflet-icon { background: transparent; border: none; }
          .leaflet-popup-content-wrapper { border-radius: 0.75rem; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1); }
          .leaflet-popup-content { margin: 10px 14px; }
        `}} />
        <div ref={mapRef} style={mapStyle} className="z-0" />
      </div>
    </div>
  );
}
