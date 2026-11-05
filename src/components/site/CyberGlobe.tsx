import { Component, lazy, Suspense, useEffect, useRef, useState, type ReactNode } from 'react';
import { Globe2, ShieldCheck } from 'lucide-react';

const Scene = lazy(() => import('./CyberGlobeScene'));
function StaticGlobe() { return <div className="static-globe" aria-label="Cybersecurity globe"><Globe2 strokeWidth={.55} /><ShieldCheck className="static-shield" strokeWidth={1} /></div>; }
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  override state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  override render() { return this.state.failed ? <StaticGlobe /> : this.props.children; }
}
export function CyberGlobe() {
  const host = useRef<HTMLDivElement>(null);
  const [palette, setPalette] = useState<{ cyan: string; blue: string; violet: string; surface: string } | null>(null);
  const [ready, setReady] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [active, setActive] = useState(true);
  useEffect(() => {
    const element = host.current;
    if (!element) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const setup = () => {
      setInitialized(true);
      const hardware = navigator as Navigator & { deviceMemory?: number };
      if (motion.matches || (hardware.deviceMemory !== undefined && hardware.deviceMemory < 4)) { setPalette(null); return; }
      const canvas = document.createElement('canvas');
      if (!canvas.getContext('webgl2')) return;
      const read = (token: string) => {
        const probe = document.createElement('span');
        probe.style.color = `var(${token})`; element.appendChild(probe);
        const color = getComputedStyle(probe).color; probe.remove(); return color;
      };
      // Three.js expects sRGB colours. Canvas converts semantic CSS tokens to sRGB.
      const convert = (token: string) => {
        const ctx = document.createElement('canvas').getContext('2d');
        if (!ctx) return read(token);
        ctx.fillStyle = read(token); ctx.fillRect(0, 0, 1, 1);
        const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
        return `rgb(${r}, ${g}, ${b})`;
      };
      setPalette({ cyan: convert('--cyan'), blue: convert('--primary'), violet: convert('--violet'), surface: convert('--hero') });
    };
    setup(); motion.addEventListener('change', setup);
    let visible = true;
    const update = () => setActive(visible && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => { visible = entry?.isIntersecting ?? false; update(); });
    observer.observe(element); document.addEventListener('visibilitychange', update);
    return () => { observer.disconnect(); motion.removeEventListener('change', setup); document.removeEventListener('visibilitychange', update); };
  }, []);
  return <div ref={host} className="cyber-globe" data-scene-ready={ready || (initialized && !palette) ? 'true' : undefined}>
    {palette ? <SceneBoundary><Suspense fallback={<StaticGlobe />}><Scene palette={palette} active={active} onReady={() => setReady(true)} /></Suspense></SceneBoundary> : <StaticGlobe />}
  </div>;
}