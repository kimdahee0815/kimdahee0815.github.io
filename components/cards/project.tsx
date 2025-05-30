import type { GithubRepository } from '~/types/data'
import type { ProjectCardProps } from '~/types/components'
import clsx from 'clsx'
import Zoom from '~/components/ui/Zoom'
import Link from '~/components/ui/Link'
import type { BrandsMap } from '~/components/ui/brand'
import { Brand } from '~/components/ui/brand'
import { Image } from '~/components/ui/Image'
import GithubRepo from '~/components/projects/GithubRepo'

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, imgSrc, url, repo, builtWith } = project

  const repository = repo as GithubRepository | undefined

  const href = repository?.url || url

  return (
    <div className="md max-w-[544px] p-4 md:w-1/2">
      <div
        className={`${
          imgSrc && 'h-full'
        } flex h-full flex-col overflow-hidden rounded-lg border border-transparent shadow-nextjs dark:shadow-nextjs-dark`}
      >
        <Zoom>
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-60"
            width={1088}
            height={612}
          />
        </Zoom>

        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
            {repository?.description || description}
          </p>
          <div className="space-y-1.5">
            <div className="text-xs text-gray-600 dark:text-gray-400">Stack</div>
            <div className="flex h-6 flex-wrap items-center gap-1.5">
              {builtWith?.map((tool) => {
                return (
                  <Brand
                    key={tool}
                    name={tool as keyof typeof BrandsMap}
                    iconClassName={clsx(tool === 'Pygame' ? 'h-4' : 'h-4 w-4')}
                  />
                )
              })}
            </div>
          </div>
          <div className="mb-3 flex flex-wrap space-x-1.5">
            {builtWith?.map((tool, index) => {
              return (
                <span key={index} className="font-semibold text-gray-600 dark:text-gray-300">
                  {tool}
                  {index !== builtWith.length - 1 && ', '}
                </span>
              )
            })}
          </div>
          {repository ? (
            <GithubRepo repo={repository} />
          ) : (
            href && (
              <Link
                href={href}
                className="text-primary text-base font-medium leading-6 hover:text-sky-600 dark:hover:text-sky-400"
                aria-label={`Link to ${title}`}
              >
                Learn more &rarr;
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
