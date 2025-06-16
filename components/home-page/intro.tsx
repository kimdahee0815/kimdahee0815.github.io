'use client'

import { Twemoji } from '~/components/ui/twemoji'
import { useLanguageStore, getTranslation } from '~/store/language-store'
import parse from 'html-react-parser'

export function Intro() {
  const { language, translations } = useLanguageStore()

  const t = (key: string) => getTranslation(translations[language], key)
  return (
    <h1 className="text-neutral-900 dark:text-neutral-200">
      {parse(t('home.intro1'))}
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="flag-south-korea" />
      </span>
    </h1>
  )
}
