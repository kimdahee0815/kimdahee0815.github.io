'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState, useMemo } from 'react'

export function BackgroundEffects() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentTheme, setCurrentTheme] = useState('')

  useEffect(() => setMounted(true), [])
  useEffect(() => {
    if (mounted && resolvedTheme) setCurrentTheme(resolvedTheme)
  }, [mounted, resolvedTheme])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {currentTheme === 'dark' ? <Stars /> : <GlintParticles />}
    </div>
  )
}


interface Meteor {
  id: string;
  leftStart: number;
  topStart: number;
  size: number;
  duration: number;
}

function Stars() {
  const stars = useMemo(
    () =>
      Array.from({ length: 100 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 3,
        duration: Math.random() * 2 + 2,
      })),
    []
  );

  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    const maxMeteors = 3;

    const interval = setInterval(() => {
      const count = Math.floor(Math.random() * maxMeteors) + 1;

      const newMeteors = Array.from({ length: count }, () => ({
        id: Math.random().toString(36).substr(2, 9),
        leftStart: Math.random() * 100,
        topStart: Math.random() * 50,
        size: Math.random() * 2 + 2,
        duration: Math.random() * 3 + 2,
      }));

      setMeteors(newMeteors);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {stars.map(({ id, left, top, size, delay, duration }) => (
        <div
          key={id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            opacity: 0.8,
          }}
        />
      ))}

      {meteors.map(({ id, leftStart, topStart, size, duration }) => (
        <div
          key={id}
          className="absolute rounded-full bg-white shadow-[0_0_10px_white,0_0_20px_white] animate-meteor"
          style={{
            left: `${leftStart}%`,
            top: `${topStart}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${duration}s`,
            opacity: 0.9,
          }}
        />
      ))}
    </div>
  );
}

function GlintParticles() {
  const particles = useMemo(() => {
    const total = 50;
    const meteorCount = 6;

    return Array.from({ length: total }, (_, i) => {
      const hue = Math.floor(Math.random() * 360);
      if (i < meteorCount) {
        return {
          id: i,
          type: "meteor",
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 3 + 4,
          delay: Math.random() * 10,
          color: `hsl(${hue}, 100%, 75%)`,
          duration: Math.random() * 5 + 3,
        };
      } else {
        return {
          id: i,
          type: "glint",
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 2 + 2.5,
          delay: Math.random() * 3,
          color: `hsl(${hue}, 100%, 75%)`,
          duration: 3,
        };
      }
    });
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {particles.map(({ id, type, left, top, size, delay, color, duration }) => {
        if (type === "meteor") {
          return (
            <div
              key={id}
              className="absolute rounded-full animate-meteor"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
                opacity: 0.9,
              }}
            />
          );
        }

        return (
          <div
            key={id}
            className="absolute rounded-full animate-glint"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
              opacity: 0.9,
            }}
          />
        );
      })}
    </div>
  );
}