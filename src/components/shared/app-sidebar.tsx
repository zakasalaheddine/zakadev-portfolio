import { cn } from '@/lib/utils'
import { Sidebar, useSidebar } from '../ui/sidebar'
import { sidebarNav } from '@/constants/sidebar'
import SidebarItemLink from './sidebar-item-link'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state, toggleSidebar } = useSidebar()
  const isExpanded = state === 'expanded'
  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className={cn(props.className, 'relative')}
    >
      <div
        className={cn('flex flex-col py-5', isExpanded ? '' : 'items-center')}
      >
        <Button
          data-sidebar="trigger"
          data-slot="sidebar-trigger"
          variant="ghost"
          className="flex items-center gap-2 px-2 h-10 min-w-10 mb-5 cursor-pointer will-change-contents"
          onClick={toggleSidebar}
        >
          <img
            src="/assets/animated-me.png"
            alt="logo"
            className={cn(
              'w-10 h-10 rounded-full object-cover will-change-auto',
              !isExpanded && 'size-full'
            )}
          />
          {isExpanded && (
            <div className="flex flex-col will-change-auto">
              <div className="text-sm font-semibold">Zaka SalahEddine</div>
              <div className="text-[10px] font-semibold text-primary/50 text-start">
                Full Stack Developer
              </div>
            </div>
          )}
        </Button>
        {sidebarNav.map(({ title, items }, idx) => (
          <div key={`group_${idx}`}>
            {idx !== 0 && <Separator className="my-2" />}
            {isExpanded && title && (
              <div
                className={cn(
                  'text-xs font-semibold text-app-primary mb-2',
                  'dark:text-primary'
                )}
              >
                {title}
              </div>
            )}
            <nav>
              <ul>
                {items.map(({ href, Icon, title }) => (
                  <SidebarItemLink
                    href={href}
                    // isActive={pathname === href}
                    isActive={false}
                    icon={
                      <Icon
                        className={cn(isExpanded ? 'h-4 w-4' : 'h-5 w-5')}
                      />
                    }
                    isExpanded={isExpanded}
                    title={title}
                    key={href}
                  />
                ))}
              </ul>
            </nav>
          </div>
        ))}
      </div>
    </Sidebar>
  )
}
