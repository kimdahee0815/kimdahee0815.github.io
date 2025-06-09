'use client'

import { useState } from 'react'
import { Tag } from '~/components/blog/tags'
import { SearchArticles } from '~/components/blog/search-articles'
import { PageHeader } from '~/components/ui/page-header'
import { Container } from '~/components/ui/container'

export default function TagsClient({ tagCounts }: { tagCounts: Record<string, number> }) {
  const [searchTerm, setSearchTerm] = useState('')

  const allTags = Object.keys(tagCounts).map((t) => t.toLowerCase())
  const filteredTags =
    searchTerm.trim() === ''
      ? allTags
      : allTags.filter((tag) => tag.includes(searchTerm.toLowerCase()))

  const grouped = filteredTags.reduce((acc: Record<string, string[]>, tag) => {
    const key = tag[0]
    acc[key] ??= []
    acc[key].push(tag)
    return acc
  }, {})

  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="Tags"
        description={
            <>
            You can find all the tags here! 😄
            <br/>
            🔍Use the search below to filter by tags.
          </>
        }
        className="border-b border-gray-200 dark:border-gray-700"
      >
        <SearchArticles
          label="Search tags"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </PageHeader>

      <div className="w-full space-y-8">
        {filteredTags.length === 0 ? (
          <p className="mt-10 text-left text-gray-500 dark:text-slate-400 text-[0.8rem] leading-[0.5rem] font-extrabold tracking-tight
        sm:text-[0.9rem]
        md:text-[1rem] md:leading-[0.7rem]
        lg:text-[1.1rem] lg:leading-[0.8rem]
        xl:text-[1.28rem] xl:leading-[1rem]">No tags found.</p>
        ) : (
          Object.entries(grouped)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([letter, tags]) => (
              <div key={letter}>
                <h2 className="mt-10 mb-4 text-xl font-semibold text-gray-700 dark:text-slate-200">
                  {letter.toUpperCase()}
                </h2>
                <div className="flex flex-wrap gap-4">
                  {tags.map((tag) => (
                    <div key={tag} className="flex items-center gap-1">
                      <Tag text={tag} size="md" />
                      <span className="text-sm text-gray-500 dark:text-slate-400">
                        ({tagCounts[tag]})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))
        )}
      </div>
    </Container>
  )
}