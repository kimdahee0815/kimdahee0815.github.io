'use client'

import { Suspense } from 'react'
import { genPageMetadata } from '~/app/seo'
import { Container } from '~/components/ui/container'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import Link from '~/components/ui/Link'
import { PageHeader } from '~/components/ui/page-header'
import { SITE_METADATA } from '~/data/site-metadata'
import movies from '~/json/movies.json' assert { type: 'json' }
import { MoviesList } from './movies-list'
import type { ImdbMovie } from '~/types/data'
import { ExternalLink } from 'lucide-react'
import { useLanguageStore, getTranslation } from '~/store/language-store'
import parse from 'html-react-parser'

export default function MoviesPage() {
  const { language, translations } = useLanguageStore()

  const t = (key: string) => getTranslation(translations[language], key)
  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title={t('movies.title')}
        description={
          <>
            {parse(t('movies.description1'))}
            <p className="mt-3 flex-none italic lg900:flex">
              {t('movies.description2')}
              <Link href={SITE_METADATA.imdbRatingsList} className="ml-1 font-medium">
                <GrowingUnderline data-umami-event="imdb-feed" active>
                  {t('movies.description3')}
                </GrowingUnderline>
                {SITE_METADATA.imdbRatingsList.startsWith('http') && (
                  <ExternalLink className="ml-2 mt-2" size={18} strokeWidth={1.5} />
                )}
              </Link>
              {t('movies.description4')}
              <Link href="https://www.omdbapi.com/" className="ml-1 font-medium">
                <GrowingUnderline data-umami-event="omdb-feed" active>
                  {t('movies.description5')}
                </GrowingUnderline>
                {<ExternalLink className="ml-2 mt-2" size={18} strokeWidth={1.5} />}
              </Link>
            </p>
          </>
        }
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-5 md:py-10">
        <Suspense>
          <MoviesList movies={movies as unknown as ImdbMovie[]} />
        </Suspense>
      </div>
    </Container>
  )
}
