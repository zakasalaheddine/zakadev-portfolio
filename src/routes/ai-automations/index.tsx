import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ai-automations/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/ai-automations/"!</div>
}
