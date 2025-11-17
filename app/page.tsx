'use client'

import Link from 'next/link'
import { 
  Activity, 
  Users, 
  Database, 
  TrendingUp, 
  Video,
  Car,
  Cloud,
  MapPin,
  ArrowRight,
  RefreshCw
} from 'lucide-react'
import StatCard from '@/components/ui/StatCard'
import SectionCard from '@/components/ui/SectionCard'
import AlertBadge from '@/components/ui/AlertBadge'
import Badge from '@/components/ui/Badge'
import ProgressBar from '@/components/ui/ProgressBar'
import CityMap from '@/components/ui/CityMap'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">SCDP Command Center</h1>
          <p className="text-gray-400">Real-time monitoring and control dashboard</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <RefreshCw className="w-4 h-4" />
          Refresh Data
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Active Citizens"
          value="125,847"
          change="+12.5%"
          changeType="positive"
          icon={Users}
          iconColor="text-primary-400"
        />
        <StatCard
          title="Data Streams"
          value="342"
          change="+8"
          changeType="positive"
          icon={Activity}
          iconColor="text-green-400"
        />
        <StatCard
          title="Storage Used"
          value="2.4 TB"
          change="+15%"
          changeType="neutral"
          icon={Database}
          iconColor="text-blue-400"
        />
        <StatCard
          title="System Health"
          value="98.5%"
          change="-0.2%"
          changeType="negative"
          icon={TrendingUp}
          iconColor="text-yellow-400"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - GIS Map */}
        <div className="lg:col-span-2">
          <SectionCard
            title="Real-time City Map"
            subtitle="Interactive GIS View - คลิกเพื่อดูกล้องวงจรปิด"
            icon={MapPin}
            action={
              <div className="flex gap-2">
                <Badge variant="success">Live</Badge>
                <Badge variant="default">6 CCTV Cameras</Badge>
              </div>
            }
          >
            <CityMap />
          </SectionCard>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <Link href="/vms" className="glass-card p-4 hover:shadow-glow transition-all cursor-pointer block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Video className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">CCTV Status</p>
                  <p className="text-lg font-bold text-white">247/250</p>
                </div>
              </div>
              <ProgressBar value={98.8} color="success" showPercentage={false} />
            </Link>
            
            <Link href="/vehicle-tracking" className="glass-card p-4 hover:shadow-glow transition-all cursor-pointer block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Car className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Vehicles</p>
                  <p className="text-lg font-bold text-white">1,247</p>
                </div>
              </div>
              <ProgressBar value={85} color="primary" showPercentage={false} />
            </Link>
            
            <Link href="/weather-iot" className="glass-card p-4 hover:shadow-glow transition-all cursor-pointer block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">IoT Sensors</p>
                  <p className="text-lg font-bold text-white">342</p>
                </div>
              </div>
              <ProgressBar value={92} color="warning" showPercentage={false} />
            </Link>
          </div>
        </div>

        {/* Right Column - Alerts & Quick Actions */}
        <div className="space-y-6">
          {/* Alerts Panel */}
          <SectionCard title="System Alerts" subtitle="Last 24 hours" icon={Activity}>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              <AlertBadge 
                type="warning" 
                message="High traffic detected on Route 101"
                time="5 mins ago"
              />
              <AlertBadge 
                type="info" 
                message="Camera maintenance scheduled Zone 3"
                time="15 mins ago"
              />
              <AlertBadge 
                type="success" 
                message="All systems operational"
                time="1 hour ago"
              />
              <AlertBadge 
                type="error" 
                message="Sensor offline: PM2.5-District-5"
                time="2 hours ago"
              />
            </div>
            <button className="btn-secondary w-full mt-4 flex items-center justify-center gap-2">
              View All Alerts
              <ArrowRight className="w-4 h-4" />
            </button>
          </SectionCard>

          {/* Quick Modules */}
          <SectionCard title="Quick Access" subtitle="Module Navigation">
            <div className="grid grid-cols-2 gap-3">
              <Link href="/vms" className="glass-card-hover p-4 text-left block">
                <Video className="w-6 h-6 text-primary-400 mb-2" />
                <p className="text-sm font-medium text-white">VMS</p>
                <p className="text-xs text-gray-400">Video System</p>
              </Link>
              <Link href="/vehicle-tracking" className="glass-card-hover p-4 text-left block">
                <Car className="w-6 h-6 text-green-400 mb-2" />
                <p className="text-sm font-medium text-white">Tracking</p>
                <p className="text-xs text-gray-400">Vehicle GPS</p>
              </Link>
              <Link href="/weather-iot" className="glass-card-hover p-4 text-left block">
                <Cloud className="w-6 h-6 text-blue-400 mb-2" />
                <p className="text-sm font-medium text-white">Weather</p>
                <p className="text-xs text-gray-400">IoT Sensors</p>
              </Link>
              <Link href="/data-catalog" className="glass-card-hover p-4 text-left block">
                <Database className="w-6 h-6 text-yellow-400 mb-2" />
                <p className="text-sm font-medium text-white">Catalog</p>
                <p className="text-xs text-gray-400">Data Access</p>
              </Link>
            </div>
          </SectionCard>
        </div>
      </div>

      {/* Data Analytics Section */}
      <SectionCard 
        title="Real-time Analytics" 
        subtitle="Live data processing metrics"
        icon={TrendingUp}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <p className="text-sm text-gray-400">Data Processing</p>
            <ProgressBar value={87} label="API Calls" color="primary" />
            <ProgressBar value={92} label="Queue" color="success" />
            <ProgressBar value={65} label="Cache Hit" color="warning" />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-400">Network Traffic</p>
            <ProgressBar value={75} label="Inbound" color="primary" />
            <ProgressBar value={68} label="Outbound" color="success" />
            <ProgressBar value={82} label="Internal" color="warning" />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-400">System Resources</p>
            <ProgressBar value={45} label="CPU" color="success" />
            <ProgressBar value={68} label="Memory" color="warning" />
            <ProgressBar value={34} label="Disk I/O" color="primary" />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-400">Module Status</p>
            <ProgressBar value={100} label="VMS" color="success" />
            <ProgressBar value={98} label="Tracking" color="success" />
            <ProgressBar value={95} label="IoT" color="success" />
          </div>
        </div>
      </SectionCard>
    </div>
  )
}
