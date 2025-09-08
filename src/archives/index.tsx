import LeafletLocation from '@/components/map'
import { Icons } from '@/components/shared/icons'
import LocationTimeWeather from '@/components/shared/location-time-weather'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { AvatarStack } from '@/components/ui/avatar-stack'
import { cn } from '@/lib/utils'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App
})

const bentoCardClassName =
  'max-h-[300px] bg-gradient-to-r from-[#181818] to-[#141414] text-white rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-200 cursor-pointer'

const BentoCardLines = () => (
  <>
    <div className="absolute bottom-0 right-3 h-full border-1 border-white/20" />
    <div className="absolute bottom-0 left-3 h-full border-1 border-white/20" />
    <div className="absolute right-0 bottom-3 w-full border-1 border-white/20" />
    <div className="absolute right-0 top-3 w-full border-1 border-white/20" />
  </>
)
function App() {
  return (
    <section className="flex items-center justify-start pt-10 flex-col gap-10 max-w-[1200px] mx-auto p-4">
      <div className="grid md:grid-cols-12 grid-cols-1 md:grid-rows-12 gap-4 w-full h-full">
        <div
          className={cn(bentoCardClassName, 'col-span-2 row-span-4 relative')}
        >
          <div className="flex flex-col justify-between p-5 h-full">
            <div className="flex flex-col justify-center items-center gap-3">
              <div className="text-xs font-bold text-center">
                Trusted by 10+ clients
              </div>
              <AvatarStack size={30}>
                <Avatar>
                  <AvatarImage src="https://framerusercontent.com/images/SOKwGFvXzUP71JND2YaWIFxgq8.png?width=400&height=400" />
                  <AvatarFallback>HB</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://framerusercontent.com/images/P2urYQ9CUcDpXMLY9TQMx6TzI.png?width=400&height=400" />
                  <AvatarFallback>HB</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://framerusercontent.com/images/GEq4g9dGPfZtRfAuggG9UNZDNQg.png?width=640&height=640" />
                  <AvatarFallback>HB</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/haydenbleasel.png" />
                  <AvatarFallback>HB</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/haydenbleasel.png" />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
              </AvatarStack>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-6xl font-bold">99%</span>
              <span className="text-sm font-medium text-white/50">
                Client Satisfaction
              </span>
            </div>
          </div>
          <BentoCardLines />
        </div>
        <div
          className={cn(bentoCardClassName, 'col-span-4 row-span-4 relative')}
        >
          <div className="p-5 h-full relative z-10">
            <img
              src="/assets/components.png"
              alt="ZAKADEV COMPONENTS"
              className="h-3/4 w-auto absolute -bottom-9 left-1/2 -translate-x-1/2 rounded-2xl"
            />
            <h3 className="text-2xl font-bold">Components</h3>
            <p className="text-sm font-medium text-white/50">
              Reusable React and Tailwind CSS components for fast, consistent UI
              development.
            </p>
          </div>
          <BentoCardLines />
        </div>
        <div
          className={cn(bentoCardClassName, 'col-span-4 row-span-6 relative')}
        >
          <div className="p-5 h-full relative z-10">
            <img
              src="/assets/ai-automations.png"
              alt="ZAKADEV AI AUTOMATIONS"
              className="h-3/4 w-auto object-cover absolute -bottom-9 -right-10 rounded-2xl"
            />
            <h3 className="text-2xl font-bold">AI Automations</h3>
            <p className="text-sm font-medium text-white/50">
              AI-powered automation to streamline workflows and boost
              productivity.
            </p>
          </div>
          <BentoCardLines />
        </div>
        <div
          className={cn(
            bentoCardClassName,
            'col-span-2 row-span-2 bg-transparent'
          )}
        >
          <div className=" h-full relative">
            <img
              src="/assets/store.png"
              alt="ZAKADEV TEMPLATES"
              className="h-full w-auto object-cover"
            />
          </div>
        </div>
        <div
          className={cn(bentoCardClassName, 'col-span-2 row-span-4 relative')}
        >
          <BentoCardLines />
          <LocationTimeWeather />
        </div>

        <div className={cn('col-span-4 row-span-6')}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full w-full">
            <div
              className={cn(
                bentoCardClassName,
                'col-span-1 row-span-1 flex items-center justify-center relative'
              )}
            >
              <Icons.XTwitter className="size-3/5 text-white" />
              <BentoCardLines />
            </div>
            <div
              className={cn(
                bentoCardClassName,
                'col-span-1 row-span-1 flex items-center justify-center relative'
              )}
            >
              <Icons.Linkedin className="size-3/5 text-white" />
              <BentoCardLines />
            </div>
            <div
              className={cn(
                bentoCardClassName,
                'col-span-1 row-span-1 flex items-center justify-center relative'
              )}
            >
              <Icons.Mail className="size-3/5 text-white" />
              <BentoCardLines />
            </div>
            <div
              className={cn(
                bentoCardClassName,
                'col-span-1 row-span-1 flex items-center justify-center relative'
              )}
            >
              <Icons.Github className="size-3/5 text-white" />
              <BentoCardLines />
            </div>
          </div>
        </div>
        <div className={cn(bentoCardClassName, 'col-span-2 row-span-2')}>
          <img
            src="/assets/memoji.png"
            alt="ZAKA SALAH EDDINE MEMOJI"
            className="w-full h-full object-cover"
          />
        </div>
        <div className={cn(bentoCardClassName, 'col-span-3 row-span-4')}>
          <LeafletLocation />
        </div>
        <div
          className={cn(bentoCardClassName, 'col-span-5 row-span-4 relative')}
        >
          <div className="p-5 h-full relative">
            <img
              src="/assets/services.png"
              alt="ZAKADEV SERVICES"
              className="h-3/4 w-auto object-cover absolute -bottom-9 left-1/2 -translate-x-1/2 rounded-2xl"
            />
            <h3 className="text-2xl font-bold">Services</h3>
            <p className="text-sm font-medium text-white/50">
              Full-stack development, UI/UX design, and consulting for startups
              and enterprises seeking expert guidance.
            </p>
          </div>
          <BentoCardLines />
        </div>
      </div>
    </section>
  
  )
}
