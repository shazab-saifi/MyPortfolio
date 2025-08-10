"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import AnimateText from "./AnimateText";

const HeroSection = () => {
  return (
    <main className="mt-16 max-w-full sm:mt-24">
      <div className="flex w-fit flex-col">
        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-6">
          <motion.div
            initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 100, filter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="w-32 sm:w-auto"
          >
            <Link href="https://github.com/shazab-saifi">
              <Image
                width={128}
                height={128}
                src="/stewie-music.jpeg"
                alt="my avatar"
                className="w-32 cursor-pointer rounded-2xl ring-2 active:ring-white sm:w-[200px]"
              />
            </Link>
          </motion.div>
          <div className="flex flex-col gap-2">
            <AnimateText
              text="Hi, I'm Shazab Saifi"
              className="text-3xl text-neutral-800 transition-colors duration-300 sm:text-4xl md:text-5xl dark:text-white"
            />
            <AnimateText
              delay={0.2}
              text="I'm a 20y/o developer who can also design"
              className="text-xl text-neutral-800 transition-colors duration-300 sm:text-2xl dark:text-white"
            />
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-4 flex space-x-4 text-neutral-800 transition-colors duration-300 dark:text-white"
            >
              <Link href="https://x.com/shazabsaifi_s9">
                <FaSquareXTwitter size={24} className="cursor-pointer" />
              </Link>
              <Link href="https://www.instagram.com/shahzaibb.s/">
                <FaSquareInstagram size={24} className="cursor-pointer" />
              </Link>
              <Link href="https://github.com/shazab-saifi">
                <SiGithub size={24} className="cursor-pointer" />
              </Link>
            </motion.div>
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
            <div>
              <span>Email — </span>
              <span>shazabdev@gmail.com</span>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
