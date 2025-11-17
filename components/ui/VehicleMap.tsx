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

const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

// Vehicle data with Bangkok coordinates
const vehicles = [
  {
    id: 'VH-001',
    driver: 'John Doe',
    position: [13.7563, 100.5018] as LatLngExpression,
    status: 'moving',
    speed: 45,
    location: 'Sukhumvit Road',
    battery: 85,
  },
  {
    id: 'VH-002',
    driver: 'Jane Smith',
    position: [13.7463, 100.5383] as LatLngExpression,
    status: 'idle',
    speed: 0,
    location: 'Siam Square',
    battery: 92,
  },
  {
    id: 'VH-003',
    driver: 'Mike Johnson',
    position: [13.7263, 100.4983] as LatLngExpression,
    status: 'moving',
    speed: 62,
    location: 'Rama IV Road',
    battery: 67,
  },
  {
    id: 'VH-004',
    driver: 'Sarah Williams',
    position: [13.7663, 100.5283] as LatLngExpression,
    status: 'stopped',
    speed: 0,
    location: 'Victory Monument',
    battery: 45,
  },
  {
    id: 'VH-005',
    driver: 'Tom Anderson',
    position: [13.7363, 100.5183] as LatLngExpression,
    status: 'moving',
    speed: 38,
    location: 'Silom Road',
    battery: 78,
  },
  {
    id: 'VH-006',
    driver: 'Lisa Brown',
    position: [13.7563, 100.5483] as LatLngExpression,
    status: 'idle',
    speed: 0,
    location: 'Ratchadapisek Road',
    battery: 54,
  },
]

export default function VehicleMap() {
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
      <div className="aspect-video bg-gradient-to-br from-dark-900 to-dark-800 rounded-lg border border-white/10 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading map...</p>
        </div>
      </div>
    )
  }

  // Create custom vehicle icons based on status
  const createVehicleIcon = (status: string) => {
    const color = 
      status === 'moving' ? '#10b981' : // green
      status === 'idle' ? '#3b82f6' : // blue
      '#eab308' // yellow for stopped

    const pulseClass = status === 'moving' ? 'pulse-glow' : ''

    return L.divIcon({
      html: `
        <div class="relative">
          <div class="w-10 h-10 ${pulseClass}" style="background-color: ${color}; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px ${color};">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
              <circle cx="7" cy="17" r="2"></circle>
              <circle cx="17" cy="17" r="2"></circle>
            </svg>
          </div>
        </div>
      `,
      className: 'vehicle-marker',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20],
    })
  }

  const center: LatLngExpression = [13.7463, 100.5183] // Bangkok center

  return (
    <div className="aspect-video rounded-lg overflow-hidden border border-white/10 relative z-0">
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {vehicles.map((vehicle) => (
          <Marker
            key={vehicle.id}
            position={vehicle.position}
            icon={createVehicleIcon(vehicle.status)}
          >
            <Popup>
              <div className="text-dark-900 p-2 min-w-[200px]">
                <h3 className="font-bold text-lg mb-1">{vehicle.id}</h3>
                <p className="text-sm text-gray-600 mb-2">{vehicle.driver}</p>
                
                <div className="space-y-1 text-sm mb-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{vehicle.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className={`font-medium ${
                      vehicle.status === 'moving' ? 'text-green-600' :
                      vehicle.status === 'idle' ? 'text-blue-600' :
                      'text-yellow-600'
                    }`}>
                      {vehicle.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Speed:</span>
                    <span className="font-medium">{vehicle.speed} km/h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Battery:</span>
                    <span className={`font-medium ${
                      vehicle.battery < 50 ? 'text-yellow-600' : 'text-green-600'
                    }`}>
                      {vehicle.battery}%
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => console.log('Track vehicle:', vehicle.id)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors text-sm"
                >
                  Track Vehicle →
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 glass-card p-3 space-y-2 z-[1000]">
        <p className="text-xs font-bold text-white mb-2">Vehicle Status</p>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-xs text-gray-300">Moving</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-xs text-gray-300">Idle</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <span className="text-xs text-gray-300">Stopped</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="absolute top-4 left-4 glass-card px-3 py-2 z-[1000]">
        <p className="text-xs text-gray-400 mb-1">🚗 Vehicle Tracking</p>
        <div className="flex gap-2 text-xs">
          <span className="text-green-400 font-bold">
            {vehicles.filter(v => v.status === 'moving').length} Moving
          </span>
          <span className="text-blue-400 font-bold">
            {vehicles.filter(v => v.status === 'idle').length} Idle
          </span>
          <span className="text-yellow-400 font-bold">
            {vehicles.filter(v => v.status === 'stopped').length} Stopped
          </span>
        </div>
      </div>
    </div>
  )
}
