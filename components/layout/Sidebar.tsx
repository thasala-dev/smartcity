'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Video, 
  Car, 
  Cloud, 
  Users, 
  Database,
  Settings,
  Bell,
  MapPin,
  Activity
} from 'lucide-react'
import { clsx } from 'clsx'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: Database, label: 'Data Catalog', href: '/data-catalog' },
  { icon: Video, label: 'VMS', href: '/vms' },
  { icon: Car, label: 'Vehicle Tracking', href: '/vehicle-tracking' },
  { icon: Cloud, label: 'Weather & IoT', href: '/weather-iot' },
  { icon: Users, label: 'Citizen Info', href: '/citizen' },
  { icon: MapPin, label: 'GIS Mapping', href: '/gis' },
  { icon: Activity, label: 'Analytics', href: '/analytics' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 glass-card border-r border-white/10">
      {/* Logo */}
      <div className="flex items-center gap-3 p-6 border-b border-white/10">
        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-blue-600 rounded-lg flex items-center justify-center shadow-glow">
          <LayoutDashboard className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-bold gradient-text">SCDP</h1>
          <p className="text-xs text-gray-400">Command Center</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                isActive 
                  ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30 shadow-glow' 
                  : 'glass-card-hover text-gray-300'
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* System Status */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
        <div className="glass-card p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">System Status</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full pulse-glow"></div>
              <span className="text-xs text-green-400">Online</span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">API</span>
              <span className="text-green-400">98.5%</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Database</span>
              <span className="text-green-400">99.2%</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
