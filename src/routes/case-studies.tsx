import { createFileRoute } from '@tanstack/react-router';
import { UnavailableResources, resourceHead } from '@/components/site/ResourcePages';
export const Route = createFileRoute('/case-studies')({ head: () => resourceHead('Case Studies', 'Cybersecurity reading and learning opportunities from eSecurityIN.'), component: () => <UnavailableResources kind="Case Studies"/> });
