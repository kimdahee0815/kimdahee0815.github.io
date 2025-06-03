import clsx from 'clsx'

export function PageHeader({
  title,
  description,
  children,
  className,
}: {
  title: string
  description: React.ReactNode
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div className={clsx('space-y-2 py-5 md:space-y-4', className)}>
      <h1 className="text-[2rem] leading-[2.6rem] font-extrabold tracking-tight
        sm:text-[2.25rem] sm:leading-[2.9rem]
        md:text-[2.5rem] md:leading-[3.2rem]
        lg:text-[2.75rem] lg:leading-[3.5rem]
        xl:text-[3rem] xl:leading-[3.8rem]">
        {title}
      </h1>
      <div className="text-[1.1rem] leading-[1.9rem] text-gray-700 dark:text-slate-400
      sm:text-[1.15rem] sm:leading-[2rem]
      md:text-[1.25rem] md:leading-[2.2rem]
      lg:text-[1.3rem] lg:leading-[2.4rem]">
        {description}
      </div>
      {children}
    </div>
  )
}
