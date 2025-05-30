'use client'

import { clsx } from 'clsx'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Image } from '~/components/ui/Image'
import { SpotifyNowPlaying } from '~/components/ui/now-playing'
import { SITE_METADATA } from '~/data/site-metadata'
import { ProfileCardInfo } from './profile-info'

export function ProfileCard() {
  let ref = useRef<HTMLDivElement>(null)
  let [style, setStyle] = useState<React.CSSProperties>({})
 let [disableTilt, setDisableTilt] = useState(false)

let onMouseMove = useCallback((e: MouseEvent) => {
  if (!ref.current || window.innerWidth < 1280 || disableTilt) return

  const { clientX, clientY } = e
  const { width, height, x, y } = ref.current.getBoundingClientRect()
  const mouseX = clientX - x
  const mouseY = clientY - y
  const rotateMin = -6
  const rotateMax = 6

  const rotate = {
    x: rotateMax - (mouseY / height) * (rotateMax - rotateMin),
    y: rotateMin + (mouseX / width) * (rotateMax - rotateMin),
  }

  setStyle({
    transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
  })
}, [disableTilt])

let onMouseLeave = useCallback(() => {
  setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' })
}, [])

useEffect(() => {
  const el = ref.current
  if (!el) return

  el.addEventListener('mousemove', onMouseMove)
  el.addEventListener('mouseleave', onMouseLeave)

  const links = el.querySelectorAll('a, [data-disable-tilt]')
  const handleEnter = () => setDisableTilt(true)
  const handleLeave = () => setDisableTilt(false)

  links.forEach((link) => {
    link.addEventListener('mouseenter', handleEnter)
    link.addEventListener('mouseleave', handleLeave)
  })

  return () => {
    el.removeEventListener('mousemove', onMouseMove)
    el.removeEventListener('mouseleave', onMouseLeave)
    links.forEach((link) => {
      link.removeEventListener('mouseenter', handleEnter)
      link.removeEventListener('mouseleave', handleLeave)
    })
  }
}, [onMouseMove, onMouseLeave])

  useEffect(() => {
  const links = ref.current?.querySelectorAll('a, [data-disable-tilt]')
  if (!links) return

  const disable = () => setDisableTilt(true)
  const enable = () => setDisableTilt(false)

  links.forEach((el) => {
    el.addEventListener('mouseenter', disable)
    el.addEventListener('mouseleave', enable)
  })

  return () => {
    links.forEach((el) => {
      el.removeEventListener('mouseenter', disable)
      el.removeEventListener('mouseleave', enable)
    })
  }
}, [])

  return (
    <div
      className="z-10 mb-8 scale-100 rounded-xl transition-all duration-200 ease-out hover:z-50 md:mb-0 md:hover:scale-[1.02]"
      style={{ perspective: '800px' }}
      ref={ref}
    >
      <div
        style={style}
        className={clsx(
          'flex flex-col overflow-hidden transition-all duration-200 ease-out md:rounded-lg',
          'bg-white shadow-demure dark:bg-dark dark:shadow-mondegreen',
          'outline outline-1 outline-gray-100 dark:outline-gray-600'
        )}
      >
        <Image
          src={SITE_METADATA.avatar}
          alt={SITE_METADATA.title}
          width={550}
          height={450}
          style={{
            objectPosition: '50% 15%',
            aspectRatio: '383/400',
          }}
          loading="eager"
        />
        <SpotifyNowPlaying
          className={clsx([
            'bg-gray-900 px-3 py-1.5 xl:px-5',
            '[--song-color:theme(colors.gray.200)]',
            '[--artist-color:theme(colors.gray.400)]',
          ])}
        />
        <ProfileCardInfo />
        <span className="h-1.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
      </div>
    </div>
  )
}
