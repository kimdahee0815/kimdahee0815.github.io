'use client'

import { useLanguageStore, getTranslation } from '~/store/language-store'
import { ListLayoutWithTags } from '~/layouts/list-layout-with-tags'

export function ListLayoutWithTagsClient({ tag, posts, snippets }) {
  const { language, translations } = useLanguageStore()
  const t = (key: string) => getTranslation(translations[language], key)

  return (
    <ListLayoutWithTags
      title={`#${tag}`}
      description={
        <>
          {t('tags.searchDescription')}
          <span className="ml-1 font-semibold">#{tag}</span>
        </>
      }
      posts={posts}
      snippets={snippets}
    />
  )
}
