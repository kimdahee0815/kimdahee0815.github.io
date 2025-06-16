'use client'

import { clsx } from 'clsx'
import { useState } from 'react'
import type { Blog, Snippet } from '~/.contentlayer/generated'
import { PostCardListView } from '~/components/blog/post-card-list-view'
import { SnippetCard } from '~/components/cards/snippet'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import Link from '~/components/ui/Link'
import type { CoreContent } from '~/types/data'
import { useLanguageStore, getTranslation } from '~/store/language-store'
import parse from 'html-react-parser'

export function LatestPosts({
  posts,
  snippets,
}: {
  posts: CoreContent<Blog>[]
  snippets: CoreContent<Snippet>[]
}) {
  const { language, translations } = useLanguageStore()

  const t = (key: string) => getTranslation(translations[language], key)

  let [view, setView] = useState<'Posts' | 'Snippets'>('Posts')
  return (
    <div className="space-y-4 divide-y divide-gray-200 dark:divide-gray-700 md:mt-8 md:space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex text-2xl font-bold sm:text-2xl sm:leading-10 md:text-4xl">
          <span className="mr-2 md:mr-3">{t('home.latestPosts')}</span>
          <button
            className={clsx(
              'underline-offset-4 transition-colors',
              view === 'Posts'
                ? 'underline'
                : 'text-gray-300 hover:text-gray-900 dark:text-slate-500 dark:hover:text-slate-200'
            )}
            onClick={() => setView('Posts')}
          >
            <GrowingUnderline data-umami-event="latest-posts">
              {t('home.latestPosts2')}
            </GrowingUnderline>
          </button>
          <span className="mx-1">/</span>
          <button
            className={clsx(
              'underline-offset-4 transition-colors',
              view === 'Snippets'
                ? 'underline'
                : 'text-gray-300 hover:text-gray-900 dark:text-slate-500 dark:hover:text-slate-200'
            )}
            onClick={() => setView('Snippets')}
          >
            <GrowingUnderline data-umami-event="latest-snippets">
              {t('home.latestPosts3')}
            </GrowingUnderline>
          </button>
        </div>
        <div className="flex items-center justify-end text-base font-medium leading-6">
          <Link
            href={view === t('home.latestPosts2') ? '/blog' : '/snippets'}
            className=""
            aria-label="All posts"
          >
            <GrowingUnderline data-umami-event="all-posts">
              <span className="hidden md:inline-block">
                {t('home.latestPosts4')}
                {t(view === 'Posts' ? 'home.latestPosts2' : 'home.latestPosts3')}
                {language === 'ko' ? ' 보기' : ''}
              </span>
              <span className="md:hidden">More</span> &rarr;
            </GrowingUnderline>
          </Link>
        </div>
      </div>
      {view === 'Posts' ? (
        <ul className="space-y-12 divide-gray-200 pt-6 dark:divide-gray-700 md:space-y-20 md:pt-10">
          {!posts.length && t('home.noPostsFound')}
          {posts.map((post, idx) => (
            <li key={post.slug}>
              <PostCardListView post={post} loading={idx === 0 ? 'eager' : 'lazy'} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="py-10">
          <div className="grid-cols-2 gap-x-6 gap-y-10 space-y-10 md:grid md:space-y-0">
            {!snippets.length && t('home.noSnippetsFound')}
            {snippets.map((snippet) => (
              <SnippetCard snippet={snippet} key={snippet.path} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
