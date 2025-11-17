'use client'

import { useState } from 'react'
import { TrendingUp, TrendingDown, Calendar } from 'lucide-react'

interface DataPoint {
  time: string
  value: number
  label: string
}

// PM2.5 data for 24 hours
const hourlyData: DataPoint[] = [
  { time: '00:00', value: 45, label: '0h' },
  { time: '01:00', value: 38, label: '1h' },
  { time: '02:00', value: 42, label: '2h' },
  { time: '03:00', value: 35, label: '3h' },
  { time: '04:00', value: 32, label: '4h' },
  { time: '05:00', value: 38, label: '5h' },
  { time: '06:00', value: 48, label: '6h' },
  { time: '07:00', value: 62, label: '7h' },
  { time: '08:00', value: 75, label: '8h' },
  { time: '09:00', value: 68, label: '9h' },
  { time: '10:00', value: 58, label: '10h' },
  { time: '11:00', value: 52, label: '11h' },
  { time: '12:00', value: 48, label: '12h' },
  { time: '13:00', value: 55, label: '13h' },
  { time: '14:00', value: 62, label: '14h' },
  { time: '15:00', value: 58, label: '15h' },
  { time: '16:00', value: 52, label: '16h' },
  { time: '17:00', value: 65, label: '17h' },
  { time: '18:00', value: 72, label: '18h' },
  { time: '19:00', value: 68, label: '19h' },
  { time: '20:00', value: 55, label: '20h' },
  { time: '21:00', value: 48, label: '21h' },
  { time: '22:00', value: 42, label: '22h' },
  { time: '23:00', value: 38, label: '23h' },
]

// Weekly data
const weeklyData: DataPoint[] = [
  { time: 'Mon', value: 45, label: 'Mon' },
  { time: 'Tue', value: 52, label: 'Tue' },
  { time: 'Wed', value: 38, label: 'Wed' },
  { time: 'Thu', value: 48, label: 'Thu' },
  { time: 'Fri', value: 62, label: 'Fri' },
  { time: 'Sat', value: 55, label: 'Sat' },
  { time: 'Sun', value: 42, label: 'Sun' },
]

// Monthly data
const monthlyData: DataPoint[] = [
  { time: 'Week 1', value: 45, label: 'W1' },
  { time: 'Week 2', value: 52, label: 'W2' },
  { time: 'Week 3', value: 48, label: 'W3' },
  { time: 'Week 4', value: 42, label: 'W4' },
]

type TimeRange = 'hourly' | 'weekly' | 'monthly'

const getColor = (value: number) => {
  if (value <= 25) return { bg: 'from-green-500 to-green-400', text: 'text-green-400', status: 'Good' }
  if (value <= 50) return { bg: 'from-yellow-500 to-yellow-400', text: 'text-yellow-400', status: 'Moderate' }
  if (value <= 75) return { bg: 'from-orange-500 to-orange-400', text: 'text-orange-400', status: 'Unhealthy' }
  return { bg: 'from-red-500 to-red-400', text: 'text-red-400', status: 'Hazardous' }
}

