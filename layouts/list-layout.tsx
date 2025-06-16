'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Filter,
  X,
  ChevronDown,
  ChevronUp,
  Folder,
  FolderMinus,
  FolderPlus,
} from 'lucide-react'
import { PostCardGridView } from '~/components/blog/post-card-grid-view'
import { SearchArticles } from '~/components/blog/search-articles'
import { Container } from '~/components/ui/container'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import Link from '~/components/ui/Link'
import { PageHeader } from '~/components/ui/page-header'
import type { Blog } from 'contentlayer/generated'
import type { CoreContent } from '~/types/data'
import { ClientOnlySearchParams } from './list-searchparams'
import { useLanguageStore, getTranslation } from '~/store/language-store'
import parse from 'html-react-parser'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const { language, translations } = useLanguageStore()

  const t = (key: string) => getTranslation(translations[language], key)
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {prevPage ? (
          <Link
            className="cursor-pointer"
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            <GrowingUnderline className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>{t('blog.previous')}</span>
            </GrowingUnderline>
          </Link>
        ) : (
          <button className="cursor-auto disabled:opacity-50" disabled>
            <GrowingUnderline className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>{t('blog.previous')}</span>
            </GrowingUnderline>
          </button>
        )}
        <span>
          {currentPage} / {totalPages}
        </span>
        {nextPage ? (
          <Link className="cursor-pointer" href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            <GrowingUnderline className="inline-flex items-center gap-2">
              <span>{t('blog.next')}</span>
              <ArrowRight className="h-4 w-4" />
            </GrowingUnderline>
          </Link>
        ) : (
          <button className="cursor-auto disabled:opacity-50" disabled>
            <GrowingUnderline className="inline-flex items-center gap-2">
              <span>{t('blog.next')}</span>
              <ArrowRight className="h-4 w-4" />
            </GrowingUnderline>
          </button>
        )}
      </nav>
    </div>
  )
}

