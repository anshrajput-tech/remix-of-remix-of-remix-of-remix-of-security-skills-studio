import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CourseCard } from './CourseCard';
import { SectionHead } from './Layout';
import { courses } from '@/data/site';
import { filterCourses } from '@/data/course-utils';

const paths = [
  { label: 'Beginner', track: 'all', level: 'beginner' },
  { label: 'Ethical hacking', track: 'offensive', level: 'all' },
  { label: 'Defensive security', track: 'defensive', level: 'all' },
  { label: 'AI security', track: 'ai', level: 'all' },
  { label: 'Certification programs', track: 'master', level: 'all' },
];
export function CourseDiscovery() {
  const [active,setActive] = useState(0);
  const path=paths[active];
  const matches=path ? filterCourses(courses,'',path.track,path.level,'all','all') : [];
  return <section className="discovery-band"><div className="container-site py-16"><div className="flex flex-wrap items-end justify-between gap-5"><SectionHead eyebrow="Build your next chapter" title="Find Your Path in Cybersecurity." text="From your first security fundamentals to advanced offensive and defensive operations."/><Button asChild variant="link"><Link to="/courses">All courses <ArrowUpRight size={16}/></Link></Button></div><div className="discovery-tabs mt-8" role="tablist" aria-label="Course pathways">{paths.map((p,i)=><Button key={p.label} variant={active===i?'default':'outline'} role="tab" aria-selected={active===i} aria-controls="discovery-courses" id={`path-${i}`} onClick={()=>setActive(i)}>{p.label}</Button>)}</div><div className="mt-7 grid gap-6 md:grid-cols-3" id="discovery-courses" role="tabpanel" aria-labelledby={`path-${active}`}>{matches.slice(0,3).map(c=><CourseCard key={c.slug} course={c}/>)}</div>{active===4 && <Button asChild variant="link" className="mt-6 p-0"><Link to="/certifications">Explore professional certification pathways <ArrowUpRight size={16}/></Link></Button>}</div></section>;
}