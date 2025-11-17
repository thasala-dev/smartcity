import { LucideIcon } from 'lucide-react'
import { clsx } from 'clsx'

interface StatCardProps {
  title: string
  value: string | number
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
  icon: LucideIcon
  iconColor?: string
}

export default function StatCard({ 
  title, 
  value, 
  change, 
  changeType = 'neutral', 
  icon: Icon,
  iconColor = 'text-primary-400'
}: StatCardProps) {
  return (
    <div className="stat-card slide-up">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-400 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-white mb-2">{value}</h3>
          {change && (
            <div className="flex items-center gap-1">
              <span className={clsx(
                'text-sm font-medium',
                changeType === 'positive' && 'text-green-400',
                changeType === 'negative' && 'text-red-400',
                changeType === 'neutral' && 'text-gray-400'
              )}>
                {change}
              </span>
              <span className="text-xs text-gray-500">vs last period</span>
            </div>
          )}
        </div>
        <div className={clsx(
          'w-12 h-12 rounded-lg flex items-center justify-center',
          'bg-gradient-to-br from-white/10 to-white/5'
        )}>
          <Icon className={clsx('w-6 h-6', iconColor)} />
        </div>
      </div>
    </div>
  )
}
