import { useEffect, useRef, useState } from 'react';
import { courses, founders } from '@/data/site';

export function InstituteStats() {
  const host = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(1);
  useEffect(() => {
    const element = host.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const step = (time: number) => {
        const value = Math.min(1, (time - start) / 900);
        setProgress(value);
        if (value < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    });
    observer.observe(element);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, []);
  return <div ref={host} className="stats-line">{[{ value: courses.length, label: 'Professional programs' }, { value: new Set(courses.map(course => course.track)).size, label: 'Learning tracks' }, { value: founders.length, label: 'Industry-led directors' }].map(stat => <div key={stat.label}><strong>{Math.round(stat.value * progress).toString().padStart(2, '0')}</strong><span>{stat.label}</span></div>)}</div>;
}