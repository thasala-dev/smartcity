'use client'

import { useState } from 'react'
import { Video, Play, Square, Maximize2, AlertCircle, Eye, Filter, Link as LinkIcon } from 'lucide-react'
import SectionCard from '@/components/ui/SectionCard'
import Badge from '@/components/ui/Badge'
import AlertBadge from '@/components/ui/AlertBadge'
import VideoPlayer from '@/components/ui/VideoPlayer'

export default function VMSPage() {
  const [customUrl, setCustomUrl] = useState('')
  const [cameras, setCameras] = useState([
    ...Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      name: `NSS${String(i + 1).padStart(2, '0')}`,
      location: `Location ${i + 1}`,
      status: 'online' as const,
      alerts: 0,
      videoUrl: `https://streaming.noc.nakhoncity.org/live/NSS${String(i + 1).padStart(2, '0')}.m3u8`
    }))
  ])

  const handleAddCustomUrl = (cameraId: number) => {
    if (customUrl.trim()) {
      setCameras(cameras.map(cam => 
        cam.id === cameraId 
          ? { ...cam, videoUrl: customUrl, status: 'online' as const }
          : cam
      ))
      setCustomUrl('')
    }
  }

  const events = [
    { time: '14:32:15', camera: 'CAM-002', event: 'Motion Detected', severity: 'info' },
    { time: '14:28:42', camera: 'CAM-004', event: 'Crowd Detection', severity: 'warning' },
    { time: '14:15:03', camera: 'CAM-006', event: 'Camera Offline', severity: 'error' },
    { time: '14:08:21', camera: 'CAM-002', event: 'Vehicle Stopped', severity: 'warning' },
    { time: '13:55:44', camera: 'CAM-001', event: 'Face Recognition', severity: 'success' },
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Video Management System</h1>
          <p className="text-gray-400">Real-time surveillance and video analytics</p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter Cameras
          </button>
          <button className="btn-primary flex items-center gap-2">
            <Play className="w-4 h-4" />
            Start Recording All
          </button>
        </div>
      </div>

      {/* Custom URL Input */}
      <div className="glass-card p-4">
        <div className="flex items-center gap-3">
          <LinkIcon className="w-5 h-5 text-primary-400" />
          <div className="flex-1">
            <label className="text-sm font-bold text-white mb-2 block">
              📹 Add Custom Video Stream URL
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                placeholder="ใส่ URL ของ video stream (เช่น http://183.88.214.137:8000/stream.mp4 หรือ blob URL)"
                className="flex-1 glass-card px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && cameras[0]) {
                    handleAddCustomUrl(cameras[0].id)
                  }
                }}
              />
              <select 
                onChange={(e) => {
                  const cameraId = parseInt(e.target.value)
                  if (cameraId) handleAddCustomUrl(cameraId)
                }}
                className="glass-card px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg min-w-[200px]"
                defaultValue=""
              >
                <option value="" disabled>เลือกกล้องที่จะใส่ URL</option>
                {cameras.map(cam => (
                  <option key={cam.id} value={cam.id}>
                    {cam.name} - {cam.location}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-start gap-2 mt-3 text-xs">
              <div className="flex-1">
                <p className="text-gray-400 mb-1">
                  💡 <strong>รองรับ:</strong> MP4, WebM, HLS (.m3u8), Blob URL
                </p>
                <p className="text-gray-500">
                  <strong>ตัวอย่าง URL:</strong> 
                </p>
                <div className="mt-1 space-y-1">
                  <button
                    onClick={() => setCustomUrl('http://183.88.214.137:8000/stream')}
                    className="text-primary-400 hover:text-primary-300 block"
                  >
                    • http://183.88.214.137:8000/stream
                  </button>
                  <button
                    onClick={() => setCustomUrl('blob:http://183.88.214.137:8000/bad0b7bf-c8bd-4ac1-be59-d3196128090f')}
                    className="text-primary-400 hover:text-primary-300 block"
                  >
                    • blob:http://183.88.214.137:8000/bad0b7bf-c8bd-4ac1-be59-d3196128090f
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Camera Grid */}
      <SectionCard 
        title="Live Camera Feeds" 
        subtitle={`${cameras.filter(c => c.status !== 'offline').length}/${cameras.length} cameras active`}
        icon={Video}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cameras.map((camera) => (
            <div key={camera.id} className="glass-card overflow-hidden group">
              {/* Video Feed */}
              <div className="aspect-video bg-gradient-to-br from-dark-900 to-dark-800 relative">
                <VideoPlayer
                  src={camera.videoUrl}
                  cameraName={camera.name}
                  status={camera.status}
                  showControls={true}
                />
                
                {/* Analytics Overlay - Only show on hover for cameras with alerts */}
                {camera.alerts > 0 && camera.status !== 'offline' && (
                  <div className="absolute top-1/4 left-1/4 w-32 h-24 border-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    <div className="absolute -top-6 left-0 bg-yellow-500 text-dark-900 text-xs px-2 py-1 rounded">
                      {camera.alerts} Alert{camera.alerts > 1 ? 's' : ''}
                    </div>
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-2 right-12 z-20">
                  <Badge 
                    variant={
                      camera.status === 'offline' ? 'error' : 
                      camera.status === 'recording' ? 'warning' : 'success'
                    }
                    size="sm"
                  >
                    {camera.status}
                  </Badge>
                </div>
              </div>

              {/* Camera Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white">{camera.name}</h3>
                  {camera.alerts > 0 && (
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                      {camera.alerts} alerts
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  {camera.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Video Analytics & Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Video Analytics */}
        <SectionCard title="Video Analytics" subtitle="AI-powered detection" icon={AlertCircle}>
          <div className="space-y-4">
            <div className="glass-card p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">People Counting</span>
                <Badge variant="success">Active</Badge>
              </div>
              <div className="flex items-end gap-2">
                {[45, 62, 38, 72, 55, 68, 82, 59].map((val, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-primary-500/30 hover:bg-primary-500 transition-colors rounded-t"
                    style={{ height: `${val}px` }}
                  />
                ))}
              </div>
            </div>

            <div className="glass-card p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Vehicle Detection</span>
                <Badge variant="success">Active</Badge>
              </div>
              <div className="flex items-end gap-2">
                {[35, 48, 52, 41, 58, 63, 45, 72].map((val, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-green-500/30 hover:bg-green-500 transition-colors rounded-t"
                    style={{ height: `${val}px` }}
                  />
                ))}
              </div>
            </div>

            <div className="glass-card p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Anomaly Detection</span>
                <Badge variant="warning">Monitoring</Badge>
              </div>
              <div className="flex items-end gap-2">
                {[12, 8, 15, 6, 22, 18, 9, 25].map((val, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-yellow-500/30 hover:bg-yellow-500 transition-colors rounded-t"
                    style={{ height: `${val}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Event Log */}
        <SectionCard title="Event Log" subtitle="Real-time camera events" icon={AlertCircle}>
          <div className="space-y-3 max-h-[500px] overflow-y-auto">
            {events.map((event, index) => (
              <AlertBadge
                key={index}
                type={event.severity as any}
                message={`${event.camera}: ${event.event}`}
                time={event.time}
              />
            ))}
          </div>
          <button className="btn-secondary w-full mt-4">
            View Full Event History
          </button>
        </SectionCard>
      </div>
    </div>
  )
}
