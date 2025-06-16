'use client'

import ProjectCard from '~/components/cards/project'
import { PageHeader } from '~/components/ui/page-header'
import { Button } from '~/components/ui/button'
import { Twemoji } from '~/components/ui/twemoji'
import { useLanguageStore, getTranslation } from '~/store/language-store'
import type { Project } from '~/types/data'

interface Props {
  projects: Project[]
}

export default function ClientProjectSection({ projects }: Props) {
  const { language, translations } = useLanguageStore()
  const t = (key: string) => getTranslation(translations[language], key)

  const translatedProjects = projects.map((project) => ({
    ...project,
    title: t(`projects.${project.title}`),
    description: t(`projects.${project.description}`),
  }))

  const workProjects = translatedProjects.filter((p) => p.type === 'work')
  const sideProjects = translatedProjects.filter((p) => p.type === 'self')

  return (
    <>
      <PageHeader
        title={t('projects.title')}
        description={
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-[1.1rem] leading-[1.9rem] text-gray-700 dark:text-slate-400 sm:text-[1.15rem] sm:leading-[2rem] md:text-[1.25rem] md:leading-[2.2rem] lg:text-[1.3rem] lg:leading-[2.4rem]">
              {t('projects.description')}
            </p>
            <Button as="a" href="https://daheekim.app" target="_blank">
              <span className="text-[1.1rem] leading-[1.9rem] text-white sm:text-[1.15rem] sm:leading-[2rem] md:text-[1.25rem] md:leading-[2.2rem] lg:text-[1.3rem] lg:leading-[2.4rem]">
                {t('projects.portfolio')}
              </span>
              <Twemoji emoji="laptop" />
            </Button>
          </div>
        }
        className="border-b border-gray-200 dark:border-gray-700"
      />

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="max-w-full py-12">
          <h3 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-slate-300">
            {t('projects.work')}
          </h3>
          <div className="-m-4 mx-auto mt-8 flex flex-wrap">
            {workProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        <div className="max-w-full py-12">
          <h3 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-slate-300">
            {t('projects.sideProjects')}
          </h3>
          <div className="-m-4 mx-auto mt-8 flex flex-wrap">
            {sideProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
