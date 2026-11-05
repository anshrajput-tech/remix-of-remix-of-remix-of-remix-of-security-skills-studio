import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Users, Presentation, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { instituteMedia } from '@/data/media';
import { SectionHead } from './Layout';

export function StudentLife() {
  return <section className="student-life-band">
    <div className="container-site py-16">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <SectionHead eyebrow="Student life" title="More Than Classes. A Community." text="Workshops, group learning, security demonstrations and student projects — learning here is a shared experience." />
        <Button asChild variant="link"><Link to="/gallery">Explore student life <ArrowUpRight size={16} /></Link></Button>
      </div>
      <div className="student-life-layout mt-10">
        <figure className="student-life-main">
          <img src={instituteMedia.group} alt="Students in a group learning session at the institute" loading="lazy" />
          <figcaption>Group learning</figcaption>
          <img className="student-life-inset" src={instituteMedia.story} alt="The welcoming reception area of the eSecurityIN institute" loading="lazy" />
        </figure>
        <div className="student-life-copy">
          <span className="eyebrow">Room for your curiosity</span>
          <h3 className="mt-4 text-2xl font-bold">Ask questions.<br />Share ideas.<br />Keep exploring.</h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">Meet fellow learners through classroom discussions, practical sessions, seminars and friendly competitions.</p>
          <ul className="student-life-points mt-6">
            <li><Users size={16} /> Group learning activities</li>
            <li><Presentation size={16} /> Workshops &amp; seminars</li>
            <li><Trophy size={16} /> Practical competitions</li>
          </ul>
          <Button asChild variant="link" className="mt-5 p-0"><Link to="/workshops">Discover our workshops <ArrowUpRight size={16} /></Link></Button>
        </div>
      </div>
    </div>
  </section>;
}
