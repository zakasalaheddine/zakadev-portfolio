'use client'

import { CircleMarker, MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const positionTangier: [number, number] = [35.7427957, -5.8037447]

export default function LeafletLocation() {
  return (
    <div className="group h-full">
      <div className="h-full min-h-full w-full rounded-3xl relative leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim">
        <button className="absolute top-3 left-3 z-[1000] bg-[#0A0A1A] text-white px-4 py-2 rounded-full shadow-md flex items-center space-x-2">
          <span>📍</span>
          <span>Location</span>
        </button>
        <MapContainer
          center={positionTangier}
          zoom={10}
          scrollWheelZoom={false}
          zoomControl={false}
          className="size-full relative"
          attributionControl={false}
        >
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, 
          &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>, 
          &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            subdomains={['a', 'b', 'c', 'd']}
          />
          {/* Default Tangier circle */}
          <CircleMarker
            center={positionTangier}
            radius={50}
            pathOptions={{
              fillOpacity: 0.4,
              stroke: false,
              className:
                'rounded-full fill-slate-400/50 animate-ping-scale border-none'
            }}
          />
          <CircleMarker
            center={positionTangier}
            radius={15}
            pathOptions={{
              fillOpacity: 0.5,
              stroke: false,
              className: 'rounded-full fill-slate-400/80'
            }}
          />
        </MapContainer>
      </div>
    </div>
  )
}
