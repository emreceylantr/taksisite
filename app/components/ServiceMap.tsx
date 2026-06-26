"use client";

import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const center: [number, number] = [36.7589, 34.5326];

const markerIcon = L.divIcon({
  className: "",
  html: '<span class="block h-5 w-5 rounded-full border-4 border-white bg-yellow-400 shadow-[0_0_0_4px_rgba(250,204,21,0.35),0_10px_24px_rgba(0,0,0,0.35)]"></span>',
  iconAnchor: [10, 10],
  popupAnchor: [0, -12],
});

export default function ServiceMap() {
  return (
    <div className="h-[360px] overflow-hidden rounded border border-zinc-200 bg-zinc-100">
      <MapContainer
        center={center}
        zoom={14}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={markerIcon} position={center}>
          <Popup>
            <strong>Soli Taksi</strong>
            <br />
            Akdeniz, 39607. Sk.
            <br />
            33210 Mezitli/Mersin
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
