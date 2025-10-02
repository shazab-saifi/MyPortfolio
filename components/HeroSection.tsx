'use client'

import Image from 'next/image'
import Link from 'next/link'
import Badge from './Badge'

const HeroSection = () => {
  return (
    <main className="mt-16 max-w-full">
      <div className="flex w-fit flex-col">
        <div className="flex items-center gap-4">
          <Image
            height={128}
            width={128}
            src="/stewie-music.jpeg"
            alt="my avatar"
            className="w-20 cursor-pointer rounded-full ring-2 active:ring-white md:w-22"
          />
          <div className="flex w-full flex-col">
            <div className="flex w-full items-center justify-between">
              <p className="text-2xl font-semibold text-neutral-800 transition-colors duration-300 md:text-3xl dark:text-white">
                Hi, I&apos;m Shazab Saifi
              </p>
              <Badge
                variant="info"
                textShimmer={true}
                baseColor="var(--color-blue-600)"
                shimmerColor="var(--color-white)"
                className="dark:bg-blue-900/50"
              >
                Available For Work
              </Badge>
            </div>
            <p className="text-neutral-800 transition-colors duration-300 dark:text-white">
              20y/o developer & designer
            </p>
          </div>
        </div>
        <div className="mt-10 max-w-2xl">
          <div className="space-y-2 text-wrap text-neutral-800 transition-colors duration-300 dark:text-white">
            <p className="text-wrap">
              Hi, I&apos;m Shazab Saifi, a passionate Design engineer. I can
              design user interfaces and turn them into real life products. I
              love bridging the gap between beautiful design and robust code,
              and I enjoy solving problems that make digital experiences more
              delightful and accessible.
            </p>
            <p>
              I find desining and engineering to be a form of art. And I like
              art.
            </p>
            <p className="inline-flex items-center gap-1">
              Mostly you&apos;ll find me on
              <Link href="https://x.com/shazabsaifi_s9">𝕏</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HeroSection
