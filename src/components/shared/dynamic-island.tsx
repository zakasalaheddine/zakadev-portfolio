import { Link } from '@tanstack/react-router'
import { Icons } from './icons'

const ButtonLinkClassName =
  'flex items-center justify-center aspect-square w-7 relative rounded-full bg-[#404040] border border-white/10 text-white/40 transition-colors duration-200 ease-in-out'

export default function DynamicIsland() {
  return (
    <div className="fixed left-1/2 top-6 z-[9001] flex flex-col items-center justify-start gap-6 h-13 p-3 overflow-hidden rounded-[20px] shadow-[0_0_0_1px_rgba(41,41,41,0.64)] bg-gradient-to-r  from-[#181818] to-[#141414] transition-[height] duration-500  -translate-x-1/2">
      <div className="flex items-start flex-1 gap-6 justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center h-7 w-7 ">
            <img
              src="/assets/animated-me.png"
              alt="logo"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <p className="text-xs font-medium leading-4 text-white whitespace-nowrap">
            ZAKA SalahEddine
          </p>
        </Link>
        <div className="flex items-center gap-2">
          <Link to="/" className={ButtonLinkClassName}>
            <Icons.Home className="size-4" />
          </Link>
          <Link to="/components" className={ButtonLinkClassName}>
            <Icons.Blocks className="size-4" />
          </Link>
          <Link to="/ai-automations" className={ButtonLinkClassName}>
            <Icons.Zap className="size-4" />
          </Link>
          <a
            href="mailto:zakasalaheddine@gmail.com"
            className={ButtonLinkClassName}
          >
            <Icons.Mail className="size-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
