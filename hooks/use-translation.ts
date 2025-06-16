'use client'

import { getTranslation, useLanguageStore } from '~/store/language-store'

export function useTranslation() {
  const { language, translations } = useLanguageStore()
  const t = (key: string) => getTranslation(translations[language], key)
  return { t }
}
