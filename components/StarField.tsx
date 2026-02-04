"use client";

import { useEffect, useState } from "react";

type Star = {
  id: number;
  size: "small" | "medium" | "large";
  left: number;
  top: number;
  delay: number;
};

export default function StarField() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const starCount = 250;
    const newStars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      const sizeRand = Math.random();
      let size: "small" | "medium" | "large" = "small";
      if (sizeRand < 0.6) size = "small";
      else if (sizeRand < 0.9) size = "medium";
      else size = "large";

      newStars.push({
        id: i,
        size,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
      });
    }
    setStars(newStars);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full bg-white animate-blink ${
            star.size === "small"
              ? "w-[1px] h-[1px] shadow-[0_0_2px_rgba(255,255,255,0.7)]"
              : star.size === "medium"
                ? "w-[2px] h-[2px] shadow-[0_0_3px_rgba(255,255,255,0.9)]"
                : "w-[3px] h-[3px] shadow-[0_0_5px_rgba(255,255,255,1)]"
          }`}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
            animationDuration:
              "2s" /* Consistent with css: animation: blink 2s infinite */,
          }}
        />
      ))}
    </div>
  );
}
