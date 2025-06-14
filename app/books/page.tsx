import { Suspense } from 'react'
import { genPageMetadata } from '~/app/seo'
import { Container } from '~/components/ui/container'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Image, Zoom } from '~/components/ui/Image'
import Link from '~/components/ui/Link'
import { PageHeader } from '~/components/ui/page-header'
import { SITE_METADATA } from '~/data/site-metadata'
import books from '~/json/books.json' assert { type: 'json' }
import type { GoodreadsBook } from '~/types/data'
import { BooksList } from './books-list'
import { ExternalLink } from 'lucide-react'

export let metadata = genPageMetadata({ title: 'My bookshelf' })

export default async function BooksPage() {
  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="Books"
        description={
          <>
            <p>
              A lifelong love for books drives my daily reading habit. I'm also a long-time member of a weekly book club 📚. <br/><br/>While novels were once my main focus, I now appreciate a wide array of genres, with a particular fondness for nonfiction, technology, science, productivity, philosophy, psychology, history, art these days.
              <br /><br/>
              Here, you'll find my reading log and my ever-growing "to-read" list.
            </p>
            <p className="mt-3 italic flex-none lg900:flex">
              *Data pulled from my{' '}
              <Link href={SITE_METADATA.goodreadsBookshelfUrl} className="font-medium ml-1">
                <GrowingUnderline data-umami-event="goodreads-feed" active>
                  Goodreads bookshelf
                </GrowingUnderline>
                {SITE_METADATA.goodreadsBookshelfUrl.startsWith('http') && <ExternalLink className="ml-2 mt-2" size={18} strokeWidth={1.5} />}
              </Link>
            </p>
          </>
        }
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <Suspense>
        <BooksList
          books={
            books.sort(
              (a, b) => Number(b.user_rating) - Number(a.user_rating)
            ) as unknown as GoodreadsBook[]
          }
        />
      </Suspense>
      {/* <div className="mt-6 border-t border-gray-200 py-5 dark:border-gray-700 md:mt-10 md:py-10">
        <h3 className="mb-6 text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-slate-100 md:text-3xl">
          FYI
        </h3>
        <div className="space-y-4">
          <p>My real life bookshelf and working space.</p>
          <Zoom>
            <Image
              src="/static/images/working-space.jpg"
              alt="Bookshelf and working space"
              width={1600}
              height={1200}
              className="rounded-2xl object-cover object-center"
            />
          </Zoom>
        </div>
      </div> */}
    </Container>
  )
}
