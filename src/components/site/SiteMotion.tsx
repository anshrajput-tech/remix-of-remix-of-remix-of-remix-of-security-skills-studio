import { useEffect } from 'react';
import { useRouterState } from '@tanstack/react-router';

export function SiteMotion() {
  const pathname = useRouterState({ select: state => state.location.pathname });
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const targets = document.querySelectorAll('main section:not(:first-child), .course-card, .director');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.animate([{ opacity: .65, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 650, easing: 'ease-out' }); observer.unobserve(entry.target); } });
    }, { threshold: .06 });
    targets.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}