"use client"

import Image from "next/image"
import myavatar from "@/public/myavatar.jpg"
import { VscGithubInverted } from "react-icons/vsc";
import Link from "next/link";
import { LettersPullUp } from "./LettersPullUp";
import { motion } from "motion/react"

const HeroSection = () => {

  return (
    <main className="w-full flex items-center justify-center pt-16">
      <div className="w-fit flex flex-col">
        <div className="space-y-4 sm:space-x-4 flex flex-col sm:flex-row sm:items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            transition={{ duration: 0.5 }}
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
          </div>
        </div>
        <div className="mt-16 max-w-[600px]">
          <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ duration: 0.5 }}
          >
            I'm a dedicated Full Stack Developer with expertise in MERN (MongoDB, Express.js, React, Node.js) and a passion for creating efficient and dynamic web applications. With a strong foundation in JavaScript, React, TypeScript, Redux, and Tailwind CSS, I strive to build scalable and user-friendly solutions. I enjoy solving complex coding challenges, building reusable components, and enhancing performance in my projects. Currently, I'm expanding my skill set to include Machine Learning and React Native. My goal is to become a senior software developer, and I'm actively working towards it by enhancing my problem-solving skills and learning new technologies. When I'm not coding, you can find me listening to Hans Zimmer's music, working out, or learning new languages
          </motion.p>
        </div>
      </div>
    </main>
  )
}

export default HeroSection