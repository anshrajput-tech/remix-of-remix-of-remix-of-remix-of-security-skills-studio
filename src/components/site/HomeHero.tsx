import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Clock, MapPin, Linkedin, Terminal, Sparkles, FolderKanban } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { instituteMedia } from '@/data/media';
import { founders } from '@/data/site';
import { InstituteStats } from './InstituteStats';

export function HomeHero() {
  return <>
    <section className="academy-hero">
      <div className="container-site lh-grid">
        <div className="hero-copy">
          <p className="eyebrow">Cybersecurity &amp; AI Training</p>
          <h1 className="academy-title">Don't Just Learn Technology.<br/><span>Learn to Secure It.</span></h1>
          <p className="lh-text">Explore ethical hacking, AI security, digital forensics and cloud security through practical, industry-focused training.</p>
          <div className="lh-actions">
            <Button asChild size="lg"><Link to="/courses">Explore Courses <ArrowUpRight size={18} /></Link></Button>
            <Button asChild size="lg" variant="outline"><Link to="/gallery">Take a Campus Tour <ArrowUpRight size={18}/></Link></Button>
          </div>
        </div>
        <div className="academy-photo">
          <span className="hero-accent hero-accent-dot" aria-hidden="true"/>
          <span className="hero-accent hero-accent-ring" aria-hidden="true"/>
          <span className="hero-accent hero-accent-square" aria-hidden="true"/>
          <img src={instituteMedia.classroom} alt="Students learning together with their instructor at eSecurityIN" fetchPriority="high" />
          <img className="hero-lab-inset" src={instituteMedia.lab} alt="Computer systems in the eSecurityIN practical lab"/>
          <span className="academy-photo-label"><Terminal size={17}/> HANDS-ON LEARNING</span>
          <span className="academy-photo-note"><Sparkles size={17}/> LIVE CYBER LAB</span>
          <span className="hero-project-label"><FolderKanban size={17}/> STUDENT PROJECTS</span>
        </div>
      </div>
    </section>
    <div className="hero-bottom"><div className="container-site"><span><MapPin size={14} /> Janakpuri, New Delhi</span><span>Industry-led. Practice-first. AI-integrated.</span><Link to="/our-institute">Explore the institute <ArrowUpRight size={14} /></Link></div></div>
  </>;
}

export function DirectorsSection() {
  return <section className="lh-directors py-16 md:py-20">
    <div className="container-site">
      <div className="text-center">
        <p className="eyebrow">Leadership</p>
        <h2 className="mt-3 text-3xl font-extrabold">Meet Our Directors</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Industry leaders bringing decades of enterprise cybersecurity and technology experience into the classroom.</p>
      </div>
      <div className="team-editorial mt-10"><img src={instituteMedia.team} alt="Members of the eSecurityIN team together at the institute" className="team-wide" loading="lazy" /><div><p className="eyebrow">Experience meets purpose</p><h3 className="mt-3 text-2xl font-bold">Enterprise expertise.<br />A personal commitment.</h3><p className="mt-4 text-sm text-muted-foreground">Meet the people connecting practical cybersecurity education with real-world technology experience.</p><InstituteStats /></div></div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {founders.map(f => <article key={f.name} className="director glass">
          <div className="director-photo"><img src={f.image} alt={f.name} loading="lazy" /></div>
          <h3 className="mt-5 text-lg font-bold">{f.name}</h3>
          <p className="mt-1 text-sm font-semibold text-primary">{f.role}</p>
          <p className="mt-3 text-sm text-muted-foreground">{f.bio}</p>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="font-medium"><Clock className="mr-1 inline h-4 w-4 text-primary" />{f.experience}</span>
            <a href={f.linkedin} target="_blank" rel="noreferrer" aria-label={`${f.name} on LinkedIn`} className="text-primary"><Linkedin className="h-5 w-5" /></a>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}
