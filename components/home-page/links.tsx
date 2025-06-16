'use client'

import Link from '~/components/ui/Link'
import { Twemoji } from '~/components/ui/twemoji'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { SITE_METADATA } from '~/data/site-metadata'
import { useLanguageStore, getTranslation } from '~/store/language-store'

export function BlogLinks() {
  const { language, translations } = useLanguageStore()

  const t = (key: string) => getTranslation(translations[language], key)
  const LINKS = [
    {
      title: t('home.links1'),
      href: `/projects`,
      emoji: 'man-technologist',
      event: 'home-link-projects',
    },
    {
      title: t('home.links2'),
      href: `/blog`,
      emoji: 'memo',
      event: 'home-link-blog',
    },
    {
      title: t('home.links3'),
      href: `/snippets`,
      emoji: 'dna',
      event: 'home-link-snippets',
    },
    {
      title: t('home.links4'),
      href: `/about`,
      emoji: 'smiling-face-with-sunglasses',
      event: 'home-link-about',
    },
    {
      title: t('home.links5'),
      href: SITE_METADATA.analytics.umamiAnalytics.shareUrl,
      emoji: 'bar-chart',
      event: 'home-link-analytics',
    },
  ]

  return (
    <div className="flex flex-col gap-2.5 md:gap-3">
      {LINKS.map(({ title, href, emoji, event }) => (
        <Link key={title} href={href} className="flex items-center gap-1.5">
          <Twemoji emoji={emoji} />
          <GrowingUnderline data-umami-event={event} className="leading-6">
            {title}
          </GrowingUnderline>
        </Link>
      ))}
    </div>
  )
}
