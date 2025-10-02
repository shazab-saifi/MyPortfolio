"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import AnimateText from "./AnimateText";

const HeroSection = () => {
  return (
    <main className="mt-16 max-w-full ">
      <div className="flex w-fit flex-col">
        <div className="flex items-center gap-4">
          <Image
            height={128}
            width={128}
            src="/stewie-music.jpeg"
            alt="my avatar"
            className="cursor-pointer w-20 md:w-22 rounded-full ring-2 active:ring-white"
          />
          <div className="flex flex-col">
            <AnimateText
              text="Hi, I'm Shazab Saifi"
              className="text-2xl md:text-3xl font-semibold text-neutral-800 transition-colors duration-300 dark:text-white"
            />
            <AnimateText
              text="20y/o developer & designer"
              className="text-neutral-800 transition-colors duration-300 dark:text-white"
            />
          </div>
        </div>
        <div className="mt-10 max-w-2xl">
          <motion.div
            initial={{ y: 10, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-2 text-wrap text-neutral-800 transition-colors duration-300 dark:text-white"
          >
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
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
