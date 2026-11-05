import { Link } from "@tanstack/react-router";
import { CourseCard } from "./CourseCard";
import { CtaBand, PageHero, SectionHead } from "./Layout";
import { photos } from "./Sections";
import { courses, type Track } from "@/data/site";

export function TrackPage({ track, eyebrow, title, intro, topics, other }: {
  track: Track; eyebrow: string; title: string; intro: string; topics: string[];
  other: { to: "/offensive-security" | "/defensive-security"; label: string };
}) {
  const list = courses.filter((c) => c.track === track);
  const master = courses.find((c) => c.track === "master")!;
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title}>{intro}</PageHero>
      <section className="py-14">
        <div className="container-site grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHead title="What you will learn" />
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {topics.map((t) => <li key={t} className="rounded-md border border-border bg-secondary px-4 py-3 text-sm font-semibold text-heading">{t}</li>)}
            </ul>
          </div>
          <img src={track === "offensive" ? photos.smartboard : photos.classroom} alt="eSecurityIN classroom training" loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
        </div>
      </section>
      <section className="bg-secondary py-14">
        <div className="container-site">
          <SectionHead title="Programs in this track" />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((c) => <CourseCard key={c.slug} course={c} />)}
            <CourseCard course={master} />
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Also see our <Link to={other.to} className="font-semibold text-primary underline">{other.label}</Link> track — both tracks carry equal weight with employers.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
