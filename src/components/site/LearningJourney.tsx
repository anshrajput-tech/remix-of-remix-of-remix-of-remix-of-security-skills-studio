import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Compass, BookOpen, Terminal, Layers, Rocket, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHead } from './Layout';

const steps = [
  { title: 'Explore', Icon: Compass, text: 'Understand cybersecurity fundamentals.', detail: 'Discover the foundations, offensive and defensive pathways and choose the right starting point.' },
  { title: 'Learn', Icon: BookOpen, text: 'Build technical knowledge through structured courses.', detail: 'Connect networking, host security and security fundamentals with the challenges practitioners face.' },
  { title: 'Practise', Icon: Terminal, text: 'Work on hands-on labs and simulations.', detail: 'Work with security tools, threat detection, reconnaissance and incident-response exercises.' },
  { title: 'Build', Icon: Layers, text: 'Complete projects and develop practical skills.', detail: 'Bring your learning together through projects and structured, real-world security engagements.' },
  { title: 'Grow', Icon: Rocket, text: 'Prepare for certifications and relevant career opportunities.', detail: 'Explore recognised certification learning pathways and continue into specialist security training.' },
];

export function LearningJourney() {
  const [active, setActive] = useState(0);
  const current = steps[active];
  return <section className="journey-band"><div className="container-site py-16">
    <SectionHead eyebrow="Your learning journey" title="Small steps. Big possibilities."/>
    <div className="journey-track mt-10" role="tablist" aria-label="Learning journey">{steps.map(({title, Icon,text}, i) => <Button key={title} role="tab" aria-label={title} aria-selected={active === i} aria-controls="journey-detail" id={`journey-${i}`} variant="ghost" className="journey-step" onClick={() => setActive(i)}><span className="journey-icon"><Icon size={24}/></span><span className="journey-step-copy"><strong>0{i+1} — {title}</strong><small>{text}</small></span></Button>)}</div>
    {current && <div id="journey-detail" role="tabpanel" aria-labelledby={`journey-${active}`} className="journey-detail"><div><p className="eyebrow">0{active + 1} / {current.title}</p><h3 className="mt-2 text-xl font-bold">{current.text}</h3></div><p className="text-sm leading-7 text-muted-foreground">{current.detail}</p></div>}
    <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-7"><p className="text-sm font-semibold">Prepare for recognised industry examinations</p><div className="flex flex-wrap gap-5 text-sm font-bold text-muted-foreground">{['EC-Council','CompTIA','Cisco','Microsoft','AWS','INE'].map(t=><span key={t}>{t}</span>)}</div><Button asChild variant="link" className="p-0"><Link to="/certifications">Explore pathways <ArrowUpRight size={16}/></Link></Button></div>
  </div></section>;
}