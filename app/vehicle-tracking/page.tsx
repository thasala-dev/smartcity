'use client'

import { Car, MapPin, Navigation, Activity, Clock, AlertTriangle } from 'lucide-react'
import SectionCard from '@/components/ui/SectionCard'
import Badge from '@/components/ui/Badge'
import StatCard from '@/components/ui/StatCard'
import VehicleMap from '@/components/ui/VehicleMap'

export default function VehicleTrackingPage() {
  const vehicles = [
    { id: 'VH-001', driver: 'John Doe', status: 'moving', speed: 45, location: 'Main St', battery: 85 },
    { id: 'VH-002', driver: 'Jane Smith', status: 'idle', speed: 0, location: 'Park Ave', battery: 92 },
    { id: 'VH-003', driver: 'Mike Johnson', status: 'moving', speed: 62, location: 'Highway 101', battery: 67 },
    { id: 'VH-004', driver: 'Sarah Williams', status: 'stopped', speed: 0, location: 'Central Mall', battery: 45 },
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Vehicle Tracking System</h1>
          <p className="text-gray-400">Real-time GPS tracking and fleet management</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Navigation className="w-4 h-4" />
          Track All Vehicles
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Total Vehicles"
          value="1,247"
          change="+15"
          changeType="positive"
          icon={Car}
          iconColor="text-primary-400"
        />
        <StatCard
          title="Active Now"
          value="892"
          change="+5.2%"
          changeType="positive"
          icon={Activity}
          iconColor="text-green-400"
        />
        <StatCard
          title="Avg Speed"
          value="42 km/h"
          change="-3 km/h"
          changeType="neutral"
          icon={Navigation}
          iconColor="text-blue-400"
        />
        <StatCard
          title="Alerts Today"
          value="23"
          change="+8"
          changeType="negative"
          icon={AlertTriangle}
          iconColor="text-yellow-400"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* GPS Map */}
        <div className="lg:col-span-2">
          <SectionCard 
            title="Live GPS Tracking" 
            subtitle="Interactive vehicle positions on real map"
            icon={MapPin}
          >
            <VehicleMap />
          </SectionCard>

          {/* Route Replay */}
          <SectionCard 
            title="Route Replay" 
            subtitle="Historical route visualization"
            icon={Clock}
            className="mt-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <button className="btn-secondary">Today</button>
                <button className="btn-secondary">Yesterday</button>
                <button className="btn-secondary">Last 7 Days</button>
                <button className="btn-secondary">Custom Range</button>
              </div>
              
              <div className="glass-card p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400">Selected Vehicle: VH-001</span>
                  <Badge variant="primary">Today's Route</Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Total Distance</span>
                    <span className="text-white font-bold">127.5 km</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-white font-bold">3h 25m</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Avg Speed</span>
                    <span className="text-white font-bold">37.4 km/h</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Stops</span>
                    <span className="text-white font-bold">12</span>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        {/* Vehicle List & Driver Behavior */}
        <div className="space-y-6">
          {/* Vehicle List */}
          <SectionCard title="Active Vehicles" subtitle={`${vehicles.length} vehicles`} icon={Car}>
            <div className="space-y-3 max-h-[400px] overflow-y-auto">
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="glass-card p-4 hover:shadow-glow transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-white">{vehicle.id}</h4>
                      <p className="text-xs text-gray-400">{vehicle.driver}</p>
                    </div>
                    <Badge 
                      variant={
                        vehicle.status === 'moving' ? 'success' : 
                        vehicle.status === 'idle' ? 'primary' : 'warning'
                      }
                      size="sm"
                    >
                      {vehicle.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Speed</span>
                      <span className="text-white">{vehicle.speed} km/h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Location</span>
                      <span className="text-white truncate ml-2">{vehicle.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Battery</span>
                      <span className={vehicle.battery < 50 ? 'text-yellow-400' : 'text-green-400'}>
                        {vehicle.battery}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Driver Behavior */}
          <SectionCard title="Driver Behavior" subtitle="Safety metrics" icon={Activity}>
            <div className="space-y-4">
              <div className="glass-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Hard Braking</span>
                  <Badge variant="warning">12 events</Badge>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>

              <div className="glass-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Speeding</span>
                  <Badge variant="error">8 events</Badge>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>

              <div className="glass-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Sharp Turns</span>
                  <Badge variant="warning">15 events</Badge>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: '42%' }}></div>
                </div>
              </div>

              <div className="glass-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Safety Score</span>
                  <Badge variant="success">87/100</Badge>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  )
}
