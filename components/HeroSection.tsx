"use client"

import Image from "next/image"
import myavatar from "@/public/myavatar.jpg"
import { VscGithubInverted } from "react-icons/vsc";
import Link from "next/link";
import { LettersPullUp } from "./LettersPullUp";
import { motion } from "motion/react"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

const HeroSection = () => {

  return (
    <main className="w-full flex items-center justify-center mt-24">
      <div className="w-fit flex flex-col">
        <div className="space-y-4 sm:space-x-4 flex flex-col sm:flex-row sm:items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative w-32 sm:w-auto"
          >
            <Link href="https://github.com/shazab-saifi">
              <Image
                src={myavatar}
                alt="my avatar"
                className="w-32 sm:w-[200px] active:ring-white ring-2 cursor-pointer rounded-2xl"
              />
              <VscGithubInverted
                className="w-4 sm:w-6 absolute top-4 right-4"
              />
            </Link>
          </motion.div>
          <div>
            <LettersPullUp
              text="Hi, I'm Shazab Saifi"
              className="md:text-5xl text-4xl"
            />
            <LettersPullUp
              text="I'm a developer who can design!"
              className="text-base"
            />
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex space-x-4 mt-4"
            >
              <Link href="https://x.com/shazabsaifi_s9">
                <FaSquareXTwitter
                  size={24}
                  className="cursor-pointer"
                />
              </Link>
              <Link href="https://www.instagram.com/shahzaibb.s/">
                <FaSquareInstagram
                  size={24}
                  className="cursor-pointer"
                />
              </Link>
              <Link href="https://github.com/shazab-saifi">
                <SiGithub
                  size={24}
                  className="cursor-pointer"
                />
              </Link>
              <h4 className="opacity-70">shazabdev@gmail.com</h4>
            </motion.div>
          </div>
        </div>
        <div className="mt-16 max-w-[600px]">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p>Hey! I’m a passionate Full Stack Developer who loves building cool and efficient web applications. I work mainly with the MERN stack (MongoDB, Express.js, React, Node.js) and have been diving deep into JavaScript, React, TypeScript, Redux, and Tailwind CSS to create dynamic and responsive apps.</p><br />

            <p>I enjoy the challenge of solving tricky coding problems and making sure my projects are both clean and user-friendly. Lately, I’ve been getting into Machine Learning and React Native because I’m always excited to expand my skill set and try out new technologies.</p><br />

            <p>My big goal? To become a senior software developer and keep leveling up my skills. When I’m not coding, you’ll probably find me listening to Hans Zimmer’s music, hitting the gym, or learning a new language just for fun.</p>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default HeroSection