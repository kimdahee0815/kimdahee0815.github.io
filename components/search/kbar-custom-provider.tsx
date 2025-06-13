'use client'

import { useRouter } from 'next/navigation'
import type { Blog } from 'contentlayer/generated'
import type { CoreContent } from '~/types/data'
import { KBarSearchProvider } from '~/components/search/kbar-provider'

export const SearchProvider = ({ children }) => {
  const router = useRouter()
  return (
    <KBarSearchProvider
      configs={{
        searchDocumentsPath: 'search.json',
        defaultActions: [
          {
            id: 'homepage',
            name: 'Homepage',
            keywords: '',
            shortcut: ['h', 'H'],
            section: 'Home',
            perform: () => router.push('/'),
          },
          {
            id: 'snippets',
            name: 'Snippets',
            keywords: '',
            shortcut: ['s', 'S'],
            section: 'Snippets',
            perform: () => router.push('/snippets'),
          },
          {
            id: 'projects',
            name: 'Projects',
            keywords: '',
            shortcut: ['p', 'P'],
            section: 'Projects',
            perform: () => router.push('/projects'),
          },
          {
            id: 'about',
            name: 'About',
            keywords: '',
            shortcut: ['a', 'A'],
            section: 'About',
            perform: () => router.push('/about'),
          },
          {
            id: 'movies',
            name: 'Movies',
            keywords: '',
            shortcut: ['m', 'M'],
            section: 'Movies',
            perform: () => router.push('/movies'),
          },
          {
            id: 'books',
            name: 'Books',
            keywords: '',
            shortcut: ['b', 'B'],
            section: 'Books',
            perform: () => router.push('/books'),
          },
          {
            id: 'tags',
            name: 'Tags',
            keywords: '',
            shortcut: ['t', 'T'],
            section: 'Tags',
            perform: () => router.push('/tags'),
          },
        ],
        // onSearchDocumentsLoad(json) {
        //   return json.map((post: CoreContent<Blog>) => ({
        //     id: post.path,
        //     name: post.title,
        //     keywords: post?.summary || '',
        //     section: 'Blog',
        //     subtitle: post.tags.join(', '),
        //     perform: () => router.push('/' + post.path),
        //   }))
        // },
        onSearchDocumentsLoad(json) {
          return json.map((post: Blog) => ({
            id: post.path,
            name: post.title,
            keywords: post.body.raw,
            section: 'Blog',
            subtitle: post.tags.join(', '),
            perform: () => router.push('/' + post.path),
          }))
        },
      }}
    >
      {children}
    </KBarSearchProvider>
  )
}
