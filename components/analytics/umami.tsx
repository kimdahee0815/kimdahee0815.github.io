import Script from 'next/script.js'

interface UmamiAnalyticsProps {
  websiteId?: string
  src?: string
}

export function UmamiAnalytics({ websiteId, src = 'https://cloud.umami.is/script.js' }: UmamiAnalyticsProps) {
  if (websiteId) {
    return <Script defer src={src} data-website-id={websiteId} />
  }
  return null
}
