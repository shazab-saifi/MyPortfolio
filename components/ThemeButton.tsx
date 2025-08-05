"use client";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "@/public/themesButton.json";
import { useEffect, useRef, useState } from "react";

const ThemeButton = () => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const [isDark, setIsDark] = useState(true);

  const handleToggle = () => {
    if (!lottieRef.current) return;

    const animation = lottieRef.current;
    animation.setSpeed(3);

    if (isDark) {
      animation.playSegments([100, 0], true);
      document.documentElement.classList.remove("dark");
    } else {
      animation.playSegments([0, 100], true);
      document.documentElement.classList.add("dark");
    }

    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    if (isDark) {
      lottieRef.current?.goToAndStop(100, true);
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  return (
    <button className="absolute top-15 right-0 cursor-pointer sm:top-10">
      <Lottie
        onClick={handleToggle}
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoPlay={false}
      />
    </button>
  );
};

export default ThemeButton;
