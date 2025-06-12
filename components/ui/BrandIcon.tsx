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
import NodeJS from '~/icons/nodejs.svg'
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

export const BrandIconsMap = {
  React,
  Remix,
  Git,
  GitHub,
  Java,
  NodeJS,
  Javascript,
  Typescript,
  Bash,
  Liquid,
  Markdown,
  NextJS,
  TailwindCSS,
  Prisma,
  Umami,
  Vercel,
  Railway,
  Spotify,
  NestJS,
  Docker,
  PostgreSQL,
  MongoDB,
  SpringBoot,
  AWS,
}

export type BrandIconType = keyof typeof BrandIconsMap

const BrandIcon = (props: { type: keyof typeof BrandIconsMap; className?: string }) => {
  const { type, className } = props

  const Icon = BrandIconsMap[type]

  if (!Icon) {
    return <div>Missing icon for {type}.</div>
  }

  return (
    <Icon
      className={className || 'h-16 w-16 lg:h-14 lg:w-14 xl:h-20 xl:w-20'}
      fill="currentColor"
    />
  )
}

export default BrandIcon
