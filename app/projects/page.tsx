import { genPageMetadata } from 'app/seo'
import ProjectCard from '~/components/cards/project'
import { Container } from '~/components/ui/container'
import { PageHeader } from '~/components/ui/page-header'
import { PROJECTS } from '~/data/projects'
import { fetchRepoData } from '~/servers/github.server'
import { Twemoji } from '~/components/ui/twemoji'
import { Button } from '~/components/ui/button'

export let metadata = genPageMetadata({ title: 'Projects' })

export default async function Projects() {
  const projectsWithRepoData = await Promise.all(
    PROJECTS.map(async (p) => {
      if (p.repo && typeof p.repo === 'string') {
        const repoData = await fetchRepoData(p.repo as string)
        
        if (repoData) {
          return { ...p, repoData }
        }
      }
      return p;
    })
  )

  const workProjects = projectsWithRepoData.filter(({ type }) => type === 'work')
  const sideProjects = projectsWithRepoData.filter(({ type }) => type === 'self')

  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="Projects"
        description={
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-xl">
              This is a showcase of full-stack / frontend web applications I built. Each project is either fully deployed or presented with a preview and source code.
            </p>
            <Button as="a" href="https://daheekim.app" target="_blank">
              <span className="text-xl">View Full Portfolio</span>
              <Twemoji emoji="laptop" />
            </Button>
          </div>
        }
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="py-12 max-w-full">
          <h3 className="mb-4 text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-slate-300">
            Work
          </h3>
          <div className="-m-4 flex mt-8 flex-wrap mx-auto">
            {workProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        <div className="py-12 max-w-full">
          <h3 className="mb-4 text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-slate-300">
            Side projects
          </h3>
          <div className="-m-4 mt-8 flex flex-wrap mx-auto">
            {sideProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
