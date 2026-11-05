import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, BrainCircuit, FlaskConical, Briefcase, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HomeHero, DirectorsSection } from '@/components/site/HomeHero';
import { MediaGallery } from '@/components/site/MediaGallery';
import { CtaBand, SectionHead } from '@/components/site/Layout';
import { instituteMedia } from '@/data/media';
import editorial from '@/data/editorial.json';
import { LearningTopics } from '@/components/site/LearningTopics';
import { LearningJourney } from '@/components/site/LearningJourney';
import { PracticalExperience } from '@/components/site/PracticalExperience';
import { StudentLife } from '@/components/site/StudentLife';
import { CourseDiscovery } from '@/components/site/CourseDiscovery';
import { resourceHead } from '@/components/site/ResourcePages';

export const Route = createFileRoute('/')({
  head: () => resourceHead('eSecurityIN — Cybersecurity & AI Training Institute', 'Industry-led cybersecurity and AI training with practical labs, professional courses and certification pathways in New Delhi.'),
  component: Home,
});

function Home() {
  return <>
    <HomeHero />

    <section className="container-site py-14">
      <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">Not just a classroom. A launchpad.</p>
          <h2 className="mt-3 text-3xl font-extrabold">Real skills.<br />Real-world confidence.</h2>
        </div>
        <div>
          <p className="text-sm leading-7 text-muted-foreground">eSecurityIN is an industry-led Cybersecurity & Artificial Intelligence institute. We bring enterprise experience into the classroom, connecting what you learn with the challenges security professionals face every day.</p>
          <Button asChild variant="link" className="mt-3 p-0"><Link to="/about">Get to know eSecurityIN <ArrowUpRight size={16} /></Link></Button>
        </div>
      </div>
      <div className="mt-10 grid gap-7 border-t border-border pt-7 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { Icon: Briefcase, title: 'Industry-led mentorship', text: 'Learn from enterprise practitioners.' },
          { Icon: BrainCircuit, title: 'AI-integrated learning', text: 'Build skills for an evolving industry.' },
          { Icon: FlaskConical, title: 'Hands-on cyber labs', text: 'Learn by testing, investigating and doing.' },
          { Icon: ShieldCheck, title: 'Certification pathways', text: 'Connect practical skills with credentials.' },
        ].map(({ Icon, title, text }) => <div key={title}><Icon className="mb-4 h-6 w-6 text-primary" /><h3 className="text-sm font-bold">{title}</h3><p className="mt-2 text-xs text-muted-foreground">{text}</p></div>)}
      </div>
    </section>

    <LearningTopics />

    <PracticalExperience />

    <section className="practical-band py-16 text-muted-foreground">
      <div className="container-site grid items-center gap-10 md:grid-cols-2">
        <div className="practical-collage">
          <figure className="collage-tall">
            <img src={instituteMedia.smartboard} alt="An instructor demonstrating security tools during a practical session" loading="lazy" />
            <figcaption>Instructor-led sessions</figcaption>
          </figure>
          <figure className="collage-wide">
            <img src={instituteMedia.discussion} alt="Students discussing a security exercise together in the classroom" loading="lazy" />
            <figcaption>Classroom discussions</figcaption>
          </figure>
          <figure className="collage-small">
            <img src={instituteMedia.corridor} alt="Around the eSecurityIN campus between sessions" loading="lazy" />
            <figcaption>Around our campus</figcaption>
          </figure>
        </div>
        <div>
          <p className="eyebrow">THE PRACTICAL DIFFERENCE</p>
          <h2 className="mt-4 text-3xl font-bold text-heading">Less watching.<br />More doing.</h2>
          <p className="mt-5 text-sm leading-7">Work through security tools, cyber labs and simulations. Practise reconnaissance, threat detection and incident response in a dedicated learning environment.</p>
          <div className="mt-7 grid grid-cols-2 gap-4 border-t border-border pt-6 text-xs">
            {['SIEM & SOC operations', 'Red-vs-Blue simulations', 'Cloud security', 'Digital forensics'].map(t => <span key={t} className="flex items-center gap-2"><ShieldCheck size={15} className="text-primary" />{t}</span>)}
          </div>
          <Button asChild variant="link" className="mt-6 p-0 text-primary"><Link to="/gallery">Step inside our institute <ArrowUpRight size={16} /></Link></Button>
        </div>
      </div>
    </section>

    <LearningJourney />

    <CourseDiscovery />

    <StudentLife />

    <section className="py-16">
      <div className="container-site">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <SectionHead eyebrow="Life at eSecurityIN" title="Inside eSecurityIN." text="A workspace for learning. A place to belong." />
          <Button asChild variant="link" className="hidden sm:inline-flex"><Link to="/gallery">Take a look inside <ArrowUpRight size={16} /></Link></Button>
        </div>
        <div className="mt-8"><MediaGallery preview /></div>
      </div>
    </section>

    <section className="workshop-band">
      <div className="container-site py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="activity-heading">
            <p className="eyebrow">Student activities</p>
            <h2 className="mt-4 text-4xl font-extrabold">Meet ideas.<br />Make discoveries.</h2>
            <div className="activity-tags mt-7">{["Workshops", "Practical sessions", "Security tools", "Group projects"].map(t => <span key={t}>{t}</span>)}</div>
          </div>
          <div>
            <SectionHead eyebrow="Learning beyond the syllabus" title="Keep your curiosity alive." text="Explore focused workshops and expert sessions on the security challenges that matter." />
            <div className="mt-6 space-y-3">
              {editorial.workshops.slice(0, 2).map(w => <Link key={w.id} to="/workshops/$id" params={{ id: w.id }} className="flex items-center justify-between gap-3 border-t border-border py-4 text-sm font-semibold">{w.title}<ArrowUpRight size={18} className="shrink-0 text-primary" /></Link>)}
            </div>
            <Button asChild variant="link" className="p-0"><Link to="/workshops">Explore workshops</Link></Button>
          </div>
        </div>
      </div>
    </section>

    <section className="journal-band py-16">
      <div className="container-site">
        <SectionHead eyebrow="From the journal" title="Stay curious. Stay informed." />
        <div className="mt-8 grid gap-7 md:grid-cols-3">
          {editorial.blogs.slice(1, 4).map(b => <article key={b.slug} className="border-t border-border pt-5">
            <p className="text-xs text-primary">{b.categoryName}</p>
            <h3 className="mt-3 text-lg font-bold">{b.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{b.excerpt}</p>
            <Button asChild variant="link" className="mt-4 p-0"><Link to="/blogs/$slug" params={{ slug: b.slug }}>Read article <ArrowUpRight size={16} /></Link></Button>
          </article>)}
        </div>
      </div>
    </section>

    <DirectorsSection />
    <CtaBand />
  </>;
}
