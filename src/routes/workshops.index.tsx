import { createFileRoute } from '@tanstack/react-router';
import { WorkshopListing, resourceHead } from '@/components/site/ResourcePages';
export const Route = createFileRoute('/workshops/')({ head: () => resourceHead('Cybersecurity Workshops', 'Explore focused practical cybersecurity workshops at eSecurityIN.'), component: WorkshopListing });
