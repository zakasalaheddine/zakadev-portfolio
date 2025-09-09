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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { cardsLinks, resume, stackTech, testimonials } from '@/constants/home'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent
})





function RouteComponent() {
  return (
    <main className="flex flex-col space-y-4">
      <section className="flex flex-col space-y-4 max-w-[1200px] mx-auto p-4">
        <h1 className="font-bold text-2xl md:text-6xl font-primary font-display">
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
            <h2 className="font-bold text-2xl font-primary font-display">
              Where I've Worked
            </h2>
            <div className="h-4" />
            {resume.map((item, idx) => (
              <>
                <div className="flex items-center gap-4" key={idx}>
                  <div className="size-10 rounded p-2 border border-sidebar shadow-md">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover size-full"
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <p className="font-bold">{item.name}</p>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-primary/50">{item.position}</p>
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
            <h2 className="font-bold text-2xl font-primary font-display">
              What I Use
            </h2>
            <div className="flex size-full items-center justify-center bg-background">
              <Marquee>
                <MarqueeFade side="left" />
                <MarqueeFade side="right" />
                <MarqueeContent>
                  {stackTech.map((item, index) => (
                    <MarqueeItem
                      className="h-20 w-20 flex items-center justify-center p-3 bg-white border border-sidebar rounded-2xl"
                      key={index}
                    >
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <img
                            alt={item}
                            className="overflow-hidden rounded object-cover"
                            src={`/assets/tech/${item}.png`}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-sm">{item}</p>
                        </TooltipContent>
                      </Tooltip>
                    </MarqueeItem>
                  ))}
                </MarqueeContent>
              </Marquee>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-white border border-sidebar rounded-2xl p-10 w-full">
            <h2 className="font-bold text-2xl font-primary font-display">
              What Others Say
            </h2>
            <Carousel opts={{ loop: true }}>
              <CarouselContent className="px-2">
                {testimonials.map((item, idx) => (
                  <CarouselItem
                    key={idx}
                    className="flex flex-col gap-10 rounded-2xl px-5 py-3 mx-2 bg-sidebar items-center justify-between"
                  >
                    <blockquote className="text-lg italic tracking-wider pt-2 text-center flex-1 flex items-center justify-center">
                      "{item.content}"
                    </blockquote>
                    <div className="flex items-center gap-2">
                      <div className="size-10 rounded-md p-2 border border-sidebar bg-white shadow-md">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="object-cover size-full"
                        />
                      </div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm font-light text-primary/60">
                        ({item.location})
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
