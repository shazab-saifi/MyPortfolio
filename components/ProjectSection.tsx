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
    <div className="flex flex-col gap-4 mt-12">
      <motion.h1
        initial={{ y: 10, opacity: 0, filter: "blur(10px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold"
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
            <div className="group flex flex-col sm:flex-row gap-4 sm:items-start">
              <Image
                src={project.image}
                alt={project.name}
                width={48}
                height={48}
                className="size-12 flex-shrink-0"
              />
              <div className="flex flex-col flex-1">
                <div className="w-full flex flex-row justify-between sm:gap-0">
                  <Link
                    href={project.url}
                    className="flex items-center gap-2 w-fit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    <LuExternalLink className="md:opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-fit"
                  >
                    <SiGithub className="sm:size-5" />
                  </Link>
                </div>
                <p className="text-neutral-400 max-w-full text-wrap mt-1 text-sm sm:text-base">
                  {project.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 mt-4 flex-wrap">
                  <h3 className="font-semibold text-sm sm:text-base">
                    Tech Stack:
                  </h3>
                  <div className="flex flex-wrap space-x-2 max-w-full text-neutral-400 text-sm sm:text-base">
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
            <div className="w-full h-[1px] bg-neutral-800"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
