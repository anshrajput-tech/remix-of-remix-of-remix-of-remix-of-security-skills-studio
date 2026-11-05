import { Link } from "@tanstack/react-router";
import { BookOpen, Clock, GraduationCap, ShieldCheck, Sword, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCourseDetails } from "@/data/course-utils";
import type { Course } from "@/data/site";

const icons = { foundation: BookOpen, offensive: Sword, defensive: ShieldCheck, master: Sparkles };

export function CourseCard({ course }: { course: Course }) {
  const Icon = icons[course.track];
  return (
    <article data-track={course.track} className="course-card flex flex-col rounded-lg border border-border bg-card p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent text-accent-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-bold leading-snug">{course.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{course.short}</p>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-heading">
        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-cyan" />{course.duration}{getCourseDetails(course)?.hours ? ` · ${getCourseDetails(course)?.hours} hours` : ""}</span>
        <span className="flex items-center gap-1"><GraduationCap className="h-3.5 w-3.5 text-cyan" />{course.level}</span>
      </div>
      <Button asChild variant="outline" className="mt-5 self-start">
        <Link to="/courses/$slug" params={{ slug: course.slug }}>View syllabus</Link>
      </Button>
    </article>
  );
}
