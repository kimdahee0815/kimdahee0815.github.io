import type { BrandIconType } from '~/components/ui/BrandIcon'

type PopularTag = {
  href: string
  iconType: BrandIconType
  slug: string
  title: string
}

const popularTags: PopularTag[] = [
  {
    href: '/tags/javascript',
    iconType: 'Javascript',
    slug: 'javascript',
    title: 'Javascript',
  },
  {
    href: '/tags/typescript',
    iconType: 'Typescript',
    slug: 'typescript',
    title: 'Typescript',
  },
  {
    href: '/tags/java',
    iconType: 'Java',
    slug: 'java',
    title: 'Java',
  },
  {
    href: '/tags/react',
    iconType: 'React',
    slug: 'react',
    title: 'React',
  },
  {
    href: '/tags/nextjs',
    iconType: 'NextJS',
    slug: 'nextjs',
    title: 'NextJS',
  },
  {
    href: '/tags/nodejs',
    iconType: 'NodeJS',
    slug: 'nodejs',
    title: 'NodeJS',
  },
  {
    href: '/tags/springboot',
    iconType: 'SpringBoot',
    slug: 'springboot',
    title: 'SpringBoot',
  },
  {
    href: '/tags/nestjs',
    iconType: 'NestJS',
    slug: 'nestjs',
    title: 'NestJS',
  },
  {
    href: '/tags/mongodb',
    iconType: 'MongoDB',
    slug: 'mongodb',
    title: 'MongoDB',
  },
  {
    href: '/tags/postgresql',
    iconType: 'PostgreSQL',
    slug: 'postgresql',
    title: 'PostgreSQL',
  },
  {
    href: '/tags/devops',
    iconType: 'Docker',
    slug: 'devops',
    title: 'Devops',
  },
  {
    href: '/tags/aws',
    iconType: 'AWS',
    slug: 'aws',
    title: 'AWS',
  },
]

export default popularTags
