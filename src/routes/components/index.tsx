import ComponentCard from '@/components/shared/component-card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CATEGORIES, TAGS } from '@/constants/components'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/components/')({
  component: ComponentsPage
})

function ComponentsPage() {
  return (
    <main className="flex h-full w-full flex-col lg:flex-row">
      <aside className="hidden lg:block w-1/4 border-r border-gray-200 p-2">
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-lg font-display text-center">
            Categories
          </h4>
          <Separator className="my-2" />
          <div className="columns-1 md:columns-2 lg:columns-3 gap-2">
            {CATEGORIES.map((category) => (
              <div key={category.slug} className="mb-2 w-full">
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-300 hover:border-gray-400 hover:bg-black hover:text-white w-full"
                >
                  <Link
                    to="/components"
                    search={(prev) => ({ ...prev, category: category.slug })}
                    activeProps={{ className: 'bg-black text-white' }}
                  >
                    {category.name}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <h4 className="font-bold text-lg font-display text-center">Tags</h4>
          <Separator className="my-2" />
          <div className="columns-1 md:columns-2 lg:columns-3 gap-2">
            {TAGS.map((tag) => (
              <div key={tag.slug} className="mb-2 w-full">
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-300 hover:border-gray-400 hover:bg-black hover:text-white w-full"
                >
                  <Link
                    to="/components"
                    search={(prev) => ({ ...prev, tag: tag.slug })}
                    activeProps={{ className: 'bg-black text-white' }}
                  >
                    {tag.name}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </aside>
      <section className="w-full p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <ComponentCard
            key={index}
            link="/v1/skiper71"
            title="Image reveal"
            image="https://cdn.skiper-ui.com/video/v1/thumb/skiper71.webp"
            video="https://cdn.skiper-ui.com/video/v1/skiper71.mp4"
          />
        ))}
      </section>
    </main>
  )
}

// const ComponentCard = ({link}: {link: string,}) => {
//   const videoRef= useRef<HTMLVideoElement>(null);
//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = 2;
//     }
//   }, []);
//   return (
//     <div className="bg-sidebar border-sidebar hover:bg-sidebar group relative flex cursor-pointer flex-col overflow-hidden rounded-[20px] border p-3 h-[280px]">
//       <a
//         aria-label="Image reveal"
//         className="relative w-full flex-1 overflow-hidden"
//         href="/v1/skiper71"
//       >
//         <img
//           className="border-sidebar h-full w-full rounded-2xl border object-cover"
//           alt=""
//           loading="lazy"
//           src="https://cdn.skiper-ui.com/video/v1/thumb/skiper71.webp"
//         />
//         <video
//           className="border-sidebar absolute top-0 h-full w-full rounded-2xl border object-cover opacity-0 group-hover:opacity-100"
//           playsInline
//           ref={videoRef}
//           preload="metadata"
//           muted
//           autoPlay
//           loop

//         >
//           <source src="https://cdn.skiper-ui.com/video/v1/skiper71.mp4"></source>
//         </video>
//       </a>
//       <p className="pl-2 pt-2 font-medium">Image reveal</p>
//     </div>
//   )
// }
