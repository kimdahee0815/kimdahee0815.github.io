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

export let metadata = genPageMetadata({ title: 'My movies list' })

export default async function MoviesPage() {
  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="Movies"
        description={
          <>
            <p>
              This is where I log of all the films and series I've seen. Being a big fan of Christopher Nolan and Jim Carrey, their work often tops my list! <br/>A 10-star rating means I consider it an absolute masterpiece, something I've probably seen many times or truly love (consider it a strong recommendation!).
              <br/><br/>My favorite genres lean towards fantasy, adventure, and detective stories, and I'm always up for sci-fi (but definitely no horror!). When I need to unwind, my go-to is usually a spontaneous trip to the cinema. <br/><br/>Take a look, maybe you'll find your next favorite film! 🤩🎞️🍿
            </p>
            <p className="mt-3 italic flex-none lg900:flex">
              *Data is exported from my {' '}
              <Link href={SITE_METADATA.imdbRatingsList} className="font-medium ml-1">
                <GrowingUnderline data-umami-event="goodreads-feed" active>
                  IMDB ratings list
                </GrowingUnderline>
                {SITE_METADATA.imdbRatingsList.startsWith('http') && <ExternalLink className="ml-2 mt-2" size={18} strokeWidth={1.5} />}
              </Link>
              , with extra details pulled in from the{' '}
              <Link href="https://www.omdbapi.com/" className="font-medium ml-1">
                <GrowingUnderline data-umami-event="goodreads-feed" active>
                  OMDB API
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
