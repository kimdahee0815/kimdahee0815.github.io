import clsx from 'clsx'
import { Minus, Plus } from 'lucide-react'
import { Image } from '~/components/ui/Image'
import Link from '~/components/ui/Link'
import { Twemoji } from '~/components/ui/twemoji'
import { GrowingUnderline } from '~/components/ui/growing-underline'

const EXPERIENCES = [
  {
    org: 'Thinkstorm',
    url: 'https://thinkstorm.app',
    logo: '/static/images/think_storm_logo.jpg',
    start: 'Mar 2024',
    end: 'Present',
    title: 'Full-Stack Developer',
    icon: 'briefcase',
    event: 'career-Thinkstorm',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Designed and implemented <strong>Redis-based rate-limiting and caching systems</strong>,
            enhancing application security and performance.
          </li>
          <li>
            Configured <strong>CI/CD pipelines</strong> incorporating <strong>Jest testing</strong>{' '}
            for streamlined deployment processes.
          </li>
          <li>
            Built <strong>JWT authentication systems</strong> to secure application endpoints.
          </li>
          <li>
            <strong>Led developer onboarding</strong> processes and mentored new team members.
          </li>
          <li>
            <strong>Rapidly learned and implemented unfamiliar technologies</strong> to meet project
            requirements.
          </li>
        </ul>
      )
    },
  },
  {
    org: 'Sherpasoft',
    url: 'https://sherpasoft.com/',
    logo: '/static/images/sherpasoft_logo.jpg',
    start: 'Jul 2023',
    end: 'Mar 2024',
    title: 'Full-Stack Developer',
    icon: 'man-technologist',
    event: 'career-Sherpasoft',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            <strong>Spearheaded internal system improvements</strong>, reducing weekly meeting time
            from 4 to 1 hour and saving <strong>210 person-hours monthly</strong>.
          </li>
          <li>
            Researched and presented <strong>Kafka implementation</strong> for large scale data
            processing, resulting in adoption of <strong>ActiveMQ</strong>.
          </li>
          <li>
            Collaborated with cross-functional teams to resolve{' '}
            <strong>conflicting requirements</strong> and facilitate consensus based solutions.
          </li>
          <li>
            Developed <strong>database monitoring systems</strong> using{' '}
            <strong>Java, Spring Boot, and JSP</strong> for enterprise clients.
          </li>
          <li>
            Worked with <strong>PostgreSQL, Oracle, MySQL, MongoDB, MariaDB, SAP HANA</strong>.
          </li>
          <li>
            Managed <strong>Linux server environments</strong> for database monitoring and
            performance optimization.
          </li>
        </ul>
      )
    },
  },
  {
    org: 'Allra Fin-Tech',
    url: 'https://www.allra.co.kr/',
    logo: '/static/images/allra_logo.jpg',
    start: 'Jun 2023',
    end: 'Jul 2024',
    title: 'Full-Stack Developer Intern',
    icon: 'man-technologist',
    event: 'career-Allra',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Contributed to <strong>fintech payment processing systems</strong> within a professional
            development environment.
          </li>
          <li>
            Practiced <strong>behavior-driven development</strong> using <strong>JUnit 5</strong>.
          </li>
          <li>
            <strong>Incorporated feedback from senior developers</strong> to improve code quality
            and grow professional practices.
          </li>
          <li>
            <strong>Quickly adapted</strong> to the company's tech stack and development workflows
            within one month.
          </li>
          <li>
            Worked with <strong>JSP, JavaScript, HTML/CSS</strong> (frontend) and{' '}
            <strong>Java, Spring Data JPA, MariaDB</strong> (backend).
          </li>
          <li>
            Observed how <strong>financial solutions</strong> help online retailers solve{' '}
            <strong>cash flow challenges</strong>.
          </li>
        </ul>
      )
    },
  },
  {
    org: 'MultiCampus - Full Stack Developer Bootcamp',
    url: 'https://www.multicampus.com',
    logo: '/static/images/multicampus-logo.png',
    start: 'Jan 2023',
    end: 'Jun 2023',
    title: 'Student at Multicampus',
    icon: 'man-technologist',
    event: 'career-Multicampus',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Built{' '}
            <a target="_blank" href="https://net-flix-clone-dahee-kim.netlify.app/">
              <strong>Netflix And Chill</strong>
            </a>{' '}
            (Full-Stack Developer)
          </li>
          <li>
            Built{' '}
            <a target="_blank" href="https://weddingyou-dahee-kim.netlify.app/">
              <strong>Wedding You</strong>
            </a>{' '}
            (Full-Stack Developer)
          </li>
          <li>
            Refactored both applications by <strong>integrating newly gained knowledge</strong> and{' '}
            <strong>applying best practices</strong> (Recent).
          </li>
          <li>
            <strong>Led two team projects</strong> as team leader, ensuring timely delivery and
            collaboration.
          </li>
          <li>
            <strong>Mentored team members</strong> in <strong>React, Java, and Spring</strong>,
            boosting team performance.
          </li>
        </ul>
      )
    },
  },
  {
    org: 'Samsung SDS',
    url: 'https://www.samsungsds.com/',
    logo: '/static/images/samsung_sds_logo.jpg',
    start: 'Mar 2022',
    end: 'Apr 2022',
    title: 'Global Software Logistics Intern',
    icon: 'man-technologist',
    event: 'career-SDS',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Researched and analyzed <strong>IT-driven logistics and e-commerce trends</strong> in
            Australia.
          </li>
          <li>
            Explored <strong>AI and logistics solutions</strong> for supply chain optimization.
          </li>
          <li>
            Developed insights on <strong>warehouse management systems</strong> at Samsung SDS.
          </li>
          <li>
            Analyzed data on <strong>consumer behavior</strong>, online platforms, and fulfillment
            services.
          </li>
          <li>
            Studied <strong>automation in warehouse management</strong> and real-time tracking
            systems.
          </li>
        </ul>
      )
    },
  },
  {
    org: 'Incheon National University',
    url: 'https://www.inu.ac.kr/',
    logo: '/static/images/incheon_national_uni_logo.jpg',
    start: 'Mar 2017',
    end: 'Feb 2023',
    title: 'Student at INU (English Literature & Electronics Engineering & Computer Engineering)',
    icon: 'man-student',
    event: 'career-inu',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Graduated with a <strong>GPA of 4.2/4.5</strong> in <strong>English Literature</strong>
          </li>
          <li>
            Worked as a <strong>Corpus Professor Assistant</strong> using KH Coder for{' '}
            <strong>data analysis</strong>.
          </li>
          <li>
            Completed <strong>extensive coursework in Computer Engineering</strong>, effectively
            equivalent to a double major.
          </li>
          <li>
            Won the <strong>APYE (Asia Pacific Youth Exchange)</strong> competition; developed a{' '}
            <strong>cultural exchange app</strong> to help multicultural children in Korea.
          </li>
        </ul>
      )
    },
  },
]

