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
import PopularTags from './PopularTags'

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
          <div className="text-[1.1rem] leading-[1.9rem] text-gray-600 dark:text-slate-300 sm768:text-[1.2rem] sm768:leading-[2.1rem] lg900:text-[1.3rem] lg900:leading-[2.2rem] xl1080:text-[1.4rem] xl1080:leading-[2.3rem] 2xl1280:text-[1.5rem] 2xl1280:leading-[2.5rem]">
            <Intro />
            <TypedBios />
            <div className="mb-6 mt-2 md:mb-8 md:mt-2">
              <p>
                Developer who values{' '}
                <b className="font-medium">curiosity, clarity, and compassion</b>.
              </p>
              <p>
                Always curious about <b className="font-medium">how computers work</b> from the
                ground up and enjoy exploring the logic behind the scenes.
              </p>
              <p>
                Thinking about logic isn't always easy, but the excitement you feel when you
                discover something meaningful is truly rewarding! 🤩😄
              </p>
              <p>
                My main goal is to be a <b className="font-medium">developer & writer</b>, so I can
                share what I've learned along the way and help others.
              </p>
              <p>That's the main reason I created this blog.</p>
              <p>I hope you find something helpful here!🔮</p>
              <p>Thanks for visiting 🙏🏻 & Enjoy reading 🍻😊</p>
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
      <PopularTags />
      <LatestPosts posts={posts} snippets={snippets} />
      {/* {SITE_METADATA.newsletter?.provider && (
        <div className="flex items-center justify-center py-4 lg:py-10">
          <NewsletterForm />
        </div>
      )} */}
    </Container>
  )
}
