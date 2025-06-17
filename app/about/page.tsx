import { genPageMetadata } from 'app/seo'
import type { Author } from 'contentlayer/generated'
import { allAuthors } from 'contentlayer/generated'
import { AuthorLayout } from '~/layouts/author-layout'
import { coreContent } from '~/utils/contentlayer'

export const metadata = genPageMetadata({
  title: 'About',
  description:
    "I'm a full-stack developer with a background in English literature, combining creative thinking with technical expertise. Passionate about clean code, thoughtful design, and building meaningful digital experiences.",
})

export default function AboutPage() {
  let author = allAuthors.find((p) => p.slug === 'default') as Author
  let mainContent = coreContent(author)

  return (
    <AuthorLayout content={mainContent}>
      {/* TODO: MDX seems to be broken on this page, so I'm back to JSX for now */}
      {/* <MDXLayoutRenderer code={author.body.code} /> */}
    </AuthorLayout>
  )
}
