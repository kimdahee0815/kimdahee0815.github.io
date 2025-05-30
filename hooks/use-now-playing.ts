import useSWR from 'swr'

import { fetcher } from '~/utils/fetcher'

import type { SpotifyNowPlayingData } from '~/types/data'

export default function useNowPlaying() {
  const { data } = useSWR<SpotifyNowPlayingData>('/api/spotify', fetcher)

  return data || { isPlaying: false }
}
