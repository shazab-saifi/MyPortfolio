"use client";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "@/public/themesButton.json";
import { useEffect, useRef, useState } from "react";

const ThemeButton = () => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    if (!lottieRef.current) return;

    const animation = lottieRef.current;
    animation.setSpeed(3);

    if (isDark) {
      animation.playSegments([0, 100], true);
      document.documentElement.classList.add("dark");
    } else {
      animation.playSegments([100, 0], true);
      document.documentElement.classList.remove("dark");
    }

    console.log("current = ", isDark);
    localStorage.setItem("dark", JSON.stringify(isDark));
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const previous = JSON.parse(localStorage.getItem("dark") as string);
    console.log("previous = ", previous);
    if (previous === true) {
      lottieRef.current?.goToAndStop(100, true);
      document.documentElement.classList.add("dark");
      setIsDark(false);
    } else {
      lottieRef.current?.goToAndStop(0, true);
      document.documentElement.classList.remove("dark");
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
