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
    <main className="sm:mt-24 mt-16 max-w-full">
      <div className="w-fit flex flex-col">
        <div className="space-y-4 sm:space-x-6 flex flex-col sm:flex-row sm:items-center">
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
                className="w-32 sm:w-[200px] active:ring-white ring-2 cursor-pointer rounded-2xl"
              />
            </Link>
          </motion.div>
          <div className="flex flex-col gap-2">
            <AnimateText
              text="Hi, I'm Shazab Saifi"
              className="text-3xl md:text-5xl sm:text-4xl"
            />
            <AnimateText
              delay={0.2}
              text="I'm a 20y/o developer who can design"
              className="text-xl sm:text-2xl"
            />
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4 mt-4"
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
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-2 text-wrap"
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
            <p className="inline-flex gap-1 items-center">
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
