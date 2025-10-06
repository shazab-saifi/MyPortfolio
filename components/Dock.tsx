'use client';

import {
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconSun,
} from '@tabler/icons-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import useSound from 'use-sound';

type DockLink = {
  title: string;
  icon: React.ReactNode;
  href: string;
  isTheme?: false;
  isEmail?: boolean;
};
type DockTheme = {
  title: string;
  icon: React.ReactNode;
  isTheme: true;
};
type DockItem = DockLink | DockTheme;

/* ------------------------- Data ------------------------- */
const LINKS: DockItem[] = [
  {
    title: 'Linkedin',
    icon: <IconBrandLinkedin className="h-full w-full" />,
    href: 'https://www.linkedin.com/in/shazab-saifi-85a207338/',
  },
  {
    title: 'Twitter',
    icon: <IconBrandX className="h-full w-full" />,
    href: 'https://x.com/shazabsaifi_s9',
  },
  {
    title: 'Github',
    icon: <IconBrandGithub className="h-full w-full" />,
    href: 'https://github.com/shazab-saifi',
  },
  {
    title: 'Email',
    icon: <IconMail className="h-full w-full" />,
    href: 'https://mail.google.com/mail/?view=cm&to=shazabdev@gmail.com',
    isEmail: true,
  },
  {
    title: 'Toggle theme',
    icon: <IconSun className="h-full w-full" />,
    isTheme: true,
  },
];

const useIsMobile = (breakpoint = 640) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};

const tooltipVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

const Dock = () => {
  const isMobile = useIsMobile();
  const visibleLinks = isMobile ? LINKS.slice(0, 5) : LINKS;
  const baseItemSize = 40;
  const baseIconSize = 20;
  const [isDark, setIsDark] = useState(false);
  const [playPop] = useSound('/pop.mp3');

  useEffect(() => {
    const stored = localStorage.getItem('dark');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const shouldBeDark = stored ? JSON.parse(stored) : prefersDark;

    document.documentElement.classList.toggle('dark', shouldBeDark);
    setIsDark(shouldBeDark);
  }, []);

  const handleToggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('dark', JSON.stringify(next));
    playPop();
    setIsDark(next);
  };

  return (
    <div className="fixed bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center">
      <div
        className={cn(
          'mx-auto flex h-16 w-fit items-center justify-center gap-4 rounded-full border border-neutral-200 bg-white/50 p-4 shadow-md backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/50'
        )}
      >
        {visibleLinks.map((el, idx) =>
          'isTheme' in el && el.isTheme ? (
            <DockThemeIcon
              key={idx}
              el={el}
              baseItemSize={baseItemSize}
              baseIconSize={baseIconSize}
              handleToggle={handleToggle}
            />
          ) : (
            <DockIcon
              key={idx}
              el={el}
              baseItemSize={baseItemSize}
              baseIconSize={baseIconSize}
            />
          )
        )}
      </div>
    </div>
  );
};

const DockIcon = ({
  el,
  baseItemSize,
  baseIconSize,
}: {
  el: DockLink;
  baseItemSize: number;
  baseIconSize: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const Wrapper = el.isEmail ? 'a' : Link;
  const props = el.isEmail
    ? { href: el.href, target: '_blank', rel: 'noopener noreferrer' }
    : { href: el.href };

  return (
    <Wrapper
      {...props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{ width: baseItemSize, height: baseItemSize }}
        className="relative flex items-center justify-center rounded-full bg-neutral-100 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              variants={tooltipVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.1, ease: 'easeOut' }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-neutral-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-800 shadow-md dark:bg-neutral-900 dark:text-neutral-100"
            >
              {el.title}
            </motion.div>
          )}
        </AnimatePresence>
        <div
          style={{ width: baseIconSize, height: baseIconSize }}
          className="text-neutral-950 dark:text-neutral-100"
        >
          {el.icon}
        </div>
      </div>
    </Wrapper>
  );
};

const DockThemeIcon = ({
  el,
  baseItemSize,
  baseIconSize,
  handleToggle,
}: {
  el: DockTheme;
  baseItemSize: number;
  baseIconSize: number;
  handleToggle: () => void;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={handleToggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-pointer focus:outline-none"
    >
      <div
        style={{ width: baseItemSize, height: baseItemSize }}
        className="relative flex items-center justify-center rounded-full bg-neutral-100 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              variants={tooltipVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.1, ease: 'easeOut' }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-neutral-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-800 shadow-md dark:bg-neutral-900 dark:text-neutral-100"
            >
              {el.title}
            </motion.div>
          )}
        </AnimatePresence>
        <div
          style={{ width: baseIconSize, height: baseIconSize }}
          className="text-neutral-950 dark:text-neutral-100"
        >
          {el.icon}
        </div>
      </div>
    </button>
  );
};

export default Dock;
