import { ExternalLink } from 'lucide-react'
import { Fragment, type ReactElement } from 'react'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import Link from '~/components/ui/Link'
import { useLanguageStore, getTranslation } from '~/store/language-store'
import { SITE_METADATA } from '~/data/site-metadata'

type FooterLinkType = {
  href: string
  title: string
}

export function FooterNav() {
  const { language, translations } = useLanguageStore()

  const t = (key: string) => getTranslation(translations[language], key)

  const FOOTER_NAV_LINKS = [
    { href: '/blog', title: t('footer.sitemap1') },
    { href: '/snippets', title: t('footer.sitemap2') },
    { href: '/projects', title: t('footer.sitemap3') },
    { href: '/tags', title: t('footer.sitemap4') },
    { href: '/feed.xml', title: t('footer.sitemap5') },
  ]

  const FOOTER_PERSONAL_STUFF = [
    { href: '/about', title: t('footer.personal1') },
    { href: '/static/resume.pdf', title: t('footer.personal2') },
    { href: '/books', title: t('footer.personal3') },
    { href: '/movies', title: t('footer.personal4') },
    { href: SITE_METADATA.analytics.umamiAnalytics.shareUrl, title: t('footer.personal5') },
  ]
  return (
    <div className="flex flex-col gap-4 px-1 md:flex-row md:justify-end md:gap-24 md:px-0 md:text-right">
      <div className="space-y-1 md:space-y-4">
        <div className="flex h-11 items-center font-semibold md:justify-end">
          <span>{t('footer.sitemap')}</span>
        </div>
        <ul className="flex flex-wrap gap-4 md:flex-col md:gap-3">
          {FOOTER_NAV_LINKS.map((link, idx) => (
            <Fragment key={link.title}>
              <li>
                <FooterLink link={link} />
              </li>
              {idx !== FOOTER_NAV_LINKS.length - 1 && (
                <span className="text-gray-400 md:hidden">/</span>
              )}
            </Fragment>
          ))}
        </ul>
      </div>
      <div className="space-y-1 md:space-y-4">
        <div className="flex h-11 items-center font-semibold md:justify-end">
          <span>{t('footer.personal')}</span>
        </div>
        <ul className="flex flex-wrap gap-4 md:flex-col md:gap-3">
          {FOOTER_PERSONAL_STUFF.map((link, idx) => (
            <Fragment key={link.title}>
              <li>
                <FooterLink link={link} />
              </li>
              {idx !== FOOTER_NAV_LINKS.length - 1 && (
                <span className="text-gray-400 md:hidden">/</span>
              )}
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  )
}

function FooterLink({ link }: { link: FooterLinkType }) {
  let { href, title } = link
  let isExternal = href.startsWith('http')

  return (
    <Link href={href} className={title === 'Analytics' ? 'flex justify-end' : ''}>
      <GrowingUnderline
        data-umami-event={`footer-nav-${href.replace('/', '')}`}
        className="inline-flex items-center"
      >
        {title}
      </GrowingUnderline>
      {isExternal && <ExternalLink className="ml-1" size={18} strokeWidth={1.5} />}
    </Link>
  )
}
