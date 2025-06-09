import { genPageMetadata } from 'app/seo'
import { Tag } from '~/components/blog/tags'
import { Container } from '~/components/ui/container'
import tagData from '~/json/tag-data.json'

export let metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default async function Page() {
  let tagCounts = tagData as Record<string, number>
  let tagKeys = Object.keys(tagCounts)

  let sortedTags = tagKeys
    .map((t) => t.toLowerCase())
    .sort((a, b) => a.localeCompare(b))

   let groupedTags = sortedTags.reduce((acc: Record<string, string[]>, tag) => {
    let firstLetter = tag[0]
    if (!acc[firstLetter]) acc[firstLetter] = []
    acc[firstLetter].push(tag)
    return acc
  }, {})

  return (
    <Container className="pt-4 md:pt-0">
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24">
        <div className="space-x-2 pt-6">
          <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-slate-300 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Tags
          </h1>
        </div>

        <div className="mt-10 w-full space-y-10">
          {Object.keys(groupedTags).sort().map((letter) => (
            <div key={letter}>
              <h2 className="mt-10 mb-4 text-xl font-semibold capitalize text-gray-800 dark:text-slate-200">
                {letter}
              </h2>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {groupedTags[letter].map((tag) => (
                  <div key={tag} className="flex items-center gap-1">
                    <Tag text={tag} size="md" />
                    <span className="text-gray-600 dark:text-slate-300">({tagCounts[tag] ?? 0})</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
