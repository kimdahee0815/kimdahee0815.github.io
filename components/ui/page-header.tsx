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
    <div className={clsx('space-y-2 py-6 md:space-y-5', className)}>
      <h1 className="md:leading-20 text-5xl font-extrabold leading-11 tracking-tight sm:text-4xl sm:leading-14 md:text-6xl">
        {title}
      </h1>
      <div className="text-gray-600 dark:text-gray-400 md:text-[1.3rem] md:leading-10">
        {description}
      </div>
      {children}
    </div>
  )
}
