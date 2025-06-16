'use client'

import clsx from 'clsx'
import { useLanguageStore } from '~/store/language-store'

export function ClientFontWrapper({ children }: { children: React.ReactNode }) {
  const { language } = useLanguageStore()

  const fontClass = clsx(language === 'ko' ? 'font-ko' : 'font-en')

  return <div className={fontClass}>{children}</div>
}
