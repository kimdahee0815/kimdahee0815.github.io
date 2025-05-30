import Link from '~/components/ui/Link'
import Bash from '~/icons/bash.svg'
import CSS from '~/icons/css.svg'
import AWS from '~/icons/aws.svg'
import SendGrid from '~/icons/sendgrid.svg'
import Exercism from '~/icons/exercism.svg'
import Git from '~/icons/git.svg'
import GitHub from '~/icons/github.svg'
import GitHubOAuth from '~/icons/githubOAuth.svg'
import Pug from '~/icons/pug.svg'
import Redis from '~/icons/redis.svg'
import Docker from '~/icons/docker.svg'
import Goodreads from '~/icons/goodreads.svg'
import HeadlessUI from '~/icons/headlessui.svg'
import Hydrogen from '~/icons/hydrogen.svg'
import IMBb from '~/icons/imdb.svg'
import Java from '~/icons/java.svg'
import Javascript from '~/icons/javascript.svg'
import JWT from '~/icons/jsonwebtokens.svg'
import Koa from '~/icons/koa.svg'
import Liquid from '~/icons/liquid.svg'
import Markdown from '~/icons/markdown.svg'
import MongoDB from '~/icons/mongodb.svg'
import MySQL from '~/icons/mysql.svg'
import PostgreSQL from '~/icons/postgresql.svg'
import NextJS from '~/icons/nextjs.svg'
import NestJS from '~/icons/nestjs.svg'
import Node from '~/icons/nodejs.svg'
import Npm from '~/icons/npm.svg'
import Fly from '~/icons/fly.svg'
import OpenAI from '~/icons/openai.svg'
import Picsum from '~/icons/picsum.svg'
import Prisma from '~/icons/prisma.svg'
import Pygame from '~/icons/pygame.svg'
import Python from '~/icons/python.svg'
import Railway from '~/icons/railway.svg'
import React from '~/icons/react.svg'
import Remix from '~/icons/remix.svg'
import RottenTomatoes from '~/icons/rottentomatoes.svg'
import SemanticUI from '~/icons/semanticui.svg'
import Shopify from '~/icons/shopify.svg'
import Spotify from '~/icons/spotify.svg'
import TailwindCSS from '~/icons/tailwind.svg'
import Turborepo from '~/icons/turborepo.svg'
import Typescript from '~/icons/typescript.svg'
import Umami from '~/icons/umami.svg'
import Vercel from '~/icons/vercel.svg'
import Webpack from '~/icons/webpack.svg'
import VSCode from '~/icons/vscode.svg'
import Drizzle from '~/icons/drizzle.svg'
import Pnpm from '~/icons/pnpm.svg'
import Env from '~/icons/env.svg'
import Html from '~/icons/html5.svg'
import Postcss from '~/icons/postcss.svg'
import Commitlint from '~/icons/commitlint.svg'
import Express from '~/icons/express.svg'
import Stripe from '~/icons/stripe.svg'
import Mapbox from '~/icons/mapbox.svg'
import Koyeb from '~/icons/koyeb.svg'
import SMTP from '~/icons/smtp.svg'
import PortOne from '~/icons/portone.svg'
import Netlify from '~/icons/netlify.svg'
import SpringBoot from '~/icons/springboot.svg'
import Redux from '~/icons/redux.svg'
import Axios from '~/icons/axios.svg'
import Render from '~/icons/render.svg'
import Mongoose from '~/icons/mongoose.svg'
import Multer from '~/icons/multer.svg'

export let BrandsMap: Record<
  string,
  {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
    url?: string
  }
