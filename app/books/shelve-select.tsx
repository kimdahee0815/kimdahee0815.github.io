import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'
import { Fragment } from 'react'
import Link from '~/components/ui/Link'
import { Twemoji } from '~/components/ui/twemoji'
import { useLanguageStore, getTranslation } from '~/store/language-store'

export const SHELVES: {
  label: string
  description: string
  value: ShelfType
  emoji: string
}[] = [
  {
    label: 'All',
    value: 'all',
    description: 'shelf1',
    emoji: 'books',
  },
  {
    label: 'Reading',
    value: 'currently-reading',
    description: 'shelf2',
    emoji: 'open-book',
  },
  {
    label: 'Read',
    value: 'read',
    description: 'shelf3',
    emoji: 'check-mark-button',
  },
  {
    label: 'Abandoned',
    value: 'abandoned',
    description: 'shelf4',
    emoji: 'wastebasket',
  },
]

export type ShelfType = 'all' | 'currently-reading' | 'read' | 'abandoned'

export function ShelveSelect({ shelf }: { shelf: ShelfType }) {
  const { language, translations } = useLanguageStore()
  const t = (key: string) => getTranslation(translations[language], key)
  let {
    label,
    description,
    value: selectedValue,
  } = SHELVES.find(({ value }) => value === shelf) || SHELVES[0]
  label = t(`books.${description}`)
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
              'absolute right-0 z-50',
              'mt-2 origin-top-right rounded-md text-right shadow-lg',
              'bg-white dark:bg-black',
              'ring-1 ring-black ring-opacity-5 focus:outline-none',
              'w-[170px]',
            ])}
          >
            <div className="space-y-1 p-1">
              {SHELVES.map(({ label, description, value, emoji }) => {
                const translatedDescription = t(`books.${description}`)
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
                        href={`/books?shelf=${value}`}
                        onClick={close}
                      >
                        <span data-umami-event="books-shelf-select">{translatedDescription}</span>
                        <Twemoji emoji={emoji} />
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
