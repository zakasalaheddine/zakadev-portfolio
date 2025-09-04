import { Link } from '@tanstack/react-router'
import { Icons } from './icons'
import { cn } from '@/lib/utils'

const portfolioItems = [
  {
    id: 1,
    title: 'UI Components',
    link: '/components',
		image: '/assets/components.png',
    description:
      'Reusable React and Tailwind CSS components for fast, consistent UI development.',
    icon: <Icons.Code2 className="w-8 h-8" />,
    bgColor: 'bg-green-100',
    textColor: 'text-green-900',
    iconColor: 'text-green-700',
    size: 'col-span-2 row-span-1'
  },
  {
    id: 2,
    title: 'Templates',
    link: '/templates',
		image: '/assets/templates.png',
    description:
      'Ready-to-use, responsive web templates built with modern frameworks.',
    icon: <Icons.Palette className="w-8 h-8" />,
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-900',
    iconColor: 'text-purple-700',
    size: 'col-span-2 row-span-1'
  },
  {
    id: 3,
    title: 'AI Automation Agents',
    link: '/ai-automations',
		image: '/assets/ai-automations.png',
    description:
      'AI-powered automation to streamline workflows and boost productivity.',
    icon: <Icons.Bot className="w-8 h-8" />,
    bgColor: 'bg-slate-800',
    textColor: 'text-white',
    iconColor: 'text-blue-400',
    size: 'col-span-2 row-span-1'
  },
  {
    id: 4,
    title: 'Services',
    link: '/services',
		image: '/assets/services.png',
    description:
      'Full-stack development, UI/UX design, and consulting for startups and enterprises seeking expert guidance.',
    icon: <Icons.Settings className="w-8 h-8" />,
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-900',
    iconColor: 'text-gray-700',
    size: 'col-span-3 row-span-1'
  },
  {
    id: 5,
    title: 'Store',
    link: '/store',
		image: '/assets/store.png',
    description:
      'Digital products, tools, and resources to accelerate your projects and empower your workflow, all in one place.',
    icon: <Icons.ShoppingBag className="w-8 h-8" />,
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-900',
    iconColor: 'text-blue-700',
    size: 'col-span-3 row-span-1'
  }
]


export default function PortfolioItemsGrid() {
  return (
    <div className="grid grid-cols-6 grid-rows-2 gap-4 w-full mx-auto p-6">
      {portfolioItems.map((item) => (
        <Link
          to={item.link}
          key={item.id}
          className={cn(
            `bg-white border border-gray-200 rounded-2xl p-2 relative overflow-hidden hover:scale-[1.02] transition-transform duration-200 cursor-pointer group shadow-md flex flex-col gap-4 justify-between`,
            item.size
          )}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[280px] object-cover rounded-2xl border border-gray-200/50 shadow-xs"
          />
          <div className="flex flex-col p-2">
            <h3 className="mb-3 leading-tight text-xl font-bold">
              {item.title}
            </h3>

            <p className="text-xs opacity-80 leading-tight font-medium">
              {item.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}
