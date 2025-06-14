import type { Author } from 'contentlayer/generated'
import type { ReactNode } from 'react'
import { CareerTimeline } from '~/components/author/career'
import { SocialAccounts } from '~/components/author/social-accounts'
import { ProfileCard } from '~/components/cards/profile'
import { Button } from '~/components/ui/button'
import { Container } from '~/components/ui/container'
import { Image } from '~/components/ui/Image'
import { PageHeader } from '~/components/ui/page-header'
import { Twemoji } from '~/components/ui/twemoji'
import { SITE_METADATA } from '~/data/site-metadata'

interface Props {
  children?: ReactNode
  content: Omit<Author, '_id' | '_raw' | 'body'>
}

export function AuthorLayout({ children }: Props) {
  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="About"
        description="Hey there! This is just a little bit about who I am, what I'm usually up to, and why I decided to start rambling on this blog. Think of it as a quick 'hi' from the person behind all these posts."
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-8 md:grid md:grid-cols-3">
        <div className="pr-4">
          <ProfileCard />
        </div>
        <div className="md:col-span-2 md:pl-12 xl:pl-16">
          <div className="prose prose-lg dark:prose-invert">
            <div className="leading-10 min-[1080px]:text-[1.2rem] min-[1280px]:text-[1.35rem]">
              <h2 className="mt-0">
                Hey, Everyone! <Twemoji emoji="waving-hand" /> I'm Dahee Kim
              </h2>
              <p>
                A self-taught software engineer based in <strong>Incheon, South Korea</strong>. I'm
                deeply passionate about both <strong>frontend</strong> and <strong>backend</strong>{' '}
                development, and I also have a growing fascination with how artificial intelligence
                bridges the gap between human language and computers.
              </p>
              <p>
                I began coding in 2017, the year I started college. Through an unexpected turn of
                events(which can be very long to explain here 😅), I found myself curious about how
                computers work <em>from the ground up</em>. So I decided to pursue Computer Science
                alongside my main field of study. In 2023, I landed my first job as a Full-Stack
                Developer!
              </p>
              <p>
                I'm currently working on the <strong>ThinkStorm Project</strong> while diving deeper
                into <strong>Next.js</strong>, <strong>Nest.js</strong>, <strong>DevOps</strong>,
                and <strong>System Design</strong>.
              </p>
              <p>
                This blog is my digital lab where I document things I learn, build, and break.
                Writing helps me think clearly, solve problems better, and connect with other
                curious developers like you. 😊
              </p>
              <p>
                I would greatly appreciate any comments and thoughts on my posts{' '}
                <Twemoji emoji="sparkling-heart" />.
              </p>
            </div>
            <div>
              <div className="mb-2 mt-2 flex items-center justify-between text-[1.1rem] leading-[1.9rem] text-gray-700 dark:text-slate-400 sm:text-[1.15rem] sm:leading-[2rem] md:text-[1.25rem] md:leading-[2.2rem] lg:text-[1.4rem] lg:leading-[2.4rem]">
                <h2>My career</h2>
                <Button as="a" href="/static/resume.pdf" target="_blank">
                  <span>Resume</span>
                  <Twemoji emoji="page-facing-up" />
                </Button>
              </div>
              <CareerTimeline />
            </div>
            <div className="text-[1.1rem] leading-[1.9rem] text-gray-700 dark:text-slate-400 sm:text-[1.15rem] sm:leading-[2rem] md:text-[1.25rem] md:leading-[2.2rem] lg:text-[1.4rem] lg:leading-[2.4rem]">
              <h2>Tech stack</h2>
              <p>
                This blog is hosted on{' '}
                <a href="https://vercel.com/" target="_blank">
                  Vercel
                </a>
                , built with{' '}
                <a href="https://nextjs.org/" target="_blank">
                  Next.js
                </a>{' '}
                and{' '}
                <a href="https://tailwindcss.com/" target="_blank">
                  Tailwind CSS
                </a>{' '}
                using <strong>Tailwind Nextjs Starter Blog</strong>.
              </p>
              <p>
                See my{' '}
                <a href="https://github.com/kimdahee0815/kimdahee0815.github.io" target="_blank">
                  Github repository
                </a>{' '}
                for this blog.
              </p>
            </div>
            <div className="text-[1.1rem] leading-[1.9rem] text-gray-700 dark:text-slate-400 sm:text-[1.15rem] sm:leading-[2rem] md:text-[1.25rem] md:leading-[2.2rem] lg:text-[1.4rem] lg:leading-[2.4rem]">
              <h2>Assets</h2>
              <p>
                Most of the images in my blog are from{' '}
                <a href="https://unsplash.com/" target="_blank">
                  Unsplash
                </a>
                , gifs from{' '}
                <a href="https://giphy.com/" target="_blank">
                  GIPHY
                </a>
                , and illustrations are from{' '}
                <a href="https://storyset.com/" target="_blank">
                  Storyset
                </a>
                .
              </p>
              <p>
                Thanks for the free resources <Twemoji emoji="folded-hands" />.
              </p>
            </div>
            <div className="text-[1.1rem] leading-[1.9rem] text-gray-700 dark:text-slate-400 sm:text-[1.15rem] sm:leading-[2rem] md:text-[1.25rem] md:leading-[2.2rem] lg:text-[1.4rem] lg:leading-[2.4rem]">
              <h2>Contact</h2>
              <p>
                Reach out to me at{' '}
                <a href={`mailto:${SITE_METADATA.email}`}>{SITE_METADATA.email}</a> or find me on
                social media:
              </p>
              <SocialAccounts />
            </div>
            <div>
              {/* <h2>Support</h2>
              <p>If you appreciate my work, consider supporting me:</p>
              <div className="flex flex-col gap-4">
                <a
                  href={SITE_METADATA.support?.buyMeACoffee}
                  target="_blank"
                  className="[&_.image-container]:mx-0"
                >
                  <Image
                    src="/static/images/bmc-button.png"
                    alt="Buy Me A Coffee"
                    width={213.7}
                    height={60}
                    style={{ height: 60 }}
                  />
                </a>
                <a
                  href={SITE_METADATA.support?.paypal}
                  target="_blank"
                  className="flex h-15 w-[214px] items-center rounded-lg bg-[#009cde]/70 p-1"
                >
                  <Image
                    src="/static/images/paypal-logo.png"
                    alt="Donate via PayPal"
                    width={225.88}
                    height={60}
                    style={{ height: 30, width: 'auto' }}
                  />
                </a>
                <a
                  href={SITE_METADATA.support?.kofi}
                  target="_blank"
                  className="[&_.image-container]:mx-0"
                >
                  <Image
                    src="/static/images/kofi.png"
                    alt="Support me on Ko-fi"
                    width={297}
                    height={60}
                    style={{ height: 60, width: 'auto' }}
                  />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
