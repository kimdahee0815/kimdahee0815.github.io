'use client'

import { clsx } from 'clsx'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { Twemoji } from '~/components/ui/twemoji'
import { useLanguageStore, getTranslation } from '~/store/language-store'
import parse from 'html-react-parser'

function createTypedInstance(el: HTMLElement) {
  return new Typed(el, {
    stringsElement: '#bios',
    typeSpeed: 40,
    backSpeed: 10,
    loop: true,
    backDelay: 1000,
  })
}

export function TypedBios() {
  const { language, translations } = useLanguageStore()

  const t = (key: string) => getTranslation(translations[language], key)

  let el = useRef(null)
  let typed = useRef<Typed | null>(null)

  useEffect(() => {
    if (el.current) {
      typed.current?.destroy()
      typed.current = createTypedInstance(el.current)
    }
  }, [language, translations])

  return (
    <div
      className={clsx([
        'flex min-h-[2.5rem] items-center gap-0.5',
        [
          '[&_.typed-cursor]:inline-block',
          '[&_.typed-cursor]:w-2',
          '[&_.typed-cursor]:h-5.5',
          '[&_.typed-cursor]:text-transparent',
          '[&_.typed-cursor]:bg-slate-800',
          'dark:[&_.typed-cursor]:bg-slate-100',
        ],
      ])}
    >
      <ul id="bios" className="hidden">
        {parse(t('home.typedbios'))}
        {language === 'ko' ? (
          <li>
            언어 배우는 것을 매우 좋아해요. 현재 스페인어<Twemoji emoji="flag-spain"></Twemoji>를
            배우고 있어요.
          </li>
        ) : (
          <li>
            Love learning languages. Currently learning Spanish
            <Twemoji emoji="flag-spain"></Twemoji>.
          </li>
        )}
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
