'use client'

import clsx from 'clsx'
import { Twemoji } from '~/components/ui/twemoji'
import { useTranslation } from '~/hooks/use-translation'
import { useLanguageStore } from '~/store/language-store'

export function Greeting() {
  const { language } = useLanguageStore()

  const { t } = useTranslation()
  return (
    <div>
      <span
        className={clsx(
          'font-extrabold tracking-tight',
          'text-[40px] leading-[100px] leading-[60px] md:leading-[100px] sm768:text-[45px] lg900:text-[50px] xl1080:text-[55px] 2xl1280:text-[68px]',
          'bg-clip-text text-transparent',
          'animate-gradient-x bg-[length:200%_200%]',
          'bg-[linear-gradient(90deg,#ff7e5f,#feb47b,#6daf22,#86a8e7,#7f7fd5)]',
          'dark:bg-[linear-gradient(90deg,#ff9a9e,#fad0c4,#fbc2eb,#a1c4fd,#c2e9fb)]',
          'inline-block',
          `${language === 'ko' ? 'font-greeting-kr' : 'font-greeting'}`
        )}
      >
        {t('greeting')}
      </span>{' '}
      <Twemoji
        emoji="waving-hand"
        className={clsx(
          'inline-block origin-bottom animate-wave',
          'font-extrabold tracking-tight',
          'text-[40px] leading-[100px] leading-[60px] md:leading-[100px] sm768:text-[45px] lg900:text-[50px] xl1080:text-[55px] 2xl1280:text-[68px]',
          `${language === 'ko' ? 'font-greeting-kr' : 'font-greeting'}`
        )}
        size="base"
      />
    </div>
  )
}