export function CareerTimeline() {
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

function TimelineItem({ exp, last }: { exp: (typeof EXPERIENCES)[0]; last?: boolean }) {
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
              className="line-clamp-1 w-fit text-[1.1rem] leading-[1.9rem] text-gray-700 dark:text-slate-400
                              sm:text-[1.1rem] sm:leading-[2rem]
                              md:text-[1.2rem] md:leading-[2.2rem]
                              lg:text-[1.3rem] lg:leading-[2.4rem] font-semibold leading-10 text-gray-900 no-underline hover:text-gray-900 dark:text-white dark:hover:text-white"
            >
              <GrowingUnderline data-umami-event={event}>{org}</GrowingUnderline>
            </Link>
            <div className="flex items-center gap-1 pt-1 text-[1.1rem] leading-[1.9rem] text-gray-700
                              sm:text-[1.05rem] sm:leading-[2rem]
                              md:text-[1.15rem] md:leading-[2.2rem]
                              lg:text-[1.1rem] lg:leading-[2.4rem] text-gray-700 dark:text-slate-400">
              <Twemoji emoji={icon} className="!-mt-1" />
              <span>{title}</span>
            </div>
          </div>
        </summary>
        <div className="pt-1 text-[1.1rem] leading-[1.9rem] text-gray-700 dark:text-slate-400
                              sm:text-[1.1rem] sm:leading-[2rem]
                              md:text-[1.15rem] md:leading-[2.2rem]
                              lg:text-[1.2rem] lg:leading-[2.4rem] leading-8">
          <Details />
        </div>
      </details>
    </div>
  )
}
