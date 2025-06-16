import clsx from 'clsx'
import { Minus, Plus } from 'lucide-react'
import { Image } from '~/components/ui/Image'
import Link from '~/components/ui/Link'
import { Twemoji } from '~/components/ui/twemoji'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { useLanguageStore, getTranslation } from '~/store/language-store'
import parse from 'html-react-parser'
import type { JSX } from 'react'

type ExperienceItem = {
  org: string
  url: string
  logo: string
  start: string
  end: string
  title: string
  icon: string
  event: string
  details: () => JSX.Element
}

export function CareerTimeline() {
  const { language, translations } = useLanguageStore()

  const t = (key: string) => getTranslation(translations[language], key)
  const EXPERIENCES = [
    {
      org: t('about.thinkstormCareerOrg'),
      url: 'https://thinkstorm.app',
      logo: '/static/images/think_storm_logo.jpg',
      start: t('about.thinkstormCareerStart'),
      end: t('about.thinkstormCareerEnd'),
      title: t('about.thinkstormCareerTitle'),
      icon: 'briefcase',
      event: 'career-Thinkstorm',
      details: () => {
        return (
          <ul className="[&>li]:my-2 [&>li]:pl-0">{parse(t('about.thinkstormCareerDetail'))}</ul>
        )
      },
    },
    {
      org: t('about.sherpasoftCareerOrg'),
      url: 'https://sherpasoft.com/',
      logo: '/static/images/sherpasoft_logo.jpg',
      start: t('about.sherpasoftCareerStart'),
      end: t('about.sherpasoftCareerEnd'),
      title: t('about.sherpasoftCareerTitle'),
      icon: 'man-technologist',
      event: 'career-Sherpasoft',
      details: () => {
        return (
          <ul className="[&>li]:my-2 [&>li]:pl-0">{parse(t('about.sherpasoftCareerDetail'))}</ul>
        )
      },
    },
    {
      org: t('about.allraFinTechCareerOrg'),
      url: 'https://www.allra.co.kr/',
      logo: '/static/images/allra_logo.jpg',
      start: t('about.allraFinTechCareerStart'),
      end: t('about.allraFinTechCareerEnd'),
      title: t('about.allraFinTechCareerTitle'),
      icon: 'man-technologist',
      event: 'career-Allra',
      details: () => {
        return (
          <ul className="[&>li]:my-2 [&>li]:pl-0">{parse(t('about.allraFinTechCareerDetail'))}</ul>
        )
      },
    },
    {
      org: t('about.multiCampusCareerOrg'),
      url: 'https://www.multicampus.com',
      logo: '/static/images/multicampus-logo.png',
      start: t('about.multiCampusCareerStart'),
      end: t('about.multiCampusCareerEnd'),
      title: t('about.multiCampusCareerTitle'),
      icon: 'man-technologist',
      event: 'career-Multicampus',
      details: () => {
        return (
          <ul className="[&>li]:my-2 [&>li]:pl-0">{parse(t('about.multiCampusCareerDetail'))}</ul>
        )
      },
    },
    {
      org: t('about.samsungSDSCareerOrg'),
      url: 'https://www.samsungsds.com/',
      logo: '/static/images/samsung_sds_logo.jpg',
      start: t('about.samsungSDSCareerStart'),
      end: t('about.samsungSDSCareerEnd'),
      title: t('about.samsungSDSCareerTitle'),
      icon: 'man-technologist',
      event: 'career-SDS',
      details: () => {
        return (
          <ul className="[&>li]:my-2 [&>li]:pl-0">{parse(t('about.samsungSDSCareerDetail'))}</ul>
        )
      },
    },
    {
      org: t('about.incheonNationalUniversityCareerOrg'),
      url: 'https://www.inu.ac.kr/',
      logo: '/static/images/incheon_national_uni_logo.jpg',
      start: t('about.incheonNationalUniversityCareerStart'),
      end: t('about.incheonNationalUniversityCareerEnd'),
      title: t('about.incheonNationalUniversityCareerTitle'),
      icon: 'man-student',
      event: 'career-inu',
      details: () => {
        return (
          <ul className="[&>li]:my-2 [&>li]:pl-0">
            {parse(t('about.incheonNationalUniversityCareerDetail'))}
          </ul>
        )
      },
    },
  ]
  return (
    <ul className="m-0 list-none p-0">
      {EXPERIENCES.map((exp, idx) => (
        <li key={exp.url} className="m-0 p-0">
          <TimelineItem exp={exp} last={idx === EXPERIENCES.length - 1} />
        </li>
      ))}
    </ul>
  )
}

