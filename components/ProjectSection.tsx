'use client';

import { IconExternalLink, IconBrandGithub } from '@tabler/icons-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Badge from './Badge';

const ProjectSection = () => {
  const projects = [
    {
      name: 'Quartz UI',
      image:
        'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759296296/quartzui-light_ytrk9a.svg',
      description:
        'Quartz UI is a modern animated UI library for Next.js, with easy integration and a CLI for adding components.',
      inDevelopment: true,
      techStack: [
        'React.js',
        'Next.js',
        'Tailwind.css',
        'Motion.dev',
        'Storybook.js',
      ],
    },
    {
      name: 'Pixory',
      image: '/pixoryIcon.png',
      description:
        'Pixory is a modern platform to explore, download, and share high-quality photos and videos. Features include search, user authentication, and personalized collections.',
      url: 'https://pixory.shazab.site',
      githubLink: 'https://github.com/shazab-saifi/Pixory',
      techStack: [
        'React.js',
        'Next.js',
        'Zustand',
        'Tailwind.css',
        'React query',
        'Prisma',
        'neon.tech',
      ],
    },
    {
      name: 'Periskope Assignment',
      image: '/periskopeLogo.png',
      description:
        'A real-time group chat app built for a Periskope internship assignment. Users can create rooms and chat instantly.',
      url: 'https://periskope.shazab.site',
      githubLink: 'https://github.com/shazab-saifi/periskopeassignment',
      techStack: [
        'React.js',
        'Next.js',
        'Tailwind.css',
        'Supabase realtime db',
      ],
    },
  ];

  return (
    <div className="mt-12 flex flex-col gap-6 md:mt-16 md:gap-8">
      <motion.h1
        initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-xl font-semibold text-neutral-800 md:text-2xl dark:text-white"
      >
        Projects —
      </motion.h1>
      <div className="flex flex-col gap-8">
        {projects.map((project, idx) => (
          <motion.div
            initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            key={idx}
            className="space-y-4"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <Image
                src={project.image}
                alt={project.name}
                width={48}
                height={48}
                className="size-12 flex-shrink-0"
              />
              <div className="flex flex-1 flex-col">
                <div className="flex w-full flex-row justify-between sm:gap-0">
                  <div
                    className={`group flex items-center gap-2 ${
                      project.inDevelopment
                        ? ''
                        : 'cursor-pointer hover:underline'
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">
                      {project.name}
                    </h3>
                    {project.inDevelopment && (
                      <Badge
                        variant="warning"
                        className="dark:bg-yellow-900/50 dark:text-yellow-400"
                      >
                        In Development
                      </Badge>
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        className="flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconExternalLink
                          size={18}
                          className="transition-opacity group-hover:opacity-100 md:opacity-0"
                        />
                      </a>
                    )}
                  </div>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-fit items-center"
                    >
                      <IconBrandGithub className="text-neutral-800 sm:size-5 dark:text-white" />
                    </a>
                  )}
                </div>
                <p className="mt-1 max-w-full text-sm text-wrap text-neutral-600 sm:text-base dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-col flex-wrap gap-1 sm:flex-row sm:gap-2">
                  <h3 className="text-sm font-semibold text-neutral-800 sm:text-base dark:text-white">
                    Tech Stack:
                  </h3>
                  <div className="flex max-w-full flex-wrap space-x-2 text-sm text-neutral-600 sm:text-base dark:text-neutral-400">
                    {project.techStack.map((item, idx) => (
                      <span key={idx}>
                        {item}
                        {idx !== project.techStack.length - 1 ? ',' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {!(projects.length - 1 === idx) && (
              <div className="h-[1px] w-full bg-neutral-300 dark:bg-neutral-800"></div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