> = {
  Commitlint: {
    Icon: Commitlint,
  },
  Html: {
    Icon: Html,
  },
  HTML: {
    Icon: Html,
  },
  Postcss: {
    Icon: Postcss,
  },
  Env: {
    Icon: Env,
  },
  React: {
    Icon: React,
    url: 'https://reactjs.org',
  },
  Drizzle: {
    Icon: Drizzle,
    url: 'https://orm.drizzle.team/',
  },
  Goodreads: {
    Icon: Goodreads,
    url: 'https://www.goodreads.com/',
  },
  Remix: {
    Icon: Remix,
    url: 'https://remix.run',
  },
  Git: {
    Icon: Git,
    url: 'https://git-scm.com',
  },
  GitHub: {
    Icon: GitHub,
    url: 'https://github.com',
  },
  AWSS3: {
    Icon: AWS,
    url: 'https://aws.amazon.com',
  },
  // Multer: {
  //   Icon: Multer,
  // },
  SendGrid: {
    Icon: SendGrid,
    url: 'https://app.sendgrid.com',
  },
  GitHubOAuth: {
    Icon: GitHubOAuth,
    url: 'https://docs.github.com/ko/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app',
  },
  PortOne: {
    Icon: PortOne,
    url: 'https://portone.io',
  },
  Fly: {
    Icon: Fly,
    url: 'https://fly.io',
  },
  Redis: {
    Icon: Redis,
    url: 'https://redis.io',
  },
  Pug: {
    Icon: Pug,
    url: 'https://pugjs.org',
  },
  Stripe: {
    Icon: Stripe,
    url: 'https://stripe.com',
  },
  Mapbox: {
    Icon: Mapbox,
    url: 'https://www.mapbox.com',
  },
  Koyeb: {
    Icon: Koyeb,
    url: 'https://www.koyeb.com',
  },
  Docker: {
    Icon: Docker,
    url: 'https://www.docker.com',
  },
  Express: {
    Icon: Express,
    url: 'https://expressjs.com',
  },
  Redux: {
    Icon: Redux,
    url: 'https://redux.js.org',
  },
  Mongoose: {
    Icon: Mongoose,
    url: 'https://mongoosejs.com',
  },
  Axios: {
    Icon: Axios,
    url: 'https://axios-http.com',
  },
  Render: {
    Icon: Render,
    url: 'https://render.com',
  },
  SMTP: {
    Icon: SMTP,
  },
  Javascript: {
    Icon: Javascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  JavaScript: {
    Icon: Javascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  Typescript: {
    Icon: Typescript,
    url: 'https://www.typescriptlang.org',
  },
  TypeScript: {
    Icon: Typescript,
    url: 'https://www.typescriptlang.org',
  },
  Netlify: {
    Icon: Netlify,
    url: 'https://www.netlify.com',
  },
  SpringBoot: {
    Icon: SpringBoot,
    url: 'https://spring.io/projects/spring-boot',
  },
  Node: {
    Icon: Node,
    url: 'https://nodejs.org',
  },
  Npm: {
    Icon: Npm,
    url: 'https://www.npmjs.com',
  },
  Bash: {
    Icon: Bash,
    url: 'https://www.gnu.org/software/bash',
  },
  Liquid: {
    Icon: Liquid,
    url: 'https://shopify.dev/docs/api/liquid',
  },
  Markdown: {
    Icon: Markdown,
    url: 'https://www.markdownguide.org',
  },
  NextJS: {
    Icon: NextJS,
    url: 'https://nextjs.org',
  },
  NestJS: {
    Icon: NestJS,
    url: 'https://nestjs.com',
  },
  TailwindCSS: {
    Icon: TailwindCSS,
    url: 'https://tailwindcss.com',
  },
  Prisma: {
    Icon: Prisma,
    url: 'https://www.prisma.io',
  },
  Umami: {
    Icon: Umami,
    url: 'https://umami.is',
  },
  Vercel: {
    Icon: Vercel,
    url: 'https://vercel.com',
  },
  Railway: {
    Icon: Railway,
    url: 'https://railway.app',
  },
  Spotify: {
    Icon: Spotify,
    url: 'https://spotify.com',
  },
  OpenAI: {
    Icon: OpenAI,
    url: 'https://openai.com',
  },
  Turborepo: {
    Icon: Turborepo,
    url: 'https://turborepo.org',
  },
  Hydrogen: {
    Icon: Hydrogen,
    url: 'https://hydrogen.shopify.dev/',
  },
  Shopify: {
    Icon: Shopify,
    url: 'https://shopify.dev',
  },
  Polaris: {
    Icon: Shopify,
    url: 'https://polaris.shopify.com/',
  },
  ThemeKit: {
    Icon: Shopify,
    url: 'https://shopify.dev/docs/storefronts/themes/tools/theme-kit',
  },
  HeadlessUI: {
    Icon: HeadlessUI,
    url: 'https://headlessui.dev',
  },
  Webpack: {
    Icon: Webpack,
    url: 'https://webpack.js.org',
  },
  KoaJS: {
    Icon: Koa,
    url: 'https://koajs.com',
  },
  JWT: {
    Icon: JWT,
    url: 'https://jwt.io',
  },
  MongoDB: {
    Icon: MongoDB,
    url: 'https://www.mongodb.com',
  },
  PostgreSQL: {
    Icon: PostgreSQL,
    url: 'https://www.postgresql.org',
  },
  CSS: {
    Icon: CSS,
    url: 'https://www.w3.org/Style/CSS/',
  },
  Python: {
    Icon: Python,
    url: 'https://www.python.org',
  },
  Pygame: {
    Icon: Pygame,
    url: 'https://www.pygame.org',
  },
  Exercism: {
    Icon: Exercism,
    url: 'https://exercism.org',
  },
  SemanticUI: {
    Icon: SemanticUI,
    url: 'https://semantic-ui.com',
  },
  Picsum: {
    Icon: Picsum,
    url: 'https://picsum.photos',
  },
  Java: {
    Icon: Java,
    url: 'https://java.com',
  },
  MySQL: {
    Icon: MySQL,
    url: 'https://mysql.com',
  },
  RottenTomatoes: {
    Icon: RottenTomatoes,
    url: 'https://www.rottentomatoes.com/',
  },
  IMBb: {
    Icon: IMBb,
    url: 'https://www.imdb.com/',
  },
  VSCode: {
    Icon: VSCode,
    url: 'https://code.visualstudio.com/',
  },
  Pnpm: {
    Icon: Pnpm,
    url: 'https://pnpm.io/',
  },
}

export function Brand(props: {
  name: keyof typeof BrandsMap
  as?: 'link' | 'icon'
  className?: string
  iconClassName?: string
}) {
  let { name, as = 'link', className, iconClassName } = props
  let { Icon, url } = BrandsMap[name] || {}

  if (!Icon) return <span className="hidden">Missing brand icon for {name}</span>

  if (as === 'icon' || !url) {
    return <Icon className={className} fill="currentColor" />
  }

  return (
    <Link href={`${url}?ref=letshackthemoon.com`} className={className}>
      <Icon className={iconClassName} fill="currentColor" />
    </Link>
  )
}
