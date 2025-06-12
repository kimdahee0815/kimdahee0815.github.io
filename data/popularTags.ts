import type { BrandIconType } from '~/components/ui/BrandIcon'

type PopularTag = {
  href: string
  iconType: BrandIconType
  slug: string
  title: string
}

const popularTags: PopularTag[] = [
  {
    href: '/blog?tag=javascript',
    iconType: 'Javascript',
    slug: 'javascript',
    title: 'Javascript',
  },
  {
    href: '/blog?tag=typescript',
    iconType: 'Typescript',
    slug: 'typescript',
    title: 'Typescript',
  },
  {
    href: '/blog?tag=java',
    iconType: 'Java',
    slug: 'java',
    title: 'Java',
  },
  {
    href: '/blog?tag=react',
    iconType: 'React',
    slug: 'react',
    title: 'React',
  },
  {
    href: '/blog?tag=nextjs',
    iconType: 'NextJS',
    slug: 'nextjs',
    title: 'NextJS',
  },
  {
    href: '/blog?tag=nodejs',
    iconType: 'NodeJS',
    slug: 'nodejs',
    title: 'NodeJS',
  },
  {
    href: '/blog?tag=springboot',
    iconType: 'SpringBoot',
    slug: 'springboot',
    title: 'SpringBoot',
  },
  {
    href: '/blog?tag=nestjs',
    iconType: 'NestJS',
    slug: 'nestjs',
    title: 'NestJS',
  },
  {
    href: '/blog?tag=mongodb',
    iconType: 'MongoDB',
    slug: 'mongodb',
    title: 'MongoDB',
  },
  {
    href: '/blog?tag=postgresql',
    iconType: 'PostgreSQL',
    slug: 'postgresql',
    title: 'PostgreSQL',
  },
  {
    href: '/blog?tag=devops',
    iconType: 'Docker',
    slug: 'devops',
    title: 'Devops',
  },
  {
    href: '/blog?tag=aws',
    iconType: 'AWS',
    slug: 'aws',
    title: 'AWS',
  },
]

export default popularTags
