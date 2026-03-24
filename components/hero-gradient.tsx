"use client";

import { useRef, useState, useEffect } from "react";
import { GrainGradient } from "@paper-design/shaders-react";

export function HeroGradient() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(ref.current);

    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    const mo = new MutationObserver(checkTheme);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => { observer.disconnect(); mo.disconnect(); };
  }, []);

  const darkColors = ["#DF3F00", "#9c2f05", "#1a0a00", "#0a0400"];
  const lightColors = ["#ffa057", "#fcba6a", "#fff5eb", "#ffffff"];

  return (
    <div
      ref={ref}
      className="absolute -inset-x-10 -top-10 -bottom-32 overflow-hidden opacity-30 dark:opacity-25"
      style={{ maskImage: "linear-gradient(to bottom, black 40%, transparent 90%)", WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 90%)" }}
      aria-hidden
    >
      <GrainGradient
        colors={isDark ? darkColors : lightColors}
        speed={visible ? 0.3 : 0}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
