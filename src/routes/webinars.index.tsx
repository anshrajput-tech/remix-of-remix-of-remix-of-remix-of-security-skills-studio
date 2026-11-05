import { createFileRoute } from '@tanstack/react-router';
import { WebinarListing, resourceHead } from '@/components/site/ResourcePages';
export const Route = createFileRoute('/webinars/')({ head: () => resourceHead('Cybersecurity Webinars', 'Explore past expert webinars on cloud, network and application security.'), component: WebinarListing });
