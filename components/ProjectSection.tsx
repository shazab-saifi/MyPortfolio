"use client";

import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import { motion } from "motion/react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";

const ProjectSection = () => {
  const projects = [
    {
      name: "Pixory",
      image: "/pixoryIcon.png",
      description:
        "Pixory is a modern platform to explore, download, and share high-quality photos and videos. Features include search, user authentication, and personalized collections.",
      url: "https://pixory-liard.vercel.app",
      githubLink: "https://github.com/shazab-saifi/Pixory",
      techStack: [
        "React.js",
        "Next.js",
        "Zustand",
        "Tailwind.css",
        "React query",
        "Prisma",
        "neon.tech",
      ],
    },
    {
      name: "Periskope Assignment",
      image: "/periskopeLogo.png",
      description:
        "A real-time group chat app built for a Periskope internship assignment. Users can create rooms and chat instantly.",
      url: "https://periskopeassignment.vercel.app",
      githubLink: "https://github.com/shazab-saifi/periskopeassignment",
      techStack: [
        "React.js",
        "Next.js",
        "Tailwind.css",
        "Supabase realtime db",
      ],
    },
  ];

  return (
    <div className="mt-12 flex flex-col gap-4">
      <motion.h1
        initial={{ y: 10, opacity: 0, filter: "blur(10px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold text-neutral-800 transition-colors duration-300 dark:text-white"
      >
        Projects —
      </motion.h1>
      <div className="flex flex-col gap-8">
        {projects.map((project, idx) => (
          <motion.div
            initial={{ y: 10, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
            key={idx}
            className="space-y-4"
          >
            <div className="group flex flex-col gap-4 sm:flex-row sm:items-start">
              <Image
                src={project.image}
                alt={project.name}
                width={48}
                height={48}
                className="size-12 flex-shrink-0"
              />
              <div className="flex flex-1 flex-col">
                <div className="flex w-full flex-row justify-between sm:gap-0">
                  <Link
                    href={project.url}
                    className="flex w-fit items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-lg font-semibold text-neutral-800 transition-colors duration-300 dark:text-white">
                      {project.name}
                    </h3>
                    <LuExternalLink className="transition-opacity group-hover:opacity-100 md:opacity-0" />
                  </Link>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-fit items-center"
                  >
                    <SiGithub className="text-neutral-800 transition-colors duration-300 sm:size-5 dark:text-white" />
                  </Link>
                </div>
                <p className="mt-1 max-w-full text-sm text-wrap text-neutral-600 transition-colors duration-300 sm:text-base dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-col flex-wrap gap-1 sm:flex-row sm:gap-2">
                  <h3 className="text-sm font-semibold text-neutral-800 transition-colors duration-300 sm:text-base dark:text-white">
                    Tech Stack:
                  </h3>
                  <div className="flex max-w-full flex-wrap space-x-2 text-sm text-neutral-600 transition-colors duration-300 sm:text-base dark:text-neutral-400">
                    {project.techStack.map((item, idx) => (
                      <span key={idx}>
                        {item}
                        {idx !== project.techStack.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {!(projects.length - 1 === idx) && (
              <div className="h-[1px] w-full bg-neutral-300 transition-colors duration-300 dark:bg-neutral-800"></div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
