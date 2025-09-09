import { Link } from '@tanstack/react-router'
import { Icons } from './icons'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

interface CardItemProps {
  title: string
  description: string
  image: string
  alt: string
  link: string
}

export default function CardItem({
  title,
  description,
  image,
  alt,
  link
}: CardItemProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          to={link}
          aria-label={title}
          className="flex flex-col items-center bg-white border border-sidebar shadow p-2 pb-0 hover:shadow transition-shadow duration-200 rounded-2xl group cursor-pointer overflow-hidden mb-4"
        >
          <div className="flex items-center justify-between w-full p-4">
            <div className="bg-sidebar text-xs py-2 px-4 rounded-md">
              {link}
            </div>
            <div className="flex items-center justify-center bg-sidebar p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Icons.ArrowUpRightFromSquareIcon />
            </div>
          </div>
          <div className="w-full h-full">
            <img
              src={image}
              alt={alt}
              className="rounded-t-2xl max-w-4/5 mx-auto object-contain "
            />
          </div>
          {/* <div className="flex items-center justify-center bg-sidebar pt-10 rounded-t-2xl shadow-md max-w-3/4 relative">
            
          </div> */}
        </Link>
      </TooltipTrigger>

      <TooltipContent>
        <p className="text-sm">{description}</p>
      </TooltipContent>
    </Tooltip>
  )
}
