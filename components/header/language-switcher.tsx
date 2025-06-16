'use client'

import { Menu } from '@headlessui/react'
import { useLanguageStore } from '~/store/language-store'
import { Twemoji } from '~/components/ui/twemoji'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageStore()

  return (
    <div className="flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div className="flex items-center justify-center rounded p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700">
          <Menu.Button className="text-sm font-medium">{language.toUpperCase()}</Menu.Button>
        </div>
        <Menu.Items className="absolute right-0 mt-2 flex w-[110px] origin-top-right flex-col items-center justify-items-center rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? 'bg-gray-100 dark:bg-gray-700' : ''
                } block w-full px-4 py-2 text-center text-sm`}
                onClick={() => setLanguage('en')}
              >
                English <Twemoji emoji="flag-united-kingdom"></Twemoji>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? 'bg-gray-100 dark:bg-gray-700' : ''
                } block w-full px-4 py-2 text-center text-sm`}
                onClick={() => setLanguage('ko')}
              >
                한국어 <Twemoji emoji="flag-south-korea"></Twemoji>
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  )
}