function TimelineItem({ exp, last }: { exp: ExperienceItem; last?: boolean }) {
  let { org, title, icon, url, logo, start, end, event, details: Details } = exp
  return (
    <div
      className={clsx(
        'group/timeline-item',
        'relative -mx-3 flex flex-row items-start gap-3 rounded-lg p-3',
        'cursor-pointer bg-transparent transition-colors hover:bg-slate-100 dark:hover:bg-slate-800',
        !last && [
          'before:top-15 before:absolute before:left-9',
          'before:h-full before:w-px',
          'before:bg-gray-300 dark:before:bg-gray-500',
        ]
      )}
    >
      <Image
        src={logo}
        alt={org}
        className="h-12 w-12 shrink-0 rounded-md"
        style={{ objectFit: 'contain' }}
        width={200}
        height={200}
      />
      <details className="w-full [&_.minus]:open:block [&_.plus]:open:hidden">
        <summary className="relative pr-10 marker:content-none">
          <Plus
            size={18}
            className={clsx([
              'plus',
              'group-hover/timeline-item:visible md:invisible',
              'absolute right-1 top-1',
              'transition-transform duration-300 ease-in-out',
              'text-gray-600 dark:text-slate-500',
            ])}
            data-umami-event={`${event}-expand`}
          />
          <Minus
            size={18}
            className={clsx([
              'minus hidden',
              'absolute right-1 top-1',
              'transition-transform duration-300 ease-in-out',
              'text-gray-600 dark:text-slate-500',
            ])}
            data-umami-event={`${event}-collapse`}
          />
          <div className="flex flex-col">
            <div className="line-clamp-1 text-sm tabular-nums text-gray-500 dark:text-slate-400">
              <span>{start}</span> – <span>{end}</span>
            </div>
            <Link
              href={url}
              className="line-clamp-1 w-fit text-[1.1rem] font-semibold leading-10 leading-[1.9rem] text-gray-700 text-gray-900 no-underline hover:text-gray-900 dark:text-slate-400 dark:text-white dark:hover:text-white sm:text-[1.1rem] sm:leading-[2rem] md:text-[1.2rem] md:leading-[2.2rem] lg:text-[1.3rem] lg:leading-[2.4rem]"
            >
              <GrowingUnderline data-umami-event={event}>{org}</GrowingUnderline>
            </Link>
            <div className="flex items-center gap-1 pt-1 text-[1.1rem] leading-[1.9rem] text-gray-700 dark:text-slate-400 sm:text-[1.05rem] sm:leading-[2rem] md:text-[1.15rem] md:leading-[2.2rem] lg:text-[1.1rem] lg:leading-[2.4rem]">
              <Twemoji emoji={icon} className="!-mt-1" />
              <span>{title}</span>
            </div>
          </div>
        </summary>
        <div className="pt-1 text-[1.1rem] leading-8 leading-[1.9rem] text-gray-700 dark:text-slate-400 sm:text-[1.1rem] sm:leading-[2rem] md:text-[1.15rem] md:leading-[2.2rem] lg:text-[1.2rem] lg:leading-[2.4rem]">
          <Details />
        </div>
      </details>
    </div>
  )
}
