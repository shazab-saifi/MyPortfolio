"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

const DesignsSection = () => {
  const designs = [
    {
      title: "Nova.ai",
      image: "/Nova-ai.svg",
      description:
        "A modern AI interface inspired by ChatGPT, designed for seamless conversations and intuitive user experience.",
      tools: ["Figma"],
      url: "https://www.figma.com/design/hvNwf7J6iIB7gVu8rAvZN2/Nova.ai?node-id=0-1&t=fmxXdYDzM1K6Ful9-1",
    },
    {
      title: "Pixory",
      image: "/pixoryIcon.png",
      description:
        "Pixory is a modern platform to explore, download, and share high-quality photos and videos. Features include search, user authentication, and personalized collections.",
      tools: ["Figma"],
      url: "https://www.figma.com/design/ZywBXSjZoAtpir4lxi64Wn/Pixory?node-id=27-556&t=znbjakOyl1fLSziP-1",
    },
    {
      title: "Petma",
      image: "/petma.svg",
      description:
        "Petma is a social media platform dedicated to pet lovers, where users can share photos, stories, and updates about their pets, connect with other pet owners, and discover a vibrant community centered around animals.",
      tools: ["Figma"],
      url: "https://www.figma.com/design/5NXdGUsZUXCxDE4ICIyUpv/Petma?node-id=36-12&t=1wKabOeGgvW1QtnT-1",
    },
    {
      title: "WireSketch",
      image: "/wireSketch.svg",
      description:
        "WireSketch is a collaborative online whiteboard tool inspired by Excalidraw, allowing users to quickly sketch diagrams, wireframes, and ideas in real time with an intuitive, hand-drawn style interface.",
      tools: ["Figma"],
      url: "https://www.figma.com/design/ktXDLtIUlDb76tnnZaTATB/WireSketch?node-id=0-1&t=LGbKlmcn0NTgK0ZB-1",
    },
  ];

  return (
    <div className="mt-12 flex flex-col gap-4">
      <motion.h1
        initial={{ y: 10, opacity: 0, filter: "blur(10px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold text-neutral-800 transition-colors duration-300 dark:text-white"
      >
        Designs —
      </motion.h1>
      <div className="flex flex-col gap-6">
        {designs.map((design, idx) => (
          <motion.div
            initial={{ y: 10, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            key={idx}
            className="flex flex-col justify-between"
          >
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <Image
                src={design.image}
                alt={design.title}
                width={48}
                height={48}
                className="size-12 flex-shrink-0"
              />
              <div className="flex flex-1 flex-col">
                <Link
                  href={design.url}
                  className="flex w-fit items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-lg font-semibold text-neutral-800 transition-colors duration-300 dark:text-white">
                    {design.title}
                  </h3>
                  <LuExternalLink className="transition-opacity group-hover:opacity-100 md:opacity-0" />
                </Link>
                <p className="mt-1 max-w-full text-sm text-wrap text-neutral-600 transition-colors duration-300 sm:text-base dark:text-neutral-400">
                  {design.description}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-semibold text-neutral-800 transition-colors duration-300 sm:text-base dark:text-white">
                    Design Tool:
                  </h3>
                  <div className="flex gap-2 text-sm text-neutral-600 transition-colors duration-300 sm:text-base dark:text-neutral-400">
                    {design.tools.map((item, idx) => (
                      <span key={idx}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {!(designs.length - 1 === idx) && (
              <div className="mt-4 h-[1px] w-full bg-neutral-300 transition-colors duration-300 sm:mt-6 dark:bg-neutral-800"></div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DesignsSection;
