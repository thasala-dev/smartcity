'use client'

import { Users, Bell, MessageSquare, MapPin, Heart, Share2, Smartphone } from 'lucide-react'
import SectionCard from '@/components/ui/SectionCard'
import Badge from '@/components/ui/Badge'
import StatCard from '@/components/ui/StatCard'
import AlertBadge from '@/components/ui/AlertBadge'

export default function CitizenPage() {
  const news = [
    { id: 1, title: 'New Public Park Opening', category: 'Events', time: '2 hours ago', likes: 145 },
    { id: 2, title: 'Road Construction Update - Main St', category: 'Infrastructure', time: '5 hours ago', likes: 89 },
    { id: 3, title: 'Free Health Checkup Campaign', category: 'Health', time: '1 day ago', likes: 234 },
    { id: 4, title: 'Smart City App 2.0 Released', category: 'Technology', time: '2 days ago', likes: 567 },
  ]

  const alerts = [
    { zone: 'District 1', message: 'Heavy traffic on Main Street', severity: 'warning' },
    { zone: 'District 3', message: 'Water supply maintenance scheduled', severity: 'info' },
    { zone: 'District 5', message: 'Air quality alert', severity: 'error' },
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Citizen Information System</h1>
          <p className="text-gray-400">Public information and community engagement</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Bell className="w-4 h-4" />
          Send Alert
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Active Citizens"
          value="125,847"
          change="+12.5%"
          changeType="positive"
          icon={Users}
          iconColor="text-primary-400"
        />
        <StatCard
          title="App Downloads"
          value="89,432"
          change="+2,341"
          changeType="positive"
          icon={Smartphone}
          iconColor="text-green-400"
        />
        <StatCard
          title="Feedback Received"
          value="3,245"
          change="+152"
          changeType="positive"
          icon={MessageSquare}
          iconColor="text-blue-400"
        />
        <StatCard
          title="Engagement Rate"
          value="78%"
          change="+5%"
          changeType="positive"
          icon={Heart}
          iconColor="text-pink-400"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* News Feed */}
        <div className="lg:col-span-2 space-y-6">
          <SectionCard title="News & Updates" subtitle="Latest city information" icon={MessageSquare}>
            <div className="space-y-4">
              {news.map((item) => (
                <div key={item.id} className="glass-card p-4 hover:shadow-glow transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="primary" size="sm">{item.category}</Badge>
                        <span className="text-xs text-gray-400">{item.time}</span>
                      </div>
                      <h3 className="font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/10">
                    <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-primary-400 transition-colors">
                      <Heart className="w-4 h-4" />
                      {item.likes}
                    </button>
                    <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-primary-400 transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      Comment
                    </button>
                    <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-primary-400 transition-colors">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Mobile App Mockup */}
          <SectionCard title="Mobile App Preview" subtitle="Citizen app interface" icon={Smartphone}>
            <div className="grid grid-cols-3 gap-4">
              {/* Phone 1 - Home */}
              <div className="glass-card p-3 rounded-2xl">
                <div className="aspect-[9/19] bg-gradient-to-br from-dark-900 to-dark-800 rounded-xl border border-white/10 p-3">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-gray-400">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-white/20 rounded-full"></div>
                      <div className="w-4 h-2 bg-white/20 rounded-full"></div>
                      <div className="w-4 h-2 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="space-y-3">
                    <div className="text-center mb-4">
                      <h3 className="text-sm font-bold text-white mb-1">Smart City</h3>
                      <p className="text-xs text-gray-400">Welcome, Citizen</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {['News', 'Alerts', 'Services', 'Report'].map((item) => (
                        <div key={item} className="glass-card p-2 text-center">
                          <div className="w-6 h-6 bg-primary-500/20 rounded mx-auto mb-1"></div>
                          <p className="text-xs text-gray-300">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center text-gray-400 mt-2">Home Screen</p>
              </div>

              {/* Phone 2 - Alerts */}
              <div className="glass-card p-3 rounded-2xl">
                <div className="aspect-[9/19] bg-gradient-to-br from-dark-900 to-dark-800 rounded-xl border border-white/10 p-3">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-gray-400">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-white mb-2">Notifications</h3>
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="glass-card p-2">
                        <div className="w-full h-2 bg-white/10 rounded mb-1"></div>
                        <div className="w-3/4 h-2 bg-white/5 rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-center text-gray-400 mt-2">Alerts</p>
              </div>

              {/* Phone 3 - Map */}
              <div className="glass-card p-3 rounded-2xl">
                <div className="aspect-[9/19] bg-gradient-to-br from-dark-900 to-dark-800 rounded-xl border border-white/10 p-3">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-gray-400">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="relative h-full">
                    <div className="absolute inset-0 grid grid-cols-3 grid-rows-4 opacity-20">
                      {Array(12).fill(0).map((_, i) => (
                        <div key={i} className="border border-white/10"></div>
                      ))}
                    </div>
                    <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-primary-500 rounded-full pulse-glow"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-green-500 rounded-full pulse-glow"></div>
                  </div>
                </div>
                <p className="text-xs text-center text-gray-400 mt-2">Services Map</p>
              </div>
            </div>
          </SectionCard>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Zone Alerts */}
          <SectionCard title="Zone Alerts" subtitle="Location-based notifications" icon={MapPin}>
            <div className="space-y-3">
              {alerts.map((alert, index) => (
                <AlertBadge
                  key={index}
                  type={alert.severity as any}
                  message={`${alert.zone}: ${alert.message}`}
                  time="Active now"
                />
              ))}
            </div>
            <button className="btn-secondary w-full mt-4">
              View All Zones
            </button>
          </SectionCard>

          {/* Citizen Engagement */}
          <SectionCard title="Engagement Stats" subtitle="Community participation" icon={Activity}>
            <div className="space-y-4">
              <div className="glass-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Active Users Today</span>
                  <Badge variant="success">+15%</Badge>
                </div>
                <p className="text-2xl font-bold text-white">45,234</p>
              </div>

              <div className="glass-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Reports Submitted</span>
                  <Badge variant="primary">+23</Badge>
                </div>
                <p className="text-2xl font-bold text-white">342</p>
              </div>

              <div className="glass-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Feedback Rating</span>
                  <Badge variant="success">Excellent</Badge>
                </div>
                <p className="text-2xl font-bold text-white">4.7/5.0</p>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  )
}
