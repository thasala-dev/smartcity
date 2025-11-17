'use client'

import { Cloud, Droplets, Wind, Sun, ThermometerSun, Activity, AlertCircle } from 'lucide-react'
import SectionCard from '@/components/ui/SectionCard'
import StatCard from '@/components/ui/StatCard'
import Badge from '@/components/ui/Badge'
import ProgressBar from '@/components/ui/ProgressBar'
import PM25Chart from '@/components/ui/PM25Chart'

export default function WeatherIoTPage() {
  const sensors = [
    { id: 'IoT-001', type: 'PM2.5', value: 35, unit: 'μg/m³', status: 'normal', location: 'District 1' },
    { id: 'IoT-002', type: 'Temperature', value: 28, unit: '°C', status: 'normal', location: 'District 2' },
    { id: 'IoT-003', type: 'Humidity', value: 75, unit: '%', status: 'warning', location: 'District 3' },
    { id: 'IoT-004', type: 'PM2.5', value: 85, unit: 'μg/m³', status: 'alert', location: 'District 4' },
    { id: 'IoT-005', type: 'CO2', value: 420, unit: 'ppm', status: 'normal', location: 'District 5' },
    { id: 'IoT-006', type: 'Noise', value: 65, unit: 'dB', status: 'warning', location: 'District 6' },
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Weather & IoT Monitoring</h1>
          <p className="text-gray-400">Environmental sensors and air quality monitoring</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Activity className="w-4 h-4" />
          Refresh Data
        </button>
      </div>

      {/* Environmental Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="PM2.5 Average"
          value="42 μg/m³"
          change="-5%"
          changeType="positive"
          icon={Cloud}
          iconColor="text-blue-400"
        />
        <StatCard
          title="Temperature"
          value="28°C"
          change="+2°C"
          changeType="neutral"
          icon={ThermometerSun}
          iconColor="text-orange-400"
        />
        <StatCard
          title="Humidity"
          value="65%"
          change="-3%"
          changeType="neutral"
          icon={Droplets}
          iconColor="text-cyan-400"
        />
        <StatCard
          title="Air Quality Index"
          value="Good"
          change="Stable"
          changeType="positive"
          icon={Wind}
          iconColor="text-green-400"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* PM2.5 Chart */}
        <div className="lg:col-span-2">
          <SectionCard 
            title="PM2.5 Air Quality Analysis" 
            subtitle="Real-time particulate matter monitoring"
            icon={Activity}
          >
            <PM25Chart />
          </SectionCard>

          {/* Additional Metrics */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="glass-card p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <ThermometerSun className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Temperature</p>
                  <p className="text-lg font-bold text-white">28°C</p>
                </div>
              </div>
              <ProgressBar value={70} color="warning" showPercentage={false} />
            </div>
            
            <div className="glass-card p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Humidity</p>
                  <p className="text-lg font-bold text-white">65%</p>
                </div>
              </div>
              <ProgressBar value={65} color="primary" showPercentage={false} />
            </div>
            
            <div className="glass-card p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Wind className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Wind Speed</p>
                  <p className="text-lg font-bold text-white">12 m/s</p>
                </div>
              </div>
              <ProgressBar value={40} color="success" showPercentage={false} />
            </div>
          </div>
        </div>

        {/* Weather Info */}
        <div className="space-y-6">
          <SectionCard title="Current Weather" subtitle="Real-time conditions" icon={Sun}>
            <div className="glass-card p-6 text-center">
              <Sun className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-white mb-2">28°C</h2>
              <p className="text-lg text-gray-300 mb-4">Partly Cloudy</p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-left">
                  <p className="text-xs text-gray-400">Feels Like</p>
                  <p className="text-lg font-bold text-white">30°C</p>
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400">UV Index</p>
                  <p className="text-lg font-bold text-white">7 High</p>
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400">Visibility</p>
                  <p className="text-lg font-bold text-white">10 km</p>
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400">Pressure</p>
                  <p className="text-lg font-bold text-white">1013 hPa</p>
                </div>
              </div>
            </div>
          </SectionCard>

          {/* Air Quality Index */}
          <SectionCard title="Air Quality" subtitle="AQI Status" icon={Wind}>
            <div className="space-y-3">
              <div className="glass-card p-4 bg-green-500/10 border border-green-500/30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Overall AQI</p>
                    <p className="text-2xl font-bold text-green-400">Good</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-green-400">45</p>
                    <p className="text-xs text-gray-400">out of 500</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <ProgressBar value={35} label="PM2.5" color="success" />
                <ProgressBar value={42} label="PM10" color="success" />
                <ProgressBar value={28} label="CO" color="success" />
                <ProgressBar value={45} label="NO2" color="warning" />
                <ProgressBar value={32} label="O3" color="success" />
              </div>
            </div>
          </SectionCard>
        </div>
      </div>

      {/* Sensor Status */}
      <SectionCard title="IoT Sensor Network" subtitle={`${sensors.length} sensors active`} icon={Activity}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sensors.map((sensor) => (
            <div key={sensor.id} className="glass-card p-4 hover:shadow-glow transition-all">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-bold text-white">{sensor.id}</h4>
                  <p className="text-xs text-gray-400">{sensor.location}</p>
                </div>
                <Badge 
                  variant={
                    sensor.status === 'normal' ? 'success' : 
                    sensor.status === 'warning' ? 'warning' : 'error'
                  }
                  size="sm"
                >
                  {sensor.status}
                </Badge>
              </div>
              
              <div className="mb-3">
                <p className="text-sm text-gray-400 mb-1">{sensor.type}</p>
                <p className="text-2xl font-bold text-white">
                  {sensor.value} <span className="text-base text-gray-400">{sensor.unit}</span>
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-400">
                <AlertCircle className="w-4 h-4" />
                Last updated: 2 mins ago
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
