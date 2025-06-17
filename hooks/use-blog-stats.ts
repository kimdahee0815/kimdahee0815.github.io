import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import { mutate } from 'swr'

import { fetcher } from '~/utils/fetcher'
import { type Stats, StatsType } from '@prisma/client'

export function useBlogStats(type: StatsType, slug: string) {
  const { data, isLoading } = useSWR<Stats>(`/api/stats?slug=${slug}&type=${type}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  const { views, loves, applauses, ideas, bullseye } = data || {}

  const stats: Stats = {
    type,
    slug,
    ideas: ideas || 0,
    views: views || 0,
    loves: loves || 0,
    applauses: applauses || 0,
    bullseye: bullseye || 0,
  }

  return [stats, isLoading]
}

export function useUpdateBlogStats() {
  const { trigger } = useSWRMutation(
    '/api/stats',
    async (url: string, { arg }: { arg: Partial<Stats> & { type: StatsType; slug: string } }) => {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(arg),
        headers: { 'Content-Type': 'application/json' },
      })

      if (!res.ok) throw new Error('Failed to update stats')

      mutate(`/api/stats?slug=${arg.slug}&type=${arg.type}`)

      return res
    }
  )

  return trigger
}
