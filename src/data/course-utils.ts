import details from './course-details.json';
import type { Course } from './site';
export type CourseDetails = { hours: number | null; modules: { title: string; description: string }[]; audience: string; labs: string; sourceDuration: string };
export function getCourseDetails(course: Course): CourseDetails | undefined { return (details as Record<string, CourseDetails>)[course.slug]; }
export function filterCourses(courses: Course[], query: string, track: string, level: string, duration: string, mode: string) { return courses.filter(c => (!query || `${c.title} ${c.short} ${c.highlights.join(' ')}`.toLowerCase().includes(query.toLowerCase())) && (track === 'all' || (track === 'ai' ? c.title.includes('AI') : c.track === track)) && (level === 'all' || c.level.toLowerCase().includes(level)) && (duration === 'all' || c.duration === duration) && (mode === 'all' || c.mode === mode)); }
export function isUpcoming(date: string, today = new Date()) { return new Date(date).getTime() >= today.getTime(); }
