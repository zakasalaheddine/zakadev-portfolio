import { useEffect, useRef } from 'react'

interface ComponentCardProps {
  link: string
  title: string
  image: string
  video?: string
}

export default function ComponentCard({
  link,
  title,
  image,
  video
}: ComponentCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2
    }
  }, [])
  return (
    <div className="bg-sidebar border-sidebar hover:bg-sidebar group relative flex cursor-pointer flex-col overflow-hidden rounded-[20px] border p-3 h-[280px]">
      <a
        aria-label="Image reveal"
        className="relative w-full flex-1 overflow-hidden"
        href={link}
      >
        <img
          className="border-sidebar h-full w-full rounded-2xl border object-cover"
          loading="lazy"
          alt={title}
          src={image}
        />
        {video && (
          <video
            className="border-sidebar absolute top-0 h-full w-full rounded-2xl border object-cover opacity-0 group-hover:opacity-100"
            playsInline
            ref={videoRef}
            preload="metadata"
            muted
            autoPlay
            loop
          >
            <source src={video}></source>
          </video>
        )}
      </a>
      <p className="pl-2 pt-2 font-medium">{title}</p>
    </div>
  )
}
