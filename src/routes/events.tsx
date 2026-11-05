import { createFileRoute } from '@tanstack/react-router';
import { UnavailableResources, resourceHead } from '@/components/site/ResourcePages';
export const Route = createFileRoute('/events')({ head: () => resourceHead('Events', 'Cybersecurity reading and learning opportunities from eSecurityIN.'), component: () => <UnavailableResources kind="Events"/> });
