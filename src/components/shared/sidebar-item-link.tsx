import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'
import { ReactNode } from 'react'

interface SidebarItemLinkProps {
  href: string
  title: string
  isExpanded: boolean
  isActive: boolean
  icon: ReactNode
}
export default function SidebarItemLink({
  href,
  title,
  isExpanded,
  isActive,
  icon
}: SidebarItemLinkProps) {
  return (
    <li
      key={href}
      className={cn(
        'rounded',
        isActive &&
          'bg-app-background border border-app-border dark:bg-background'
      )}
    >
      <Link
        to={href}
        target={href.startsWith('/') ? '_self' : '_blank'}
        className={cn(
          'flex items-center justify-between text-sm text-app-primary/80 py-2 transition-all duration-100 hover:text-app-primary',
          'dark:text-primary/80 dark:hover:text-primary',
          isExpanded ? 'px-4' : 'px-2',
          isActive && 'text-app-primary dark:text-primary'
        )}
        title={title}
      >
        <span className="flex items-center gap-4 font-medium">
          {icon}
          {isExpanded && title}
        </span>
      </Link>
    </li>
  )
}
