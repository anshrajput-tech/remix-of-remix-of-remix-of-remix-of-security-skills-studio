import { Link } from '@tanstack/react-router';
import { Fingerprint, Radar, ScanSearch, Cloud, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { instituteMedia } from '@/data/media';
import { SectionHead } from './Layout';

const activities = [
  { title:'Ethical Hacking', Icon:Fingerprint, text:'Discover how vulnerabilities are identified and tested in authorised lab environments.' },
  { title:'SOC Operations', Icon:Radar, text:'Learn how security analysts investigate alerts and detect suspicious activities.' },
  { title:'Digital Forensics', Icon:ScanSearch, text:'Understand how digital evidence is collected and investigated.' },
  { title:'Cloud Security', Icon:Cloud, text:'Learn how to protect cloud infrastructure and applications.' },
];
export function PracticalExperience() {
  return <section className="experience-band"><div className="container-site py-16"><SectionHead eyebrow="What will you actually do?" title="Cybersecurity Is Better When You Get Your Hands Dirty."/><div className="experience-layout mt-9"><figure className="experience-photo"><img src={instituteMedia.hero} alt="Security training workstations at the eSecurityIN institute" loading="lazy"/><figcaption>Inside our cybersecurity workspace</figcaption></figure><div className="experience-features">{activities.map(({title,Icon,text},i)=><article key={title}><div className="flex items-center justify-between gap-3"><Icon size={26}/><span className="text-xs font-bold">0{i+1}</span></div><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></div><Button asChild variant="link" className="mt-5 p-0"><Link to="/courses">Explore practical learning pathways <ArrowUpRight size={16}/></Link></Button></div></section>;
}