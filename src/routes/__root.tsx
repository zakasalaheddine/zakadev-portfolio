import { TanstackDevtools } from '@tanstack/react-devtools'
import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router'
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

  shellComponent: RootDocument,
  notFoundComponent: NotFound
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
          <SidebarInset className="p-2 max-h-[calc(100vh-20px)] overflow-y-auto">{children}</SidebarInset>
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

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="font-bold text-2xl md:text-6xl font-primary font-display">Not Found</h1>
      <p className="text-sm text-primary/60">The page you are looking for does not exist.</p>
      <Link to="/" className="text-sm text-primary/60 underline">Go back to the home page</Link>
    </div>
  )
}