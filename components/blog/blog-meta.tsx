import type readingTime from 'reading-time'
import { formatDate, getTimeAgo } from '~/utils/misc'
import { ViewsCounter } from './views-counter'
import { StatsType } from '@prisma/client'
import { Twemoji } from '~/components/ui/twemoji'

type BlogMetaProps = {
  date: string
  lastmod?: string
  slug: string
  type: StatsType
  readingTime: ReturnType<typeof readingTime>
}

export function BlogMeta({ date, lastmod, type, slug, readingTime }: BlogMetaProps) {
  return (
    <dl>
      <dt className="sr-only">Published on</dt>
      <dd className="flex flex-wrap items-center gap-2 text-xl font-medium leading-6 text-gray-500 dark:text-gray-400 md:text-xl">
        <time dateTime={date} className="flex items-center justify-center">
          <Twemoji emoji="calendar" />
          <span className="ml-1 md:ml-2">{formatDate(date)}</span>
          {lastmod && (
            <time
              dateTime={date}
              className="ml-1.5 hidden items-center justify-center md:ml-2 md:flex"
            >
              (<span>updated</span>
              <span className="ml-1.5">{getTimeAgo(lastmod)}</span>)
            </time>
          )}
        </time>
        <span className="mx-2">{` • `}</span>
        <div className="flex items-center">
          <Twemoji emoji="hourglass-not-done" />
          <span className="ml-1.5 md:ml-2">{Math.ceil(readingTime.minutes)} mins read</span>
        </div>
        <span className="mx-2">{` • `}</span>
        <div className="flex items-center">
          <Twemoji emoji="eye" />
          <ViewsCounter className="ml-1.5 md:ml-2" slug={slug} type={StatsType.blog} />
        </div>
      </dd>
    </dl>
  )
}
