'use client'

import { useRouter } from 'next/navigation'
import type { Blog } from 'contentlayer/generated'
import type { CoreContent } from '~/types/data'
import { KBarSearchProvider } from '~/components/search/kbar-provider'

export const SearchProvider = ({ children }) => {
  const router = useRouter()
  //   useEffect(() => {
  //   const handler = (e: KeyboardEvent) => {
  //     if (e.ctrlKey && e.key.toLowerCase() === 'h') {
  //       e.preventDefault()
  //       router.push('/')
  //     }
  //      if (e.ctrlKey && e.key.toLowerCase() === 's') {
  //       e.preventDefault()
  //       router.push('/snippets')
  //     }
  //     if (e.ctrlKey && e.key.toLowerCase() === 'p') {
  //       e.preventDefault()
  //       router.push('/projects')
  //     }
  //     if (e.ctrlKey && e.key.toLowerCase() === 'a') {
  //       e.preventDefault()
  //       router.push('/about')
  //     }
  //     if (e.ctrlKey && e.key.toLowerCase() === 'm') {
  //       e.preventDefault()
  //       router.push('/movies')
  //     }
  //     if (e.ctrlKey && e.key.toLowerCase() === 'b') {
  //       e.preventDefault()
  //       router.push('/books')
  //     }
  //     if (e.ctrlKey && e.key.toLowerCase() === 't') {
  //       e.preventDefault()
  //       router.push('/tags')
  //     }
  //   }

  //   window.addEventListener('keydown', handler)
  //   return () => window.removeEventListener('keydown', handler)
  // }, [])
  return (
    <KBarSearchProvider
      configs={{
        searchDocumentsPath: 'search.json',
        defaultActions: [
          {
            id: 'homepage',
            name: 'Homepage',
            shortcut: ['h'],
            section: 'Home',
            perform: () => router.push('/'),
          },
          {
            id: 'blogs',
            name: 'Blogs',
            shortcut: ['b'],
            section: 'Blogs',
            perform: () => router.push('/blog'),
          },
          {
            id: 'snippets',
            name: 'Snippets',
            shortcut: ['s'],
            section: 'Snippets',
            perform: () => router.push('/snippets'),
          },
          {
            id: 'projects',
            name: 'Projects',
            shortcut: ['p'],
            section: 'Projects',
            perform: () => router.push('/projects'),
          },
          {
            id: 'about',
            name: 'About',
            shortcut: ['a'],
            section: 'About',
            perform: () => router.push('/about'),
          },
          {
            id: 'movies',
            name: 'Movies',
            shortcut: ['m'],
            section: 'Movies',
            perform: () => router.push('/movies'),
          },
          {
            id: 'books',
            name: 'Books',
            shortcut: ['r'],
            section: 'Books',
            perform: () => router.push('/books'),
          },
          {
            id: 'tags',
            name: 'Tags',
            shortcut: ['t'],
            section: 'Tags',
            perform: () => router.push('/tags'),
          },
        ],
        onSearchDocumentsLoad(json) {
          return json.map((post: CoreContent<Blog>) => ({
            id: post.path,
            name: post.title,
            keywords: post?.summary || '',
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
