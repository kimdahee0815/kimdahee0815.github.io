import books from '~/json/books.json' assert { type: 'json' }
import type { GoodreadsBook } from '~/types/data'
import { BooksClient } from './books-client'
import type { Metadata } from 'next'
import { genPageMetadata } from '~/app/seo'

export const metadata: Metadata = genPageMetadata({
  title: 'My Bookshelf',
  description: 'Books I’ve read and my personal ratings.',
})

export default function Page() {
  const sortedBooks = books.sort((a, b) => Number(b.user_rating) - Number(a.user_rating))

  return <BooksClient books={sortedBooks as unknown as GoodreadsBook[]} />
}
