import clsx from 'clsx'

export function StaggeredBounceText({ text }: { text: string }) {
  return (
    <div className="inline-flex">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={clsx(
            'font-greeting font-extrabold tracking-tight',
            'text-[40px] leading-[60px] md:text-[68px] md:leading-[100px]',
            'bg-clip-text text-transparent',
            'animate-gradient-x bg-[length:200%_200%]',
            'bg-[linear-gradient(90deg,#ff7e5f,#feb47b,#6daf22,#86a8e7,#7f7fd5)]',
            'dark:bg-[linear-gradient(90deg,#ff9a9e,#fad0c4,#fbc2eb,#a1c4fd,#c2e9fb)]',
            'inline-block',
            'animate-bounce-stagger',
            'text-[40px] leading-[60px] md:text-[68px] md:leading-[100px]',
            'font-greeting font-extrabold tracking-tight'
          )}
          style={{ animationDelay: `${i * 100}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  )
}
