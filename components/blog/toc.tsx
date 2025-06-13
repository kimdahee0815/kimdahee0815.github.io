import { clsx } from 'clsx'
import { ChevronRight } from 'lucide-react'
import Link from '~/components/ui/Link'

type TocItem = {
  value: string
  url: string
  depth: number
}

export function TableOfContents({ toc, className }: { toc: TocItem[]; className?: string }) {
  return (
    <details className={clsx('space-y-4 [&_.chevron-right]:open:rotate-90', className)} open>
      <summary className="mt-4 flex cursor-pointer items-center gap-1 marker:content-none">
        <ChevronRight
          strokeWidth={1.5}
          size={20}
          className="chevron-right rotate-0 transition-transform"
        />
        <span className="text-3xl font-medium">On this page</span>
      </summary>
      <ul className="flex flex-col space-y-2">
        {toc.map(({ value, depth, url }) => (
          <li
            key={url}
            className="leading-2 font-medium text-gray-500 hover:text-black dark:text-slate-400 hover:dark:text-dark-mode-yellow"
            style={{ paddingLeft: (depth - 2) * 16 }}
          >
            <Link inline={false} href={url} className="text-xl leading-8">
              {value}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  )
}
