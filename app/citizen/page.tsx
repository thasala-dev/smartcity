'use client'

import { Users, Bell, MessageSquare, MapPin, Heart, Share2, Smartphone, Activity } from 'lucide-react'
import SectionCard from '@/components/ui/SectionCard'
import Badge from '@/components/ui/Badge'
import StatCard from '@/components/ui/StatCard'
import AlertBadge from '@/components/ui/AlertBadge'
import EmergencyMap from '@/components/ui/EmergencyMap'

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
          <SectionCard title="Mobile App Preview" subtitle="Smart City Mobile Application Features" icon={Smartphone}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Phone 1 - Emergency Call */}
              <div className="glass-card p-3 rounded-2xl">
                <div className="aspect-[9/19] bg-gradient-to-br from-dark-900 to-dark-800 rounded-xl border border-white/10 p-3 flex flex-col">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-gray-400">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-1.5 bg-green-400 rounded-full"></div>
                      <div className="w-3 h-1.5 bg-white/40 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Back Button */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 border-l border-b border-white/40 transform rotate-45"></div>
                    <span className="text-xs text-gray-400">Back</span>
                  </div>

                  {/* Emergency Content */}
                  <div className="flex-1 flex flex-col items-center justify-center space-y-3">
                    <div className="text-center mb-2">
                      <h3 className="text-xs font-bold text-white mb-1">🚑 Emergency</h3>
                      <p className="text-xs text-gray-400">Call Ambulance</p>
                    </div>
                    
                    {/* Emergency Buttons */}
                    <div className="w-full space-y-2">
                      <div className="bg-red-500/90 rounded-lg p-3 text-center">
                        <div className="text-white text-lg mb-1">🚑</div>
                        <p className="text-xs text-white font-bold">Ambulance</p>
                        <p className="text-xs text-red-100">Available</p>
                      </div>
                      
                      <div className="glass-card p-2 text-center border border-white/20">
                        <div className="text-white text-base mb-1">🚓</div>
                        <p className="text-xs text-white">Police</p>
                      </div>
                      
                      <div className="glass-card p-2 text-center border border-white/20">
                        <div className="text-white text-base mb-1">🚒</div>
                        <p className="text-xs text-white">Fire Dept</p>
                      </div>
                    </div>

                    {/* Call Button */}
                    <div className="w-full mt-auto">
                      <div className="bg-green-500 rounded-full p-2.5 text-center">
                        <p className="text-xs text-white font-bold">📞 CALL NOW</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center text-gray-400 mt-2">Emergency Services</p>
              </div>

              {/* Phone 2 - Ambulance Tracking */}
              <div className="glass-card p-3 rounded-2xl">
                <div className="aspect-[9/19] bg-gradient-to-br from-dark-900 to-dark-800 rounded-xl border border-white/10 p-3 flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-gray-400">9:43</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-1.5 bg-green-400 rounded-full"></div>
                      <div className="w-3 h-1.5 bg-white/40 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Status Header */}
                  <div className="bg-green-500/20 border border-green-500/40 rounded-lg p-2 mb-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-green-400 font-bold">Ambulance En Route</p>
                        <p className="text-xs text-gray-400">ETA: 5 mins</p>
                      </div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Real Map View */}
                  <EmergencyMap />

                  {/* Driver Info */}
                  <div className="glass-card p-2 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary-500/30 rounded-full flex items-center justify-center">
                        <span className="text-xs">👨‍⚕️</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-white font-bold">Dr. John Smith</p>
                        <p className="text-xs text-gray-400">Unit AMB-001</p>
                      </div>
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <span className="text-xs">📞</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center text-gray-400 mt-2">Live Tracking</p>
              </div>

              {/* Phone 3 - Arrival Status */}
              <div className="glass-card p-3 rounded-2xl">
                <div className="aspect-[9/19] bg-gradient-to-br from-dark-900 to-dark-800 rounded-xl border border-white/10 p-3 flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-gray-400">9:48</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-1.5 bg-green-400 rounded-full"></div>
                      <div className="w-3 h-1.5 bg-white/40 rounded-full"></div>
                    </div>
                  </div>

                  {/* Arrival Status */}
                  <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center relative">
                      <span className="text-3xl">🚑</span>
                      <div className="absolute inset-0 border-4 border-green-500 rounded-full animate-ping"></div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-sm font-bold text-green-400 mb-1">Arrived!</h3>
                      <p className="text-xs text-gray-400">Ambulance is here</p>
                    </div>

                    {/* Timeline */}
                    <div className="w-full space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-xs text-white">Call Received</p>
                          <p className="text-xs text-gray-500">9:41 AM</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-xs text-white">Dispatched</p>
                          <p className="text-xs text-gray-500">9:42 AM</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="flex-1">
                          <p className="text-xs text-white font-bold">Arrived</p>
                          <p className="text-xs text-gray-500">9:48 AM</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="w-full space-y-2 mt-4">
                      <div className="glass-card p-2 text-center border border-green-500/40">
                        <p className="text-xs text-green-400 font-bold">✓ Complete</p>
                      </div>
                      <div className="glass-card p-2 text-center">
                        <p className="text-xs text-gray-400">Rate Service</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center text-gray-400 mt-2">Service Complete</p>
              </div>

              {/* Phone 4 - News Feed */}
              <div className="glass-card p-3 rounded-2xl">
                <div className="aspect-[9/19] bg-gradient-to-br from-dark-900 to-dark-800 rounded-xl border border-white/10 p-3 flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-gray-400">10:15</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-1.5 bg-green-400 rounded-full"></div>
                      <div className="w-3 h-1.5 bg-white/40 rounded-full"></div>
                    </div>
                  </div>

                  {/* Header */}
                  <div className="mb-3">
                    <h3 className="text-xs font-bold text-white">📰 City News</h3>
                    <p className="text-xs text-gray-400">Latest Updates</p>
                  </div>

                  {/* News Items */}
                  <div className="flex-1 space-y-2 overflow-hidden">
                    {/* News 1 */}
                    <div className="glass-card p-2 border-l-2 border-blue-500">
                      <div className="flex gap-2">
                        <div className="w-12 h-12 bg-blue-500/20 rounded flex-shrink-0 flex items-center justify-center">
                          <span className="text-lg">🏞️</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-white font-bold truncate">New Park Opening</p>
                          <p className="text-xs text-gray-400 line-clamp-2">Central Park renovation complete...</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-blue-400">Events</span>
                            <span className="text-xs text-gray-500">2h ago</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* News 2 */}
                    <div className="glass-card p-2 border-l-2 border-orange-500">
                      <div className="flex gap-2">
                        <div className="w-12 h-12 bg-orange-500/20 rounded flex-shrink-0 flex items-center justify-center">
                          <span className="text-lg">🚧</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-white font-bold truncate">Road Construction</p>
                          <p className="text-xs text-gray-400 line-clamp-2">Main St. will be closed...</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-orange-400">Alert</span>
                            <span className="text-xs text-gray-500">5h ago</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* News 3 */}
                    <div className="glass-card p-2 border-l-2 border-green-500">
                      <div className="flex gap-2">
                        <div className="w-12 h-12 bg-green-500/20 rounded flex-shrink-0 flex items-center justify-center">
                          <span className="text-lg">🏥</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-white font-bold truncate">Health Campaign</p>
                          <p className="text-xs text-gray-400 line-clamp-2">Free checkup this weekend...</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-green-400">Health</span>
                            <span className="text-xs text-gray-500">1d ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="mt-2 pt-2 border-t border-white/10">
                    <div className="flex gap-2">
                      <div className="flex-1 glass-card p-1.5 text-center">
                        <p className="text-xs text-gray-400">📖 Read More</p>
                      </div>
                      <div className="glass-card p-1.5">
                        <p className="text-xs">🔔</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center text-gray-400 mt-2">News Feed</p>
              </div>

              {/* Phone 5 - Report Issue */}
              <div className="glass-card p-3 rounded-2xl">
                <div className="aspect-[9/19] bg-gradient-to-br from-dark-900 to-dark-800 rounded-xl border border-white/10 p-3 flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-gray-400">10:15</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-1.5 bg-green-400 rounded-full"></div>
                      <div className="w-3 h-1.5 bg-white/40 rounded-full"></div>
                    </div>
                  </div>

                  {/* Back Button */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 border-l border-b border-white/40 transform rotate-45"></div>
                      <span className="text-xs text-gray-400">Back</span>
                    </div>
                    <span className="text-xs text-white font-bold">Report Issue</span>
                    <div className="w-8"></div>
                  </div>

                  {/* Report Content */}
                  <div className="flex-1 space-y-3">
                    {/* Category Selection */}
                    <div>
                      <p className="text-xs text-gray-400 mb-2">Select Category</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="glass-card p-2 text-center bg-primary-500/20 border border-primary-500/40">
                          <div className="text-base mb-1">🚧</div>
                          <p className="text-xs text-white">Road</p>
                        </div>
                        <div className="glass-card p-2 text-center">
                          <div className="text-base mb-1">💡</div>
                          <p className="text-xs text-gray-400">Lighting</p>
                        </div>
                        <div className="glass-card p-2 text-center">
                          <div className="text-base mb-1">🗑️</div>
                          <p className="text-xs text-gray-400">Waste</p>
                        </div>
                        <div className="glass-card p-2 text-center">
                          <div className="text-base mb-1">🔧</div>
                          <p className="text-xs text-gray-400">Other</p>
                        </div>
                      </div>
                    </div>

                    {/* Photo Upload */}
                    <div>
                      <p className="text-xs text-gray-400 mb-2">Add Photo</p>
                      <div className="glass-card p-3 border-2 border-dashed border-white/20 text-center">
                        <div className="text-2xl mb-1">📷</div>
                        <p className="text-xs text-gray-400">Take Photo</p>
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <p className="text-xs text-gray-400 mb-2">Location</p>
                      <div className="glass-card p-2 flex items-center gap-2">
                        <div className="text-base">📍</div>
                        <div className="flex-1">
                          <p className="text-xs text-white">Current Location</p>
                          <p className="text-xs text-gray-500">Main St, District 1</p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <p className="text-xs text-gray-400 mb-2">Description</p>
                      <div className="glass-card p-2">
                        <div className="h-8 space-y-1">
                          <div className="h-1 bg-white/10 rounded w-full"></div>
                          <div className="h-1 bg-white/10 rounded w-4/5"></div>
                          <div className="h-1 bg-white/10 rounded w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-auto">
                    <div className="bg-primary-500 rounded-lg p-2 text-center">
                      <p className="text-xs text-white font-bold">📤 Submit Report</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center text-gray-400 mt-2">Report Issue</p>
              </div>

              {/* Phone 6 - Services Directory */}
              <div className="glass-card p-3 rounded-2xl">
                <div className="aspect-[9/19] bg-gradient-to-br from-dark-900 to-dark-800 rounded-xl border border-white/10 p-3 flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-gray-400">10:15</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-1.5 bg-green-400 rounded-full"></div>
                      <div className="w-3 h-1.5 bg-white/40 rounded-full"></div>
                    </div>
                  </div>

                  {/* Header */}
                  <div className="mb-3">
                    <h3 className="text-xs font-bold text-white">🏛️ City Services</h3>
                    <p className="text-xs text-gray-400">Quick Access</p>
                  </div>

                  {/* Search Bar */}
                  <div className="glass-card p-2 flex items-center gap-2 mb-3">
                    <span className="text-xs">🔍</span>
                    <div className="flex-1 h-1 bg-white/10 rounded"></div>
                  </div>

                  {/* Service Grid */}
                  <div className="flex-1 space-y-2 overflow-hidden">
                    <div className="grid grid-cols-3 gap-2">
                      {/* Row 1 */}
                      <div className="glass-card p-2 text-center">
                        <div className="text-xl mb-1">🚌</div>
                        <p className="text-xs text-white">Transport</p>
                      </div>
                      <div className="glass-card p-2 text-center">
                        <div className="text-xl mb-1">🏥</div>
                        <p className="text-xs text-white">Health</p>
                      </div>
                      <div className="glass-card p-2 text-center">
                        <div className="text-xl mb-1">🎓</div>
                        <p className="text-xs text-white">Education</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {/* Row 2 */}
                      <div className="glass-card p-2 text-center">
                        <div className="text-xl mb-1">💳</div>
                        <p className="text-xs text-white">Payment</p>
                      </div>
                      <div className="glass-card p-2 text-center">
                        <div className="text-xl mb-1">📋</div>
                        <p className="text-xs text-white">Permits</p>
                      </div>
                      <div className="glass-card p-2 text-center">
                        <div className="text-xl mb-1">🏢</div>
                        <p className="text-xs text-white">Business</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {/* Row 3 */}
                      <div className="glass-card p-2 text-center">
                        <div className="text-xl mb-1">🌳</div>
                        <p className="text-xs text-white">Parks</p>
                      </div>
                      <div className="glass-card p-2 text-center">
                        <div className="text-xl mb-1">📚</div>
                        <p className="text-xs text-white">Library</p>
                      </div>
                      <div className="glass-card p-2 text-center">
                        <div className="text-xl mb-1">⚽</div>
                        <p className="text-xs text-white">Sports</p>
                      </div>
                    </div>

                    {/* Popular Services */}
                    <div className="mt-3">
                      <p className="text-xs text-gray-400 mb-2">⭐ Popular</p>
                      <div className="space-y-1">
                        <div className="glass-card p-2 flex items-center gap-2">
                          <div className="text-base">💡</div>
                          <div className="flex-1">
                            <p className="text-xs text-white">Pay Utilities</p>
                          </div>
                          <div className="text-xs text-primary-400">→</div>
                        </div>
                        <div className="glass-card p-2 flex items-center gap-2">
                          <div className="text-base">📋</div>
                          <div className="flex-1">
                            <p className="text-xs text-white">Apply Permit</p>
                          </div>
                          <div className="text-xs text-primary-400">→</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center text-gray-400 mt-2">Services</p>
              </div>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
              <div className="glass-card p-3 text-center">
                <div className="text-2xl mb-2">🚑</div>
                <p className="text-xs text-white font-bold">Emergency</p>
                <p className="text-xs text-gray-400">Quick call</p>
              </div>
              <div className="glass-card p-3 text-center">
                <div className="text-2xl mb-2">📍</div>
                <p className="text-xs text-white font-bold">Live Track</p>
                <p className="text-xs text-gray-400">Real-time</p>
              </div>
              <div className="glass-card p-3 text-center">
                <div className="text-2xl mb-2">⏱️</div>
                <p className="text-xs text-white font-bold">ETA Timer</p>
                <p className="text-xs text-gray-400">Arrival time</p>
              </div>
              <div className="glass-card p-3 text-center">
                <div className="text-2xl mb-2">�</div>
                <p className="text-xs text-white font-bold">City News</p>
                <p className="text-xs text-gray-400">Updates</p>
              </div>
              <div className="glass-card p-3 text-center">
                <div className="text-2xl mb-2">📤</div>
                <p className="text-xs text-white font-bold">Report</p>
                <p className="text-xs text-gray-400">Issues</p>
              </div>
              <div className="glass-card p-3 text-center">
                <div className="text-2xl mb-2">🏛️</div>
                <p className="text-xs text-white font-bold">Services</p>
                <p className="text-xs text-gray-400">Directory</p>
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
