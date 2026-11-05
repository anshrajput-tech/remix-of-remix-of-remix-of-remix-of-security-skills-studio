import { createFileRoute } from '@tanstack/react-router';
import { PageHero } from '@/components/site/Layout';
import { MediaGallery } from '@/components/site/MediaGallery';
import { resourceHead } from '@/components/site/ResourcePages';
export const Route = createFileRoute('/gallery')({head:()=>resourceHead('Institute Gallery','Explore real laboratories, classroom sessions and a video tour of eSecurityIN in New Delhi.'),component:()=> <><PageHero eyebrow="Life at eSecurityIN" title="Where learning becomes experience.">Real classrooms. Practical sessions. A space to build your future in cybersecurity.</PageHero><section className="container-site py-14"><MediaGallery/></section></>});
