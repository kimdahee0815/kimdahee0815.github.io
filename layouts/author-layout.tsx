'use client'

import type { Author } from 'contentlayer/generated'
import type { ReactNode } from 'react'
import { CareerTimeline } from '~/components/author/career'
import { SocialAccounts } from '~/components/author/social-accounts'
import { ProfileCard } from '~/components/cards/profile'
import { Button } from '~/components/ui/button'
import { Container } from '~/components/ui/container'
import { PageHeader } from '~/components/ui/page-header'
import { Twemoji } from '~/components/ui/twemoji'
import { SITE_METADATA } from '~/data/site-metadata'
import { useLanguageStore, getTranslation } from '~/store/language-store'
import parse from 'html-react-parser'

interface Props {
  children?: ReactNode
  content: Omit<Author, '_id' | '_raw' | 'body'>
}

export function AuthorLayout({ children }: Props) {
  const { language, translations } = useLanguageStore()

  const t = (key: string) => getTranslation(translations[language], key)

  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title={t('about.title')}
        description={t('about.description')}
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
                {parse(t('about.greeting1'))} <Twemoji emoji="waving-hand" /> {t('about.greeting2')}
              </h2>
              <p>{parse(t('about.intro1'))}</p>
              <p>{parse(t('about.intro2'))}</p>
              <p>{parse(t('about.intro3'))}</p>
              <p>{parse(t('about.intro4'))}</p>
              <p>
                {parse(t('about.intro5'))}
                <Twemoji emoji="sparkling-heart" />.
              </p>
            </div>
            <div>
              <div className="mb-2 mt-2 flex items-center justify-between text-[1.1rem] leading-[1.9rem] text-gray-700 dark:text-slate-400 sm:text-[1.15rem] sm:leading-[2rem] md:text-[1.25rem] md:leading-[2.2rem] lg:text-[1.4rem] lg:leading-[2.4rem]">
                <h2>{t('about.mycareer')}</h2>
                <Button as="a" href="/static/resume.pdf" target="_blank">
                  <span>{t('about.resume')}</span>
                  <Twemoji emoji="page-facing-up" />
                </Button>
              </div>
              <CareerTimeline />
            </div>
            <div className="text-[1.1rem] leading-[1.9rem] text-gray-700 dark:text-slate-400 sm:text-[1.15rem] sm:leading-[2rem] md:text-[1.25rem] md:leading-[2.2rem] lg:text-[1.4rem] lg:leading-[2.4rem]">
              <h2>{t('about.techstack')}</h2>
              {parse(t('about.techstackDetail'))}
            </div>
            <div className="text-[1.1rem] leading-[1.9rem] text-gray-700 dark:text-slate-400 sm:text-[1.15rem] sm:leading-[2rem] md:text-[1.25rem] md:leading-[2.2rem] lg:text-[1.4rem] lg:leading-[2.4rem]">
              <h2>{t('about.assets')}</h2>
              <p>{parse(t('about.assetsDetail1'))}</p>
              <p>
                {parse(t('about.assetsDetail2'))} <Twemoji emoji="folded-hands" />.
              </p>
            </div>
            <div className="text-[1.1rem] leading-[1.9rem] text-gray-700 dark:text-slate-400 sm:text-[1.15rem] sm:leading-[2rem] md:text-[1.25rem] md:leading-[2.2rem] lg:text-[1.4rem] lg:leading-[2.4rem]">
              <h2>{parse(t('about.contact'))}</h2>
              <p>{parse(t('about.contactDetail'))}</p>
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
