import { genPageMetadata } from 'app/seo'
import { Container } from '~/components/ui/container'
import TagsClient from './tags-client'
import tagData from '~/json/tag-data.json'

export const metadata = genPageMetadata({
  title: 'Tags',
  description: 'Things I blog about',
})

export default function Page() {
  const tagCounts = tagData as Record<string, number>
  return (
    <Container className="pt-4 md:pt-0">
      <TagsClient tagCounts={tagCounts} />
    </Container>
  )
}