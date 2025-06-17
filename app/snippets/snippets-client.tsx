'use client'

import type { Snippet } from 'contentlayer/generated'
import { SnippetCard } from '~/components/cards/snippet'
import { Container } from '~/components/ui/container'
import { PageHeader } from '~/components/ui/page-header'
import { useLanguageStore, getTranslation } from '~/store/language-store'
import parse from 'html-react-parser'

export function SnippetsClient({ snippets }) {
  const { language, translations } = useLanguageStore()
  const t = (key: string) => getTranslation(translations[language], key)

  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title={t('snippets.title')}
        description={parse(t('snippets.description'))}
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-10">
        <div className="grid-cols-2 gap-x-6 gap-y-10 space-y-10 md:grid md:space-y-0">
          {snippets.map((snippet) => (
            <SnippetCard snippet={snippet} key={snippet.path} />
          ))}
        </div>
      </div>
    </Container>
  )
}
