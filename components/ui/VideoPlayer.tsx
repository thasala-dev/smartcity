'use client'

import { useEffect, useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize2, AlertCircle } from 'lucide-react'

interface VideoPlayerProps {
  src?: string
  cameraName: string
  status: 'online' | 'recording' | 'offline'
  showControls?: boolean
}

export default function VideoPlayer({ 
  src, 
  cameraName, 
  status,
  showControls = true 
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (videoRef.current && src) {
      // Auto play when source is available
      videoRef.current.play().catch(() => {
        setError(true)
      })
      setIsPlaying(true)
    }
  }, [src])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play().catch(() => {
          setError(true)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
    }
  }

  // Offline or no source
  if (status === 'offline' || !src) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-2" />
          <p className="text-sm text-red-400">
            {status === 'offline' ? 'Camera Offline' : 'No Video Source'}
          </p>
          <p className="text-xs text-gray-500 mt-1">{cameraName}</p>
        </div>
      </div>
    )
  }

  // Video player with error state
  if (error) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
          <p className="text-sm text-yellow-400">Failed to Load Video</p>
          <p className="text-xs text-gray-500 mt-1">{cameraName}</p>
          <button 
            onClick={() => {
              setError(false)
              if (videoRef.current) {
                videoRef.current.load()
                videoRef.current.play().catch(() => setError(true))
              }
            }}
            className="btn-secondary text-xs mt-3"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 bg-black group">
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={src}
        muted={isMuted}
        autoPlay
        playsInline
        loop
        crossOrigin="anonymous"
        onError={() => setError(true)}
      >
        <p className="text-white text-sm p-4">
          Your browser does not support the video tag or the stream format.
        </p>
      </video>

      {/* Recording Indicator */}
      {status === 'recording' && (
        <div className="absolute top-2 left-2 flex items-center gap-2 bg-red-500/90 px-2 py-1 rounded z-10">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-xs text-white font-medium">REC</span>
        </div>
      )}

      {/* Timestamp */}
      <div className="absolute bottom-2 left-2 bg-dark-900/90 px-2 py-1 rounded text-xs text-gray-300 z-10">
        {new Date().toLocaleTimeString()}
      </div>

      {/* Video Controls */}
      {showControls && (
        <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 z-10">
          <button 
            onClick={togglePlay}
            className="btn-primary p-3 rounded-full hover:scale-110 transition-transform"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>
          
          <button 
            onClick={toggleMute}
            className="btn-secondary p-3 rounded-full hover:scale-110 transition-transform"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
          
          <button 
            onClick={toggleFullscreen}
            className="btn-secondary p-3 rounded-full hover:scale-110 transition-transform"
            title="Fullscreen"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Live Badge */}
      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1 z-10">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        LIVE
      </div>
    </div>
  )
}
