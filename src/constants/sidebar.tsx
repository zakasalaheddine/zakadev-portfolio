import { Icons } from '@/components/shared/icons'

export const sidebarNav = [
  {
    items: [
      {
        title: 'Explore',
        href: '/',
        Icon: Icons.Compass
      },
      {
        title: 'Services',
        href: '/services',
        Icon: Icons.Palette
      },
      {
        title: 'About',
        href: '/about',
        Icon: Icons.PersonStanding
      }
    ]
  },
  {
    title: 'Ressources',
    items: [
      {
        title: 'Components',
        href: '/components',
        Icon: Icons.Blocks
      },
      {
        title: 'AI Automations',
        href: '/ai-automations',
        Icon: Icons.Bot
      },
      {
        title: 'Templates',
        href: '/templates',
        Icon: Icons.Package
      },
      {
        title: 'Thoughts',
        href: '/thoughts',
        Icon: Icons.Mailbox
      }
    ]
  },
  {
    title: 'Connect',
    items: [
      {
        title: 'Contact',
        href: '/contact',
        Icon: Icons.Contact
      },
      {
        title: 'GitHub',
        href: 'https://github.com/zakasalaheddine',
        Icon: Icons.Github
      },
      {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/zakasalaheddine/',
        Icon: Icons.Linkedin
      },
      {
        title: 'Twitter',
        href: 'https://x.com/zakasalaheddine',
        Icon: Icons.XTwitter
      },
    ]
  }
]
