import { SITE_METADATA } from '~/data/site-metadata'
import { BriefcaseBusiness, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { Fragment } from 'react'
import { Twemoji } from '~/components/ui/twemoji'
import Link from '~/components/ui/Link'

function getAccountHandle(url = '') {
  let lastPart = url.split('/').pop()
  if (lastPart) {
    return lastPart
  }
  return url
}

const SOCIALS = [
  {
    platform: 'github',
    handle: getAccountHandle(SITE_METADATA.github),
    href: SITE_METADATA.github,
    Icon: () => <Github size={20} strokeWidth={1.5} />,
    umamiEvent: 'profile-card-github',
  },
  {
    platform: 'linkedin',
    handle: 'kimdahee0815',
    href: SITE_METADATA.linkedin,
    Icon: () => <Linkedin size={20} strokeWidth={1.5} />,
    umamiEvent: 'profile-card-linkedin',
  },
]

export function ProfileCardInfo() {
  return (
    <div className="hidden py-4 md:block md:px-5">
      <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">Dahee Kim</h3>
      <h5 className="py-2 text-xl text-gray-500 dark:text-slate-400">
        Self-Taught Developer | Learner | Creator
      </h5>
      <div className="mb-2 mt-4 space-y-4">
        <div className="flex items-center text-gray-700 dark:text-slate-200">
          <BriefcaseBusiness strokeWidth={1.5} size={20} />
          <p className="flex items-center px-2 text-lg">
            Full-Stack Developer @{' '}
            <a
              target="_blank"
              href="https://github.com/Think-Storm"
              rel="noreferrer"
              className="text-lg underline-offset-4 hover:underline"
            >
              Thinkstorm
            </a>
          </p>
        </div>
        <div className="flex items-center text-gray-700 dark:text-slate-200">
          <MapPin strokeWidth={1.5} size={20} />
          <p className="px-2 text-lg">
            South Korea - Incheon
            <span className="absolute ml-1 inline-flex pt-px">
              <Twemoji emoji="flag-south-korea" />
            </span>
          </p>
        </div>
        <div className="flex items-center text-gray-700 dark:text-slate-200">
          <Mail strokeWidth={1.5} size={20} />
          <Link
            className="flex items-center gap-1 px-2 text-lg hover:underline"
            href={`mailto:${SITE_METADATA.email}`}
            data-disable-tilt
          >
            {SITE_METADATA.email}
          </Link>
        </div>
        <div className="flex items-center gap-2.5 text-lg text-gray-700 dark:text-slate-200">
          {SOCIALS.map(({ platform, handle, href, Icon, umamiEvent }, idx) => (
            <Fragment key={platform}>
              <a
                target="_blank"
                href={href}
                rel="noreferrer"
                className="flex items-center underline-offset-4 hover:underline"
                data-umami-event={umamiEvent}
                data-disable-tilt
              >
                <Icon />
                <span className="ml-px text-gray-500">/</span>
                <span className="ml-1 truncate">{handle}</span>
              </a>
              {idx !== SOCIALS.length - 1 && (
                <span className="text-gray-400 dark:text-slate-500">|</span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
