import { Twemoji } from '~/components/ui/twemoji'

export function Intro() {
  return (
    <h1 className="text-neutral-900 dark:text-neutral-200">
      I'm <span className="font-medium">Dahee Kim</span> - a self-taught Software Engineer
      <span className="hidden font-medium">South Korea</span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="flag-south-korea" />
      </span>
    </h1>
  )
}
