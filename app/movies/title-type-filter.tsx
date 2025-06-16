'use client'

import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'
import { Fragment } from 'react'
import Link from '~/components/ui/Link'
import { Twemoji } from '~/components/ui/twemoji'
import type { RateType } from './rate-filter'
import { useLanguageStore, getTranslation } from '~/store/language-store'

export const TITLE_TYPES: {
  label: string
  value: TitleType
  emoji: string
}[] = [
  {
    label: 'types1',
    value: 'all',
    emoji: 'popcorn',
  },
  {
    label: 'types2',
    value: 'movie',
    emoji: 'movie-camera',
  },
  {
    label: 'types3',
    value: 'tv-series',
    emoji: 'television',
  },
]

export type TitleType = 'movie' | 'tv-series' | 'all'

export function TitleTypeFilter({ type, rate }: { type: TitleType; rate: RateType }) {
  const { language, translations } = useLanguageStore()
  const t = (key: string) => getTranslation(translations[language], key)

  let { label, value: selectedValue } =
    TITLE_TYPES.find(({ value }) => value === type) || TITLE_TYPES[0]
  label = t(`movies.${label}`)
  console.log('label', label)
  return (
    <div className="flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <MenuButton
          aria-label="More links"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-1.5 font-medium dark:border-gray-700"
          data-umami-event="movies-rate-filter"
        >
          <span>{label}</span>
          <ChevronDown strokeWidth={1.5} size={20} />
        </MenuButton>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems
            className={clsx([
              'absolute left-0 z-50 md:left-auto md:right-0',
              'mt-2 w-36 origin-top-right rounded-md text-right shadow-lg',
              'bg-white dark:bg-black',
              'ring-1 ring-black ring-opacity-5 focus:outline-none',
            ])}
          >
            <div className="space-y-1 p-1">
              {TITLE_TYPES.map(({ label, value, emoji }) => {
                const translatedLabel = t(`movies.${label}`)
                return (
                  <MenuItem key={value} as="div">
                    {({ close }) => (
                      <Link
                        className={clsx([
                          'flex w-full items-center gap-2 rounded-md px-2 py-1.5',
                          value === selectedValue
                            ? 'bg-gray-200 dark:bg-gray-800'
                            : 'hover:bg-gray-200 dark:hover:bg-gray-800',
                        ])}
                        href={`/movies?type=${value}&rate=${rate}`}
                        onClick={close}
                      >
                        <Twemoji emoji={emoji} />
                        <span>{translatedLabel}</span>
                      </Link>
                    )}
                  </MenuItem>
                )
              })}
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  )
}
