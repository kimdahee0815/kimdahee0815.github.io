'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

interface Props {
  onTagChange: (tag: string) => void
}

export function ClientOnlySearchParams({ onTagChange }: Props) {
  const searchParams = useSearchParams()
  useEffect(() => {
    const tag = searchParams?.get('tag')
    if (tag) {
      onTagChange(tag)
    }
  }, [searchParams, onTagChange])

  return null
}
