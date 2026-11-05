import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, Clock, GraduationCap, MapPin } from "lucide-react";
import { getCourseDetails } from "@/data/course-utils";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CourseCard } from "@/components/site/CourseCard";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { courses, trackInfo } from "@/data/site";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = courses.find((c) => c.slug === params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.course;
    if (!c) return { meta: [{ title: "Course not found – eSecurityIN" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${c.title} – eSecurityIN` },
        { name: "description", content: c.short },
        { property: "og:title", content: c.title },
        { property: "og:description", content: c.short },
        { property: "og:image", content: c.image },
        { name: "twitter:image", content: c.image },
        { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-site py-24 text-center">
      <h1 className="text-3xl font-extrabold">Course not found</h1>
      <Link to="/courses" className="mt-4 inline-block text-primary underline">View all courses</Link>
    </div>
  ),
  component: CoursePage,
});

function CoursePage() {
  const { course } = Route.useLoaderData();
  const details = getCourseDetails(course);
  const related = courses.filter((c) => c.track === course.track && c.slug !== course.slug).slice(0, 3);
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="container-site grid items-center gap-8 py-12 md:grid-cols-2">
          <div>
            <nav className="text-sm text-muted-foreground"><Link to="/courses" className="hover:text-primary">Courses</Link> / {trackInfo[course.track].label}</nav>
            <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">{course.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{course.short}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-heading">
              <span className="flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5"><Clock className="h-4 w-4 text-cyan" />{course.duration}{details?.hours ? ` · ${details.hours} training hours` : ""}</span>
              <span className="flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5"><GraduationCap className="h-4 w-4 text-cyan" />{course.level}</span>
              <span className="flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5"><MapPin className="h-4 w-4 text-cyan" />{course.mode}</span>
            </div>
          </div>
          <img src={course.image} alt={course.title} className="aspect-video w-full rounded-lg border border-border bg-card object-cover" />
        </div>
      </section>
      <section className="py-14">
        <div className="container-site grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold">Course overview</h2>
            {course.description.map((p) => <p key={p} className="mt-4">{p}</p>)}
            <h2 className="mt-10 text-2xl font-extrabold">What you will cover</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {course.highlights.map((h) => (
                <li key={h} className="flex gap-2 rounded-md border border-border bg-card p-4 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{h}</li>
              ))}
            </ul>
            <h2 className="mt-10 text-2xl font-extrabold">Course syllabus</h2>
            <Accordion type="multiple" className="mt-4">{details?.modules.map((m,i)=><AccordionItem key={m.title} value={String(i)}><AccordionTrigger className="text-left">{String(i+1).padStart(2,'0')} · {m.title}</AccordionTrigger><AccordionContent>{m.description}</AccordionContent></AccordionItem>)}</Accordion>
            {['esecurityin-ai-security-foundations','offensive-security-exploitation-certificate','cybersecurity-foundations-pro'].includes(course.slug)&&<p className="mt-5 border-l-2 border-primary pl-4 text-sm text-muted-foreground">Duration is being confirmed: published course fields and program descriptions differ. Our team can confirm the current duration before enrolment.</p>}
            {details?.audience&&<><h2 className="mt-10 text-2xl font-extrabold">Who should join?</h2><p className="mt-4">{details.audience}</p></>}
            {details?.labs&&<><h2 className="mt-10 text-2xl font-extrabold">Practical labs & projects</h2><p className="mt-4">{details.labs}</p></>}
            <h2 className="mt-10 text-2xl font-extrabold">Before you enrol</h2><Accordion type="single" collapsible className="mt-4"><AccordionItem value="mode"><AccordionTrigger>Where is training delivered?</AccordionTrigger><AccordionContent>{course.mode} training at the Janakpuri, New Delhi centre.</AccordionContent></AccordionItem><AccordionItem value="admission"><AccordionTrigger>How do I apply and confirm admission details?</AccordionTrigger><AccordionContent>Send a course enquiry. Our team will confirm current schedules, course fees, entry requirements and certification inclusions before you enrol.</AccordionContent></AccordionItem></Accordion>
          </div>
          <aside className="h-fit rounded-lg border border-border bg-card p-6 shadow-card lg:sticky lg:top-28">
            <h2 className="text-lg font-bold">Enquire about this course</h2>
            <div className="mt-4"><EnquiryForm defaultCourse={course.title} /></div>
          </aside>
        </div>
      </section>
      {related.length > 0 && (
        <section className="bg-secondary py-14">
          <div className="container-site">
            <h2 className="text-2xl font-extrabold">Related courses</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{related.map((c) => <CourseCard key={c.slug} course={c} />)}</div>
          </div>
        </section>
      )}
    </>
  );
}