export function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const { language, translations } = useLanguageStore()

  const t = (key: string) => getTranslation(translations[language], key)

  const [searchValue, setSearchValue] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showFilter, setShowFilter] = useState(false)
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const toggleCategory = (category: string) => {
    setOpenCategory((prev) => (prev === category ? null : category))
  }

  const filteredBlogPosts = posts.filter((post) => {
    const searchContent = post.title + post.summary + post.tags?.join(' ')
    const matchesSearch = searchContent.toLowerCase().includes(searchValue.toLowerCase())
    const matchesTags =
      selectedTags.length === 0 || selectedTags.every((tag) => post.tags?.includes(tag))
    return matchesSearch && matchesTags
  })

  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue && selectedTags.length === 0
      ? initialDisplayPosts
      : filteredBlogPosts

  const [drawerDirection, setDrawerDirection] = useState<'horizontal' | 'vertical'>('vertical')

  useEffect(() => {
    const handleResize = () => {
      setDrawerDirection(window.innerWidth <= 1920 ? 'horizontal' : 'vertical')
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const categories = {
    [t('blog.categories1')]: ['javascript', 'typescript', 'java'],
    [t('blog.categories2')]: ['react', 'nextjs', 'tailwind-css', 'css', 'scss', 'redux', 'zustand'],
    [t('blog.categories3')]: [
      'nodejs',
      'express',
      'nestjs',
      'spring-boot',
      'auth',
      'rest',
      'graphql',
    ],
    [t('blog.categories4')]: ['postgresql', 'mysql', 'redis', 'prisma', 'mongodb'],
    [t('blog.categories5')]: [
      'docker',
      'github-actions',
      'aws',
      'vercel',
      'netlify',
      'nginx',
      'monitoring',
    ],
    [t('blog.categories6')]: ['jest', 'vitest', 'cypress', 'eslint', 'prettier', 'test-coverage'],
    [t('blog.categories7')]: [
      'data-structure',
      'algorithm',
      'operating-system',
      'network',
      'design-pattern',
      'architecture',
      'clean-code',
    ],
    [t('blog.categories8')]: [
      'vscode',
      'git',
      'zsh',
      'terminal',
      'chrome-devtools',
      'postman',
      'insomnia',
      'figma',
    ],
    [t('blog.categories9')]: ['artificial-intelligence', 'machine-learning', 'conference'],
  }
  return (
    <Container className="relative pt-4 lg:pt-12">
      <Suspense>
        <ClientOnlySearchParams onTagChange={(tag) => setSearchValue(tag)} />
      </Suspense>
      <PageHeader
        title={t('blog.title')}
        description={parse(t('blog.detail'))}
        className="relative border-b border-gray-200 dark:border-gray-700"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <SearchArticles
            label={t('blog.searchArticles')}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            onClick={() => setShowFilter(true)}
            className="flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-800"
            aria-label="Open categories"
          >
            <Filter className="h-4 w-4" /> {t('blog.categories')}
          </button>
        </div>
      </PageHeader>

      <AnimatePresence>
        {showFilter && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFilter(false)}
              className="fixed inset-0 z-30 cursor-pointer bg-black backdrop-blur-sm"
            />
            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={
                drawerDirection === 'vertical'
                  ? { x: '-110%', opacity: 0 }
                  : { y: -100, opacity: 0 }
              }
              animate={
                drawerDirection === 'vertical' ? { x: '16px', opacity: 1 } : { y: 0, opacity: 1 }
              }
              exit={
                drawerDirection === 'vertical'
                  ? { x: '-110%', opacity: 0 }
                  : { y: -100, opacity: 0 }
              }
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`z-40 overflow-hidden rounded-2xl shadow-xl dark:bg-zinc-900 ${
                drawerDirection === 'vertical'
                  ? 'fixed left-4 top-[130px] h-[70vh] w-80 bg-white'
                  : 'fixed left-[9%] top-[8rem] h-[70vh] w-[80%] -translate-x-1/2 bg-white'
              }`}
            >
              <header className="sticky top-0 flex items-center justify-between rounded-t-2xl border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-zinc-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {t('blog.categories')}
                </h3>
                <div className="flex items-center gap-2">
                  {selectedTags.length > 0 && (
                    <button
                      onClick={() => setSelectedTags([])}
                      className="rounded px-2 py-1 text-sm text-blue-600 transition-colors duration-300 hover:bg-blue-100 hover:text-blue-800 dark:text-blue-400 dark:hover:bg-blue-700 dark:hover:text-blue-200"
                      aria-label="Clear all categories"
                    >
                      {t('blog.categoriesClearAll')}
                    </button>
                  )}
                  <button
                    onClick={() => setShowFilter(false)}
                    aria-label="Close categories"
                    className="rounded-md p-2 transition hover:bg-gray-200 dark:hover:bg-gray-800"
                  >
                    <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </button>
                </div>
              </header>
              <div className="scrollbar-rounded scrollbar-thin scrollbar-gutter-stable scrollbar-track-transparent max-h-[calc(70vh-4.8rem)] space-y-2 overflow-y-auto p-4 pb-4">
                {Object.entries(categories).map(([category, tags]) => (
                  <div
                    key={category}
                    className="rounded-lg border border-gray-300 dark:border-gray-700"
                  >
                    <button
                      className="flex w-full items-center justify-between rounded-t-lg px-4 py-3 font-semibold text-gray-800 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-zinc-800"
                      onClick={() => toggleCategory(category)}
                      aria-expanded={openCategory === category}
                      aria-controls={`${category}-content`}
                    >
                      <div className="flex items-center gap-2">
                        {openCategory === category ? (
                          <FolderMinus className="h-5 w-5 text-blue-600" />
                        ) : (
                          <FolderPlus className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        )}
                        {category}
                      </div>
                      {openCategory === category ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>

                    <AnimatePresence>
                      {openCategory === category && (
                        <motion.ul
                          id={`${category}-content`}
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { height: 'auto', opacity: 1 },
                            collapsed: { height: 0, opacity: 0 },
                          }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="space-y-1 overflow-hidden px-6 py-2"
                        >
                          {tags.map((tag) => {
                            const isSelected = selectedTags.includes(tag)
                            return (
                              <li key={tag} className="text-sm">
                                <button
                                  className={`flex w-full items-center gap-2 rounded-md px-3 py-1 text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-zinc-800 ${
                                    isSelected ? 'bg-blue-100 text-blue-700 dark:bg-blue-900' : ''
                                  }`}
                                  onClick={() => toggleTag(tag)}
                                  aria-pressed={isSelected}
                                >
                                  <input
                                    type="checkbox"
                                    checked={isSelected}
                                    readOnly
                                    className="pointer-events-none"
                                  />
                                  <span>{tag}</span>
                                </button>
                              </li>
                            )
                          })}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayPosts.map((post) => (
          <PostCardGridView key={post.path} post={post} />
        ))}
      </div>

      {pagination && (
        <Pagination totalPages={pagination.totalPages} currentPage={pagination.currentPage} />
      )}
    </Container>
  )
}
