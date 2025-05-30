import clsx from 'clsx'
import { Twemoji } from '~/components/ui/twemoji'

export function Greeting() {
  return (
    <div>
      <span
        className={clsx(
          'font-greeting font-extrabold tracking-tight',
          'text-[40px] leading-[60px] md:text-[68px] md:leading-[100px]',
          'bg-clip-text text-transparent',
          'animate-gradient-x bg-[length:200%_200%]',
          'bg-[linear-gradient(90deg,#ff7e5f,#feb47b,#6daf22,#86a8e7,#7f7fd5)]',
          'dark:bg-[linear-gradient(90deg,#ff9a9e,#fad0c4,#fbc2eb,#a1c4fd,#c2e9fb)]',
          'inline-block'
        )}
      >
        Hey, Everyone!{' '}
      </span>{' '}
      <Twemoji
        emoji="waving-hand"
        className={clsx(
          'inline-block origin-bottom animate-wave',
          'font-greeting font-extrabold tracking-tight',
          'text-[40px] leading-[60px] md:text-[68px] md:leading-[100px]'
        )}
        size="base"
      />
    </div>
  )
}
