import { AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react'
import { clsx } from 'clsx'

interface AlertBadgeProps {
  type: 'info' | 'warning' | 'success' | 'error'
  message: string
  time?: string
}

export default function AlertBadge({ type, message, time }: AlertBadgeProps) {
  const config = {
    info: {
      icon: Info,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30'
    },
    warning: {
      icon: AlertTriangle,
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/30'
    },
    success: {
      icon: CheckCircle,
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      border: 'border-green-500/30'
    },
    error: {
      icon: XCircle,
      color: 'text-red-400',
      bg: 'bg-red-500/10',
      border: 'border-red-500/30'
    }
  }

  const { icon: Icon, color, bg, border } = config[type]

  return (
    <div className={clsx('flex items-start gap-3 p-3 rounded-lg border', bg, border)}>
      <Icon className={clsx('w-5 h-5 flex-shrink-0 mt-0.5', color)} />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-white">{message}</p>
        {time && <p className="text-xs text-gray-400 mt-1">{time}</p>}
      </div>
    </div>
  )
}
