'use client';

import {
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconSun,
} from '@tabler/icons-react';
import {
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

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

const LINKS: DockItem[] = [
  {
    title: 'Linkedin',
    icon: <IconBrandLinkedin className="h-full w-full" />,
    href: '/',
  },
  {
    title: 'Twitter',
    icon: <IconBrandX className="h-full w-full" />,
    href: '/twitter',
  },
  {
    title: 'Github',
    icon: <IconBrandGithub className="h-full w-full" />,
    href: '/github',
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

function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < breakpoint);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
}

const FloatingDock = () => {
  const isMobile = useIsMobile(640);
  const visibleLinks = isMobile ? LINKS.slice(0, 5) : LINKS;
  const mouseX = useMotionValue<number>(Infinity);

  const desktopRange = 150;
  const mobileRange = 50;
  const baseItemSize = 40;
  const maxItemSize = 80;
  const baseIconSize = 20;
  const maxIconSize = 40;

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('dark');
    if (stored !== null) {
      const previous = JSON.parse(stored);
      if (previous === true) {
        document.documentElement.classList.add('dark');
        setIsDark(true);
      } else {
        document.documentElement.classList.remove('dark');
        setIsDark(false);
      }
    } else {
      // If not set, use system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.documentElement.classList.add('dark');
        setIsDark(true);
      } else {
        document.documentElement.classList.remove('dark');
        setIsDark(false);
      }
    }
  }, []);

  const handleToggle = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dark', JSON.stringify(false));
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark', JSON.stringify(true));
      setIsDark(true);
    }
  };

  return (
    <div className="fixed left-1/2 bottom-4 -translate-x-1/2 flex items-center justify-center">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          'mx-auto flex h-16 w-fit items-center justify-center gap-4 rounded-full border border-neutral-200 bg-white/50 backdrop-blur-md p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-950/50 transition-colors duration-300'
        )}
      >
        {visibleLinks.map((el, idx) =>
          'isTheme' in el && el.isTheme ? (
            <DockThemeIcon
              key={idx}
              el={el}
              mouseX={mouseX}
              isMobile={isMobile}
              mobileRange={mobileRange}
              desktopRange={desktopRange}
              baseItemSize={baseItemSize}
              maxItemSize={maxItemSize}
              baseIconSize={baseIconSize}
              maxIconSize={maxIconSize}
              isDark={isDark}
              handleToggle={handleToggle}
            />
          ) : (
            <DockIcon
              key={idx}
              el={el}
              mouseX={mouseX}
              isMobile={isMobile}
              mobileRange={mobileRange}
              desktopRange={desktopRange}
              baseItemSize={baseItemSize}
              maxItemSize={maxItemSize}
              baseIconSize={baseIconSize}
              maxIconSize={maxIconSize}
            />
          )
        )}
      </motion.div>
    </div>
  );
};

function DockIcon({
  el,
  mouseX,
  isMobile,
  mobileRange,
  desktopRange,
  baseItemSize,
  maxItemSize,
  baseIconSize,
  maxIconSize,
}: {
  el: DockLink;
  mouseX: MotionValue<number>;
  isMobile: boolean;
  mobileRange: number;
  desktopRange: number;
  baseItemSize: number;
  maxItemSize: number;
  baseIconSize: number;
  maxIconSize: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const range = isMobile
    ? [-mobileRange, 0, mobileRange]
    : [-desktopRange, 0, desktopRange];

  const width = useSpring(
    useTransform(distance, range, [baseItemSize, maxItemSize, baseItemSize]),
    { mass: 0.1, stiffness: 150, damping: 12 }
  );
  const height = useSpring(
    useTransform(distance, range, [baseItemSize, maxItemSize, baseItemSize]),
    { mass: 0.1, stiffness: 150, damping: 12 }
  );
  const widthIcon = useSpring(
    useTransform(distance, range, [baseIconSize, maxIconSize, baseIconSize]),
    { mass: 0.1, stiffness: 150, damping: 12 }
  );
  const heightIcon = useSpring(
    useTransform(distance, range, [baseIconSize, maxIconSize, baseIconSize]),
    { mass: 0.1, stiffness: 150, damping: 12 }
  );

  if ('isEmail' in el && el.isEmail) {
    return (
      <a
        href={el.href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          ref={ref}
          style={{ width, height }}
          className="relative flex items-center justify-center rounded-full bg-neutral-200 transition-colors duration-300 dark:bg-neutral-800"
        >
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 2 }}
                transition={{ duration: 0.2 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-neutral-200 px-2 py-0.5 text-xs whitespace-pre text-neutral-800 shadow-md dark:bg-neutral-900 dark:text-neutral-100 transition-colors duration-300"
              >
                {el.title}
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div style={{ width: widthIcon, height: heightIcon }} className='text-neutral-950 dark:text-neutral-100 transition-colors duration-300'>
            {el.icon}
          </motion.div>
        </motion.div>
      </a>
    );
  }

  return (
    <Link
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      href={el.href}
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        className="relative flex items-center justify-center rounded-full bg-neutral-200 transition-colors duration-300 dark:bg-neutral-800"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 2 }}
              transition={{ duration: 0.2 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-neutral-200 px-2 py-0.5 text-xs whitespace-pre text-neutral-800 shadow-md dark:bg-neutral-900 dark:text-neutral-100 transition-colors duration-300"
            >
              {el.title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div style={{ width: widthIcon, height: heightIcon }} className='text-neutral-950 dark:text-neutral-100 transition-colors duration-300'>
          {el.icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}

function DockThemeIcon({
  el,
  mouseX,
  isMobile,
  mobileRange,
  desktopRange,
  baseItemSize,
  maxItemSize,
  baseIconSize,
  maxIconSize,
  handleToggle,
}: {
  el: DockTheme;
  mouseX: MotionValue<number>;
  isMobile: boolean;
  mobileRange: number;
  desktopRange: number;
  baseItemSize: number;
  maxItemSize: number;
  baseIconSize: number;
  maxIconSize: number;
  isDark: boolean;
  handleToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const range = isMobile
    ? [-mobileRange, 0, mobileRange]
    : [-desktopRange, 0, desktopRange];

  const width = useSpring(
    useTransform(distance, range, [baseItemSize, maxItemSize, baseItemSize]),
    { mass: 0.1, stiffness: 150, damping: 12 }
  );
  const height = useSpring(
    useTransform(distance, range, [baseItemSize, maxItemSize, baseItemSize]),
    { mass: 0.1, stiffness: 150, damping: 12 }
  );
  const widthIcon = useSpring(
    useTransform(distance, range, [baseIconSize, maxIconSize, baseIconSize]),
    { mass: 0.1, stiffness: 150, damping: 12 }
  );
  const heightIcon = useSpring(
    useTransform(distance, range, [baseIconSize, maxIconSize, baseIconSize]),
    { mass: 0.1, stiffness: 150, damping: 12 }
  );

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      tabIndex={0}
      onClick={handleToggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="focus:outline-none"
      style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        className="relative flex items-center justify-center rounded-full bg-neutral-200 transition-colors duration-300 dark:bg-neutral-800"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 2 }}
              transition={{ duration: 0.2 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-neutral-200 px-2 py-0.5 text-xs whitespace-pre text-neutral-800 shadow-md dark:bg-neutral-900 dark:text-neutral-100 transition-colors duration-300"
            >
              {el.title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div style={{ width: widthIcon, height: heightIcon }} className='text-neutral-950 dark:text-neutral-100 transition-colors duration-300'>
          {el.icon}
        </motion.div>
      </motion.div>
    </button>
  );
}

export default FloatingDock;