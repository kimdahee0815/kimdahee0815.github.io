'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { KbarSearchTrigger } from '~/components/search/kbar-trigger'
import { Container } from '~/components/ui/container'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import Link from '~/components/ui/Link'
import { HEADER_NAV_LINKS } from '~/data/navigation'
import { SITE_METADATA } from '~/data/site-metadata'
import Logo from 'public/static/images/logo.svg'
import { MobileNav } from './mobile-nav'
import { MoreLinks } from './more-links'
import { ThemeSwitcher } from './theme-switcher'

let logged = false
function logASCIItext() {
  if (logged) return
  console.log('🧑‍💻 View source:', SITE_METADATA.siteRepo)
  logged = true
}

export function Header() {
  const pathname = usePathname()

  useEffect(() => {
    logASCIItext()
  }, [])

  let headerClass =
    'mx-auto w-full max-w-[80rem] supports-backdrop-blur fixed left-0 right-0 top-0 z-10 bg-white/75 py-8 backdrop-blur dark:bg-dark/75 md:rounded-2xl'

  if (SITE_METADATA.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <Container as="header" className={headerClass}>
      <div className="mx-auto flex max-w-[80rem] items-center justify-between px-3 xl:max-w-[80rem] xl:px-0">
        <Link href="/" aria-label={SITE_METADATA.headerTitle} className="flex items-center">
          <div className="animate-wave">
            <Logo
              className={clsx([
                'rounded-xl p-0.5',
                'ring-1 ring-zinc-900/5 dark:ring-white/10',
                'shadow-lg shadow-zinc-800/5',
                'fill-dark dark:fill-white',
              ])}
            />
          </div>
          <div className="group ml-2 text-4xl font-bold transition duration-300 max-[636px]:text-[1.3rem] min-[636px]:text-[1.3rem] min-[960px]:text-2xl min-[1080px]:text-3xl min-[1280px]:text-4xl">
            <GrowingUnderline>Let's Hack The Moon</GrowingUnderline>
            {/* <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-[100%] dark:bg-white"></span> */}
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden gap-1.5 lg900:flex">
            {HEADER_NAV_LINKS.map(({ title, href }) => {
              let isActive = pathname.startsWith(href)
              return (
                <Link key={title} href={href} className="px-3 py-1 font-medium">
                  <GrowingUnderline
                    className={clsx('max-[636px]:text-sm min-[636px]:text-base min-[930px]:text-lg min-[1080px]:text-xl', isActive && 'bg-[length:100%_50%]')}
                    data-umami-event={`nav-${href.replace('/', '')}`}
                  >
                    {title}
                  </GrowingUnderline>
                </Link>
              )
            })}
            <MoreLinks />
          </div>
          <div
            data-orientation="vertical"
            role="separator"
            className="hidden h-4 w-px shrink-0 bg-gray-200 dark:bg-gray-600 lg900:block"
          />
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <KbarSearchTrigger />
            <MobileNav />
          </div>
        </div>
      </div>
    </Container>
  )
}
