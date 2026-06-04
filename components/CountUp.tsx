'use client';

import { useRef, useState, useEffect } from 'react';

interface Props {
  value: string;
  duration?: number;
}

export default function CountUp({ value, duration = 1800 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState('0');
  const [hasRun, setHasRun] = useState(false);

  const num = parseInt(value, 10);
  const suffix = value.replace(/[0-9]/g, '');
  const isNumber = !isNaN(num);

  useEffect(() => {
    if (!isNumber || hasRun) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setHasRun(true);
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * num);
          setDisplay(current + suffix);
          if (progress < 1) requestAnimationFrame(tick);
          else setDisplay(num + suffix);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [num, suffix, duration, isNumber, hasRun]);

  if (!isNumber) return <span>{value}</span>;
  return <span ref={ref}>{display}</span>;
}
