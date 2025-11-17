'use client'

import { Bell, Search, User, Menu, Settings } from 'lucide-react'
import { useState } from 'react'

export default function Topbar() {
  const [notifications] = useState(7)
  
  return (
    <header className="fixed top-0 right-0 left-64 z-30 h-16 glass-card border-b border-white/10">
      <div className="flex items-center justify-between h-full px-6">
        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search modules, data, or commands..."
              className="input-glass pl-10 pr-4"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Quick Stats */}
          <div className="hidden lg:flex items-center gap-4 px-4 border-l border-white/10">
            <div className="text-right">
              <p className="text-xs text-gray-400">Active Users</p>
              <p className="text-sm font-bold text-primary-400">1,247</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">Data Streams</p>
              <p className="text-sm font-bold text-green-400">342</p>
            </div>
          </div>

          {/* Notifications */}
          <button className="relative glass-card-hover p-2 rounded-lg">
            <Bell className="w-5 h-5 text-gray-300" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                {notifications}
              </span>
            )}
          </button>

          {/* Settings */}
          <button className="glass-card-hover p-2 rounded-lg">
            <Settings className="w-5 h-5 text-gray-300" />
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 glass-card px-3 py-2 rounded-lg cursor-pointer hover:bg-white/10 transition-all">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="hidden md:block text-sm">
              <p className="font-medium">Admin User</p>
              <p className="text-xs text-gray-400">System Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
