import { map } from 'lodash'

import popularTags from '~/data/popularTags'

import Link from '~/components/ui/Link'
import BrandIcon from '~/components/ui/BrandIcon'

const PopularTags = () => {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 py-6 md:space-y-5">
        <h1 className="text-2xl font-bold sm:text-2xl sm:leading-10 md:text-4xl">Popular Tags</h1>
        <p className="mt-5 pb-1 text-[1.2rem] leading-[2rem] text-gray-700 dark:text-slate-300 sm768:text-[1.3rem] lg900:text-[1.4rem] xl1080:text-[1.4rem] xl1080:leading-[2.2rem] 2xl1280:text-[1.5rem] 2xl1280:leading-[2.4rem]">
          Popular tags feature the most widely favored topics 🤠
        </p>
      </div>

      <div className="popular-tags max-w-8xl mx-auto mb-14 grid grid-cols-2 gap-6 py-4 sm:grid-cols-3 lg:grid-cols-4">
        {map(popularTags, (popularTag) => {
          const { slug, iconType, href, title } = popularTag

          const className = `${slug} flex w-[210px] min-h-[60px] items-center justify-center space-x-2 rounded-lg py-3 text-white text-sm font-medium shadow transition-transform duration-200 hover:scale-[1.02]`

          return (
            <Link key={slug} href={href} className={className}>
              <BrandIcon type={iconType} className="h-5 w-5" />
              <div className="text-2xl text-white">{title}</div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default PopularTags
