import type { Blog, Snippet } from '~/.contentlayer/generated'
import { ProfileCard } from '~/components/cards/profile'
import { Container } from '~/components/ui/container'
import { Twemoji } from '~/components/ui/twemoji'
import type { CoreContent } from '~/types/data'
import { Greeting } from './greeting'
import { Intro } from './intro'
import { LatestPosts } from './latest-posts'
import { BlogLinks } from './links'
import { TypedBios } from './typed-bios'

export function Home({
  posts,
  snippets,
}: {
  posts: CoreContent<Blog>[]
  snippets: CoreContent<Snippet>[]
}) {
  return (
    <Container as="div" className="pt-4 lg:pt-12">
      <div className="py-6 md:pb-8 xl:grid xl:grid-cols-11">
        <div className="space-y-4 md:space-y-6 md:pr-8 xl:col-span-7">
          <Greeting />
          <div className="text-base leading-7 text-gray-600 dark:text-gray-400 md:text-[1.5rem] md:leading-10">
            <Intro />
            <TypedBios />
            <div className="mb-6 mt-6 md:mb-8">
              <p>I began coding in 2017, the year I started college.</p>
              <p>
                While majoring in English Literature, I found myself curious about how computers
                work at a fundamental level.
              </p>
              <p>
                That curiosity led me to pursue Electronics Engineering and Computer Science
                alongside my main field of study.
              </p>
              <p>In 2023, I landed my first job as a Full-Stack Developer!</p>
              <p>
                I created this blog to sharpen my skills and share what I've learned along the way.
              </p>
              <p>I hope you find something helpful here! 😊</p>
              <p>Thanks for visitng 🙏🏻</p>
            </div>
            <BlogLinks />
            <p className="my-6 flex md:my-8">
              <span className="mr-2">Happy reading</span>
              <Twemoji emoji="clinking-beer-mugs" />
            </p>
          </div>
        </div>
        <div className="hidden pl-4 pt-8 xl:col-span-4 xl:block">
          <ProfileCard />
        </div>
      </div>
      <LatestPosts posts={posts} snippets={snippets} />
      {/* {SITE_METADATA.newsletter?.provider && (
        <div className="flex items-center justify-center py-4 lg:py-10">
          <NewsletterForm />
        </div>
      )} */}
    </Container>
  )
}
