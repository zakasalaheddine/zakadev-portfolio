import { TanstackDevtools } from '@tanstack/react-devtools'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import appCss from '../styles.css?url'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/shared/app-sidebar'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        title: 'ZakaDev'
      }
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss
      }
    ]
  }),

  shellComponent: RootDocument
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <SidebarProvider
          style={
            {
              '--sidebar-width': 'calc(var(--spacing) * 50)',
              '--header-height': 'calc(var(--spacing) * 12)'
            } as React.CSSProperties
          }
        >
          <AppSidebar variant="inset" />
          <SidebarInset className="p-2">{children}</SidebarInset>
        </SidebarProvider>
        <TanstackDevtools
          config={{
            position: 'bottom-left'
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />
            }
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
