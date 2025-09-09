import CardItem from '@/components/shared/card-item'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem
} from '@/components/ui/kibo-ui/marquee'
import { Separator } from '@/components/ui/separator'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent
})

const cardsLinks = [
  {
    title: 'Components UI',
    description:
      'Reusable React and Tailwind CSS components for fast development.',
    image: '/assets/components-2.png',
    alt: 'Components UI',
    link: '/components'
  },
  {
    title: 'Templates',
    description:
      'Ready-to-use, responsive web templates built with modern frameworks.',
    image: '/assets/templates-2.png',
    alt: 'Templates',
    link: '/templates'
  },
  {
    title: 'AI Automations',
    description:
      'AI-powered automation to streamline workflows and boost productivity.',
    image: '/assets/ai-automations-2.png',
    alt: 'AI Automations',
    link: '/ai-automations'
  }
]
const resume = [
  {
    name: 'Google',
    position: 'Head of Engineering',
    date: '2020 - 2021',
    image:
      'https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1fa3_google-icon-simplefolio-x-webflow-template.svg'
  },
  {
    name: 'Google',
    position: 'Head of Engineering',
    date: '2020 - 2021',
    image:
      'https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1fa3_google-icon-simplefolio-x-webflow-template.svg'
  },
  {
    name: 'Google',
    position: 'Head of Engineering',
    date: '2020 - 2021',
    image:
      'https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1fa3_google-icon-simplefolio-x-webflow-template.svg'
  },
  {
    name: 'Google',
    position: 'Head of Engineering',
    date: '2020 - 2021',
    image:
      'https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1fa3_google-icon-simplefolio-x-webflow-template.svg'
  }
]

const stackTech = [
  {
    name: 'React',
    image:
      'https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1fa3_google-icon-simplefolio-x-webflow-template.svg'
  },
  {
    name: 'React',
    image:
      'https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1fa3_google-icon-simplefolio-x-webflow-template.svg'
  },
  {
    name: 'React',
    image:
      'https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1fa3_google-icon-simplefolio-x-webflow-template.svg'
  },
  {
    name: 'React',
    image:
      'https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1fa3_google-icon-simplefolio-x-webflow-template.svg'
  },
  {
    name: 'React',
    image:
      'https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1fa3_google-icon-simplefolio-x-webflow-template.svg'
  },
  {
    name: 'React',
    image:
      'https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1fa3_google-icon-simplefolio-x-webflow-template.svg'
  },
  {
    name: 'React',
    image:
      'https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1fa3_google-icon-simplefolio-x-webflow-template.svg'
  },
  {
    name: 'React',
    image:
      'https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1fa3_google-icon-simplefolio-x-webflow-template.svg'
  }
]

const testimonials = [
  {
    name: 'John Doe',
    position: 'CEO',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    image:
      'https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1fa3_google-icon-simplefolio-x-webflow-template.svg'
  },
  {
    name: 'John Doe',
    position: 'CEO',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    image:
      'https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1fa3_google-icon-simplefolio-x-webflow-template.svg'
  }
]

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
        {cardsLinks.map((card) => (
          <CardItem
            key={card.title}
            title={card.title}
            description={card.description}
            image={card.image}
            alt={card.alt}
            link={card.link}
          />
        ))}
      </section>
      <section className="max-w-[1200px] p-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2  gap-4 w-full">
          <div className="flex flex-col gap-4 bg-white border border-sidebar rounded-2xl p-10 w-full row-span-2">
            <h2 className="font-bold text-2xl font-primary">
              Where I've Worked
            </h2>
            <div className="h-4" />
            {resume.map((item, idx) => (
              <>
                <div className="flex items-center gap-4" key={idx}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded object-cover border border-sidebar shadow-md"
                  />
                  <div className="flex flex-col flex-1">
                    <p className="font-bold">{item.name}</p>
                    <div className="flex items-center justify-between gap-2">
                      <p className="">{item.position}</p>
                      <p className="text-sm font-light text-primary/60">
                        {item.date}
                      </p>
                    </div>
                  </div>
                </div>
                <Separator className="my-2" />
              </>
            ))}
          </div>
          <div className="flex flex-col gap-4 bg-white border border-sidebar rounded-2xl p-10 w-full">
            <h2 className="font-bold text-2xl font-primary">What I Use</h2>
            <div className="flex size-full items-center justify-center bg-background">
              <Marquee>
                <MarqueeFade side="left" />
                <MarqueeFade side="right" />
                <MarqueeContent>
                  {stackTech.map((item, index) => (
                    <MarqueeItem
                      className="h-32 w-32 flex items-center justify-center"
                      key={index}
                    >
                      <img
                        alt={item.name}
                        className="overflow-hidden rounded object-cover border border-sidebar shadow-md"
                        src={item.image}
                      />
                    </MarqueeItem>
                  ))}
                </MarqueeContent>
              </Marquee>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-white border border-sidebar rounded-2xl p-10 w-full">
            <h2 className="font-bold text-2xl font-primary">What Others Say</h2>
            <Carousel opts={{ loop: true }}>
              <CarouselContent className="px-2">
                {testimonials.map((item, idx) => (
                  <CarouselItem
                    key={idx}
                    className="flex flex-col gap-10 bg-sidebar rounded-2xl px-5 py-3 mx-2"
                  >
                    <p className="text-lg">{item.content}</p>
                    <div className="flex items-center gap-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="size-10 rounded object-cover border border-sidebar shadow-md"
                      />
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm font-light text-primary/60">
                        {item.position}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
    </main>
  )
}
