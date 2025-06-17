import { allSnippets } from 'contentlayer/generated'
import { allCoreContent } from '~/utils/contentlayer'
import { sortPosts } from '~/utils/misc'
import { SnippetsClient } from './snippets-client'
import { genPageMetadata } from '~/app/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = genPageMetadata({
  title: 'Snippets',
  description: 'Useful code snippets and short notes.',
})

export default function Page() {
  const snippets = allCoreContent(sortPosts(allSnippets))
  return <SnippetsClient snippets={snippets} />
}
