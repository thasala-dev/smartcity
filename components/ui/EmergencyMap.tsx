'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import type { LatLngExpression } from 'leaflet'

// Dynamic imports for Leaflet components (SSR handling)
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

const Polyline = dynamic(
  () => import('react-leaflet').then((mod) => mod.Polyline),
  { ssr: false }
)

export default function EmergencyMap() {
  const [isClient, setIsClient] = useState(false)
  const [L, setL] = useState<any>(null)

  useEffect(() => {
    setIsClient(true)
    
    // Import Leaflet only on client side
    import('leaflet').then((leaflet) => {
      setL(leaflet)
      
      // Fix for default marker icon
      delete (leaflet.Icon.Default.prototype as any)._getIconUrl
      leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      })
    })
  }, [])

  if (!isClient || !L) {
    return (
      <div className="flex-1 bg-dark-800 rounded-lg flex items-center justify-center">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-400"></div>
      </div>
    )
  }

  // Coordinates (Bangkok area)
  const userLocation: LatLngExpression = [13.7563, 100.5018] // User's location (red pin)
  const ambulanceLocation: LatLngExpression = [13.7463, 100.5183] // Ambulance location (moving)
  const routePath: LatLngExpression[] = [
    ambulanceLocation,
    [13.7500, 100.5100],
    userLocation,
  ]

  // Create custom icons
  const userIcon = L.divIcon({
    html: `
      <div class="relative">
        <div class="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
        <div class="absolute -top-1 -left-1 w-6 h-6 bg-red-500/30 rounded-full animate-ping"></div>
      </div>
    `,
    className: 'user-marker',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  })

  const ambulanceIcon = L.divIcon({
    html: `
      <div class="relative animate-bounce">
        <div style="font-size: 24px;">🚑</div>
        <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-green-500/30 rounded-full"></div>
      </div>
    `,
    className: 'ambulance-marker',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  })

  const center: LatLngExpression = [13.7513, 100.5100] // Center between both points

  return (
    <div className="flex-1 relative bg-dark-800 rounded-lg overflow-hidden mb-3">
      <MapContainer
        center={center}
        zoom={14}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Route Line */}
        <Polyline
          positions={routePath}
          pathOptions={{
            color: '#10b981',
            weight: 3,
            opacity: 0.7,
            dashArray: '10, 10',
          }}
        />

        {/* User Location Marker */}
        <Marker position={userLocation} icon={userIcon} />

        {/* Ambulance Location Marker */}
        <Marker position={ambulanceLocation} icon={ambulanceIcon} />
      </MapContainer>

      {/* User Location Label */}
      <div className="absolute top-2 left-2 bg-red-500/90 text-white text-xs px-2 py-1 rounded shadow-lg z-[1000]">
        📍 You
      </div>

      {/* Ambulance Label */}
      <div className="absolute bottom-2 right-2 bg-green-500/90 text-white text-xs px-2 py-1 rounded shadow-lg z-[1000] flex items-center gap-1">
        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
        🚑 En Route
      </div>
    </div>
  )
}
