import type { MDXComponents } from 'mdx/types'
import { Image, type ImageProps } from '~/components/ui/Image'
import Zoom from '~/components/ui/Zoom'
import Link from '~/components/ui/Link'
import { Twemoji } from '~/components/ui/twemoji'
import { CodeTitle } from './code-title'
import { Pre } from './pre'
import { TableWrapper } from './table-wrapper'

export const MDX_COMPONENTS: MDXComponents = {
  Image: ({ alt, ...rest }: ImageProps) => {
    return (
      <Zoom>
        <Image alt={alt} {...rest} />
      </Zoom>
    )
  },
  Twemoji,
  CodeTitle,
  a: Link,
  pre: Pre,
  table: TableWrapper,
}
