import { fetchRepoData } from '~/servers/github.server'
import { Container } from '~/components/ui/container'
import ClientProjectSection from '~/app/projects/client-project-section'
import { PROJECTS } from '~/data/projects'

export const metadata = {
  title: 'Projects',
}

export default async function ProjectsPage() {
  const projectsWithRepoData = await Promise.all(
    PROJECTS.map(async (p) => {
      if (p.repo && typeof p.repo === 'string') {
        const repoData = await fetchRepoData(p.repo)
        if (repoData) return { ...p, repoData }
      }
      return p
    })
  )

  return (
    <Container className="pt-4 lg:pt-12">
      <ClientProjectSection projects={projectsWithRepoData} />
    </Container>
  )
}
