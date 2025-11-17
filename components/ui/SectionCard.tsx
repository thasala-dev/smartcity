import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface SectionCardProps {
  title: string
  subtitle?: string
  icon?: LucideIcon
  action?: ReactNode
  children: ReactNode
  className?: string
}

export default function SectionCard({ 
  title, 
  subtitle, 
  icon: Icon, 
  action, 
  children,
  className = ''
}: SectionCardProps) {
  return (
    <div className={`glass-card p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-primary-500/30">
              <Icon className="w-5 h-5 text-primary-400" />
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
          </div>
        </div>
        {action && <div>{action}</div>}
      </div>
      <div>{children}</div>
    </div>
  )
}
