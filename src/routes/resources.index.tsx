import { createFileRoute } from '@tanstack/react-router';
import { ResourceIndex, resourceHead } from '@/components/site/ResourcePages';
export const Route = createFileRoute('/resources/')({ head: () => resourceHead('Learning Resources', 'Institute gallery, expert webinars and cybersecurity learning resources.'), component: ResourceIndex });
