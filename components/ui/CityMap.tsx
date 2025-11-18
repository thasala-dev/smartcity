'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { Video, MapPin } from 'lucide-react'

// Import Leaflet dynamically to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

interface CameraLocation {
  id: number
  name: string
  position: [number, number]
  status: 'online' | 'offline' | 'recording'
  location: string
}

const cameras: CameraLocation[] = [
  { id: 1, name: 'CAM-001', position: [13.7563, 100.5018], status: 'online', location: 'Main Street' },
  { id: 2, name: 'CAM-002', position: [13.7465, 100.5325], status: 'recording', location: 'Central Park' },
  { id: 3, name: 'CAM-003', position: [13.7567, 100.5378], status: 'online', location: 'Shopping Mall' },
  { id: 4, name: 'CAM-004', position: [13.7344, 100.5206], status: 'online', location: 'Train Station' },
  { id: 5, name: 'CAM-005', position: [13.7550, 100.4920], status: 'recording', location: 'City Hall' },
  { id: 6, name: 'CAM-006', position: [13.7280, 100.5240], status: 'offline', location: 'Highway 101' },
]

export default function CityMap() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 rounded-lg border border-white/10 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-primary-400 mx-auto mb-2 animate-pulse" />
          <p className="text-sm text-gray-400">Loading Map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="aspect-video rounded-lg overflow-hidden border border-white/10 relative">
      <MapContainer
        {...({
          center: [13.7463, 100.5183],
          zoom: 13,
          scrollWheelZoom: true,
          style: { height: '100%', width: '100%' },
          className: 'z-0',
        } as any)}
      >
        <TileLayer
          {...({
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          } as any)}
        />

        {cameras.map((camera) => {
          // Create custom icon based on status
          const getMarkerColor = () => {
            switch (camera.status) {
              case 'online': return '#10b981' // green
              case 'recording': return '#f59e0b' // yellow
              case 'offline': return '#ef4444' // red
              default: return '#3b82f6' // blue
            }
          }

          if (typeof window !== 'undefined') {
            const L = require('leaflet')

            const icon = L.divIcon({
              className: 'custom-marker',
              html: `
                <div style="position: relative;">
                  <div style="
                    width: 32px;
                    height: 32px;
                    background: ${getMarkerColor()};
                    border: 3px solid white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                    ${camera.status === 'recording' ? 'animation: pulse 2s infinite;' : ''}
                  ">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                      <path d="M23 7l-7 5 7 5V7z"></path>
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                    </svg>
                  </div>
                </div>
              `,
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32]
            })

            return (
              <Marker
                {...({
                  key: camera.id,
                  position: camera.position,
                  icon: icon,
                } as any)}
              >
                <Popup>
                  <div className="text-dark-900 p-2 min-w-[200px]">
                    <div className="flex items-center gap-2 mb-2">
                      <Video className="w-4 h-4" />
                      <h3 className="font-bold text-sm">{camera.name}</h3>
                    </div>
                    <p className="text-xs text-gray-600 mb-1">{camera.location}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`
                        inline-block px-2 py-1 rounded text-xs font-medium
                        ${camera.status === 'online' ? 'bg-green-100 text-green-700' : ''}
                        ${camera.status === 'recording' ? 'bg-yellow-100 text-yellow-700' : ''}
                        ${camera.status === 'offline' ? 'bg-red-100 text-red-700' : ''}
                      `}>
                        {camera.status}
                      </span>
                    </div>
                    <a
                      href="/vms"
                      className="inline-block mt-2 text-xs text-blue-600 hover:text-blue-800 underline"
                    >
                      View Camera →
                    </a>
                  </div>
                </Popup>
              </Marker>
            )
          }
          return null
        })}
      </MapContainer>

      {/* Map Legend */}
      <div className="absolute top-4 right-4 glass-card p-3 space-y-2 z-[1000]">
        <h4 className="text-xs font-bold text-white mb-2">Camera Status</h4>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-xs text-gray-300">Online</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-yellow-500 rounded-full pulse-glow"></div>
          <span className="text-xs text-gray-300">Recording</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-xs text-gray-300">Offline</span>
        </div>
      </div>

      {/* Map Controls Info */}
      <div className="absolute bottom-4 left-4 glass-card px-3 py-2 z-[1000]">
        <p className="text-xs text-gray-400">
          📍 Click markers for details | Scroll to zoom
        </p>
      </div>

      {/* Add pulse animation style */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  )
}
