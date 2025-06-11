'use client'

import NextLink from 'next/link'
import type { LinkProps } from 'next/link'
import type { AnchorHTMLAttributes } from 'react'
import clsx from 'clsx'

type Props = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    inline?: boolean
  }

const Link = ({ href, className, children, inline = true, ...rest }: Props) => {
  const isInternalLink = typeof href === 'string' && (href.startsWith('/') || href.startsWith('#'))

  const baseClass = inline ? 'inline-flex whitespace-nowrap' : 'break-all'
  const mergedClassName = clsx(baseClass, className)

  if (isInternalLink) {
    return (
      <NextLink href={href} {...rest} className={mergedClassName}>
        {children}
      </NextLink>
    )
  }

  return (
    <a href={href} className={mergedClassName} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  )
}

export default Link
