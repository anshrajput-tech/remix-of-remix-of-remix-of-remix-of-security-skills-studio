import { createFileRoute } from '@tanstack/react-router';
import { BlogListing, resourceHead } from '@/components/site/ResourcePages';
export const Route = createFileRoute('/blogs/')({ head: () => resourceHead('Cybersecurity Blog', 'Practical perspectives on cybersecurity, AI and careers from eSecurityIN.'), component: BlogListing });
