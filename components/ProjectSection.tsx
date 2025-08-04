"use client";

import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import { motion } from "motion/react";
import Image from "next/image";

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
      {projects.map((project, idx) => (
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
              src={project.image}
              alt={project.name}
              width={48}
              height={48}
              className="size-12"
            />
            <div className="flex flex-col">
              <Link href={project.url} className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <LuExternalLink className="md:opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <p className="text-neutral-400 max-w-xl">{project.description}</p>
              <div className="flex gap-2 mt-2">
                <h3 className="font-semibold">Tech Stack:</h3>
                <div className="flex gap-2 text-neutral-400">
                  {project.techStack.map((item, idx) => (
                    <span key={idx}>{item},</span>
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

export default ProjectSection;
