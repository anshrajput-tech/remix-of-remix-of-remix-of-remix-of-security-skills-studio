import { Link } from '@tanstack/react-router';
import { Fingerprint, Crosshair, ScanSearch, Radar, Cloud, BrainCircuit, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHead } from './Layout';

const topics = [
  { title: 'Ethical Hacking', text: 'Think like an attacker. Learn to defend responsibly.', Icon: Fingerprint, slug: 'esecurityin-certified-offensive-security-certificate-ecosc' },
  { title: 'Penetration Testing', text: 'Investigate vulnerabilities and test real attack surfaces.', Icon: Crosshair, slug: 'offensive-security-exploitation-certificate' },
  { title: 'Digital Forensics', text: 'Follow digital evidence and investigate security incidents.', Icon: ScanSearch, slug: 'esecurityin-certified-cybersecurity-master-program-eccmp' },
  { title: 'SOC & Threat Hunting', text: 'Detect threats and build your blue-team instincts.', Icon: Radar, slug: 'ai-augmented-defensive-security-soc' },
  { title: 'Cloud Security', text: 'Explore secure infrastructure and cloud fundamentals.', Icon: Cloud, slug: 'cybersecurity-foundations-pro' },
  { title: 'AI Security', text: 'Explore how AI is changing both attack and defence.', Icon: BrainCircuit, slug: 'esecurityin-ai-security-foundations' },
];
export function LearningTopics() {
  return <section className="topics-band"><div className="container-site py-14"><SectionHead eyebrow="What will you learn?" title="Find what sparks your curiosity."/><div className="learning-topics mt-9">{topics.map(({title, text, Icon, slug},i)=><article key={title} className="learning-topic"><div className="topic-art" aria-hidden="true"><Icon size={44}/><span className="topic-orbit"/><span className="topic-index">0{i+1}</span></div><div className="topic-copy"><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{text}</p><Button asChild variant="link" className="mt-5 p-0"><Link to="/courses/$slug" params={{slug}}>Explore courses <ArrowUpRight size={16}/></Link></Button></div></article>)}</div></div></section>;
}