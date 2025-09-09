import CardItem from '@/components/shared/card-item'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <main className="flex flex-col space-y-4">
      <section className="flex flex-col space-y-4 max-w-[1200px] mx-auto p-4">
        <h1 className="font-bold text-2xl md:text-6xl font-primary">
          <span className="block">Crafting</span>
          <span className="block">Powerful Web Solutions</span>
          <span className="block">& Front-End Experiences</span>
        </h1>
        <p className="font-semibold text-app-primary/60 text-xs md:text-base max-w-[500px]">
          I'm ZAKA SALAH EDDINE, a full-stack engineer with a passion for
          building web applications that scale and creating content for
          developers. Let’s build something extraordinary together.
        </p>
      </section>
      <section className="max-w-[1200px] mx-auto p-4 columns-1  md:columns-2 lg:columns-3 gap-4">
        <CardItem
          title="Components UI"
          description="Reusable React and Tailwind CSS components for fast development."
          image="/assets/components-2.png"
          alt="Components UI"
          link="/components"
        />
        <CardItem
          title="Ai Automations"
          description="AI-powered automation to streamline workflows and boost productivity."
          image="/assets/ai-automations-2.png"
          alt="Ai Automations"
          link="/ai-automations"
        />
        <CardItem
          title="Templates"
          description="Ready-to-use, responsive web templates built with modern frameworks."
          image="/assets/templates-2.png"
          alt="Templates"
          link="/templates"
        />
      </section>
    </main>
  )
}
