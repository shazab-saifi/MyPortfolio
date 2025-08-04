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
    <div className="flex flex-col gap-4 mt-12">
      <motion.h1
        initial={{ y: 10, opacity: 0, filter: "blur(10px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold"
      >
        Designs —
      </motion.h1>
      {designs.map((design, idx) => (
        <motion.div
          initial={{ y: 10, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 0.4 }}
          viewport={{ once: true }}
          key={idx}
          className="space-y-4"
        >
          <div className="group flex gap-4">
            <Image
              src={design.image}
              alt={design.title}
              width={48}
              height={48}
              className="size-12"
            />
            <div className="flex flex-col">
              <Link href={design.url} className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">{design.title}</h3>
                <LuExternalLink className="md:opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <p className="text-neutral-400 max-w-xl">{design.description}</p>
              <div className="flex gap-2 mt-2">
                <h3 className="font-semibold text-sm">Tech Stack:</h3>
                <div className="flex gap-2 text-neutral-400">
                  {design.tools.map((item, idx) => (
                    <span className="text-sm" key={idx}>
                      {item},
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-neutral-800"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default DesignsSection;
