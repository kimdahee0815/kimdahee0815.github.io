import { genPageMetadata } from 'app/seo'
import { allBlogs } from 'contentlayer/generated'
import { ListLayout } from '~/layouts/list-layout'
import { POSTS_PER_PAGE } from '~/utils/const'
import { allCoreContent } from '~/utils/contentlayer'
import { sortPosts } from '~/utils/misc'

export const metadata = genPageMetadata({
  title: 'Blog',
  description:
    'Explore the world of software development with me! 😄 I share posts on common error fixes 🐞, essential programming concepts ✅, the latest tech news 📫, practical tutorials and how-tos 🔦, tool reviews and recommendations ⚒️, and curated learning resources ✒️. 🔍 Use the search to filter by title, content, or tags—or browse the index below!',
})

export default function BlogPage() {
  let posts = allCoreContent(sortPosts(allBlogs))
  let pageNumber = 1
  let initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  let pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All posts"
    />
  )
}