export default function PM25Chart() {
  const [timeRange, setTimeRange] = useState<TimeRange>('hourly')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const currentData = 
    timeRange === 'hourly' ? hourlyData :
    timeRange === 'weekly' ? weeklyData :
    monthlyData

  const maxValue = 100 // Maximum value for scaling
  const currentValue = currentData[currentData.length - 1].value
  const previousValue = currentData[currentData.length - 2].value
  const trend = currentValue - previousValue
  const avgValue = Math.round(currentData.reduce((sum, d) => sum + d.value, 0) / currentData.length)

  const currentColor = getColor(currentValue)
  const avgColor = getColor(avgValue)

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button
            onClick={() => setTimeRange('hourly')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              timeRange === 'hourly'
                ? 'bg-primary-500 text-white shadow-glow'
                : 'glass-card text-gray-400 hover:text-white'
            }`}
          >
            24 Hours
          </button>
          <button
            onClick={() => setTimeRange('weekly')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              timeRange === 'weekly'
                ? 'bg-primary-500 text-white shadow-glow'
                : 'glass-card text-gray-400 hover:text-white'
            }`}
          >
            7 Days
          </button>
          <button
            onClick={() => setTimeRange('monthly')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              timeRange === 'monthly'
                ? 'bg-primary-500 text-white shadow-glow'
                : 'glass-card text-gray-400 hover:text-white'
            }`}
          >
            Monthly
          </button>
        </div>

        <div className="flex items-center gap-2 glass-card px-3 py-2">
          <Calendar className="w-4 h-4 text-primary-400" />
          <span className="text-sm text-gray-300">
            {timeRange === 'hourly' ? 'Last 24 Hours' :
             timeRange === 'weekly' ? 'This Week' :
             'This Month'}
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="glass-card p-4">
          <p className="text-xs text-gray-400 mb-1">Current PM2.5</p>
          <div className="flex items-end gap-2">
            <p className={`text-2xl font-bold ${currentColor.text}`}>
              {currentValue}
            </p>
            <span className="text-sm text-gray-400 mb-1">μg/m³</span>
          </div>
          <div className="flex items-center gap-1 mt-2">
            {trend > 0 ? (
              <>
                <TrendingUp className="w-4 h-4 text-red-400" />
                <span className="text-xs text-red-400">+{trend} from last</span>
              </>
            ) : (
              <>
                <TrendingDown className="w-4 h-4 text-green-400" />
                <span className="text-xs text-green-400">{trend} from last</span>
              </>
            )}
          </div>
        </div>

        <div className="glass-card p-4">
          <p className="text-xs text-gray-400 mb-1">Average</p>
          <div className="flex items-end gap-2">
            <p className={`text-2xl font-bold ${avgColor.text}`}>
              {avgValue}
            </p>
            <span className="text-sm text-gray-400 mb-1">μg/m³</span>
          </div>
          <p className="text-xs text-gray-400 mt-2">Status: {avgColor.status}</p>
        </div>

        <div className="glass-card p-4">
          <p className="text-xs text-gray-400 mb-1">Peak Value</p>
          <div className="flex items-end gap-2">
            <p className="text-2xl font-bold text-red-400">
              {Math.max(...currentData.map(d => d.value))}
            </p>
            <span className="text-sm text-gray-400 mb-1">μg/m³</span>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            At {currentData.find(d => d.value === Math.max(...currentData.map(d => d.value)))?.time}
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="glass-card p-6">
        <div className="relative">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500">
            <span>100</span>
            <span>75</span>
            <span>50</span>
            <span>25</span>
            <span>0</span>
          </div>

          {/* Chart area */}
          <div className="ml-8">
            <div className="flex items-end justify-between h-64 gap-1">
              {currentData.map((point, i) => {
                const percentage = (point.value / maxValue) * 100
                const color = getColor(point.value)
                const isHovered = hoveredIndex === i

                return (
                  <div 
                    key={i} 
                    className="flex-1 flex flex-col items-center gap-2 group relative"
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Tooltip */}
                    {isHovered && (
                      <div className="absolute bottom-full mb-2 glass-card px-3 py-2 whitespace-nowrap z-10">
                        <p className="text-xs font-bold text-white">{point.time}</p>
                        <p className={`text-sm font-bold ${color.text}`}>
                          {point.value} μg/m³
                        </p>
                        <p className="text-xs text-gray-400">{color.status}</p>
                      </div>
                    )}

                    {/* Bar */}
                    <div 
                      className={`w-full bg-gradient-to-t ${color.bg} ${
                        isHovered ? 'opacity-100 shadow-glow' : 'opacity-80'
                      } hover:opacity-100 transition-all rounded-t cursor-pointer relative`}
                      style={{ height: `${percentage}%`, minHeight: '4px' }}
                    >
                      {/* Peak indicator */}
                      {point.value === Math.max(...currentData.map(d => d.value)) && (
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* X-axis labels */}
            <div className="flex justify-between mt-4 text-xs text-gray-500">
              {timeRange === 'hourly' ? (
                <>
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                  <span>24:00</span>
                </>
              ) : timeRange === 'weekly' ? (
                weeklyData.map((d, i) => <span key={i}>{d.time}</span>)
              ) : (
                monthlyData.map((d, i) => <span key={i}>{d.time}</span>)
              )}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gradient-to-t from-green-500 to-green-400 rounded"></div>
            <span className="text-xs text-gray-400">Good (0-25)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gradient-to-t from-yellow-500 to-yellow-400 rounded"></div>
            <span className="text-xs text-gray-400">Moderate (26-50)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gradient-to-t from-orange-500 to-orange-400 rounded"></div>
            <span className="text-xs text-gray-400">Unhealthy (51-75)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gradient-to-t from-red-500 to-red-400 rounded"></div>
            <span className="text-xs text-gray-400">Hazardous (76+)</span>
          </div>
        </div>
      </div>

      {/* Health Recommendations */}
      <div className={`glass-card p-4 border-l-4 ${
        currentValue <= 25 ? 'border-green-500 bg-green-500/5' :
        currentValue <= 50 ? 'border-yellow-500 bg-yellow-500/5' :
        currentValue <= 75 ? 'border-orange-500 bg-orange-500/5' :
        'border-red-500 bg-red-500/5'
      }`}>
        <h4 className="font-bold text-white mb-2">Health Advisory</h4>
        <p className="text-sm text-gray-300">
          {currentValue <= 25 ? 'Air quality is satisfactory. Outdoor activities are safe for everyone.' :
           currentValue <= 50 ? 'Air quality is acceptable. Sensitive groups should consider reducing prolonged outdoor exertion.' :
           currentValue <= 75 ? 'Air quality is unhealthy for sensitive groups. Everyone should reduce prolonged outdoor exertion.' :
           'Air quality is hazardous. Everyone should avoid outdoor activities.'}
        </p>
      </div>
    </div>
  )
}
