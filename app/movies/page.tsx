import { genPageMetadata } from '~/app/seo'
import movies from '~/json/movies.json' assert { type: 'json' }
import { MoviesClient } from './movies-client'
import type { Metadata } from 'next'
import type { ImdbMovie } from '~/types/data'

export const metadata: Metadata = genPageMetadata({
  title: 'My Movies List',
  description: 'Movie ratings and reviews.',
})

export default function Page() {
  return <MoviesClient movies={movies as unknown as ImdbMovie[]} />
}
