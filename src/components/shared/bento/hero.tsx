import { Link } from '@tanstack/react-router'
import { Icons } from '../icons'
import { motion } from 'motion/react'

const portfolioItems = [
  {
    id: 1,
    title: 'UI Components',
    link: '/components',
    description:
      'Reusable and customizable UI components built with React and Tailwind CSS. Perfect for rapid development and consistent design systems.',
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
    description:
      'Professional, responsive web templates ready for deployment. Built with modern frameworks and optimized for performance.',
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
    description:
      'Intelligent automation solutions powered by AI to streamline workflows and enhance productivity for businesses.',
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
    description:
      'Full-stack development, design consultation, and technical advisory services for startups and enterprises. From ideation to deployment, I help bring your vision to life with tailored solutions and expert guidance.',
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
    description:
      'Digital products, templates, and resources available for purchase. Everything you need to accelerate your projects, from design assets to productivity tools, all in one convenient store.',
    icon: <Icons.ShoppingBag className="w-8 h-8" />,
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-900',
    iconColor: 'text-blue-700',
    size: 'col-span-3 row-span-1'
  }
]

const GeometricPattern = ({ variant }: { variant: number }) => {
  const patterns = {
    1: (
      <motion.div
        className="absolute top-5 right-6 opacity-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ opacity: 0.4, scale: 1.1 }}
      >
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <motion.div
              className="w-4 h-4 border-2 border-current rotate-45"
              animate={{ rotate: [45, 225, 45] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            ></motion.div>
            <motion.div
              className="w-4 h-4 border-2 border-current rotate-45"
              animate={{ rotate: [45, 225, 45] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
                delay: 0.5
              }}
            ></motion.div>
          </div>
          <div className="flex gap-2">
            <motion.div
              className="w-4 h-4 border-2 border-current rotate-45"
              animate={{ rotate: [45, 225, 45] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
                delay: 1
              }}
            ></motion.div>
            <motion.div
              className="w-4 h-4 bg-current rotate-45"
              animate={{ rotate: [45, 225, 45] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
                delay: 1.5
              }}
            ></motion.div>
          </div>
        </div>
      </motion.div>
    ),
    2: (
      <motion.div
        className="absolute top-5 right-6 opacity-20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ opacity: 0.4 }}
      >
        <div className="flex flex-col gap-1">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
            >
              <motion.div
                className="h-0.5 bg-current"
                style={{ width: `${(i + 1) * 8}px` }}
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              ></motion.div>
              <motion.div
                className="w-2 h-2 bg-current rotate-45"
                animate={{ rotate: [45, 405, 45] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    ),
    3: (
      <motion.div
        className="absolute top-5 right-6 opacity-30"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileHover={{ opacity: 0.5, scale: 1.05 }}
      >
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-3 h-3 border border-current ${
                i === 4 ? 'bg-current' : ''
              }`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.5 + i * 0.05,
                type: 'spring',
                stiffness: 200
              }}
              whileHover={{
                scale: 1.2,
                backgroundColor: i === 4 ? undefined : 'currentColor',
                opacity: 0.8
              }}
            ></motion.div>
          ))}
        </div>
      </motion.div>
    ),
    4: (
      <motion.div
        className="absolute top-5 right-6 opacity-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        whileHover={{ opacity: 0.4 }}
      >
        <div className="relative">
          <motion.div
            className="w-8 h-0.5 bg-current"
            animate={{ scaleX: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
          <motion.div
            className="w-6 h-0.5 bg-current mt-2"
            animate={{ scaleX: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          ></motion.div>
          <motion.div
            className="w-4 h-0.5 bg-current mt-2"
            animate={{ scaleX: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          ></motion.div>
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 border border-current"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          ></motion.div>
        </div>
      </motion.div>
    ),
    5: (
      <motion.div
        className="absolute top-5 right-6 opacity-20"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 0.2, scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        whileHover={{ opacity: 0.4, scale: 1.1 }}
      >
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 border-2 border-current rotate-45"
                animate={{
                  rotate: [45, 225, 45],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.2
                }}
              ></motion.div>
            ))}
          </div>
          <div className="flex gap-2">
            <motion.div
              className="w-3 h-3 border-2 border-current rotate-45"
              animate={{
                rotate: [45, 225, 45],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.6
              }}
            ></motion.div>
            <motion.div
              className="w-3 h-3 bg-current rotate-45"
              animate={{
                rotate: [45, 225, 45],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.8
              }}
            ></motion.div>
            <motion.div
              className="w-3 h-3 border-2 border-current rotate-45"
              animate={{
                rotate: [45, 225, 45],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}
            ></motion.div>
          </div>
        </div>
      </motion.div>
    )
  }

  return patterns[variant as keyof typeof patterns] || null
}

export default function BentoHero() {
  return (
    <div className="grid grid-cols-6 grid-rows-2 gap-4 w-full max-w-6xl mx-auto p-6 h-[500px]">
      {portfolioItems.map((item) => (
        <Link
          to={item.link}
          key={item.id}
          className={`
            ${item.bgColor} ${item.textColor} ${item.size}
            rounded-2xl p-6 relative overflow-hidden
            hover:scale-[1.02] transition-transform duration-200 cursor-pointer
            group
          `}
        >
          <div className="flex flex-col justify-between h-full">
            <GeometricPattern variant={item.id} />

            <h3 className="mb-3 leading-tight text-xl font-bold">
              {item.title}
            </h3>

            <p className="text-base opacity-80 leading-relaxed font-medium">
              {item.description}
            </p>
          </div>

          {/* <div className={item.iconColor}>
            <GeometricPattern variant={item.id} />
          </div> */}
        </Link>
      ))}
    </div>
  )
}
