import { createFileRoute, notFound, Link } from '@tanstack/react-router';
import editorial from '@/data/editorial.json';
import { PageHero } from '@/components/site/Layout';
import { resourceHead } from '@/components/site/ResourcePages';
import { Button } from '@/components/ui/button';
export const Route=createFileRoute('/webinars/$id')({loader:({params})=>{const webinar=editorial.webinars.find(w=>w.id===params.id);if(!webinar)throw notFound();return {webinar};},head:({loaderData})=>resourceHead(loaderData?.webinar.title??'Webinar unavailable',loaderData?.webinar.description??'Expert webinars at eSecurityIN.'),component:Webinar});
function Webinar(){const {webinar:w}=Route.useLoaderData();return <><PageHero eyebrow="Webinars / Past session" title={w.title}>{w.description}</PageHero><section className="container-site py-14"><div className="max-w-3xl"><p className="text-sm text-primary">{new Date(w.date).toLocaleDateString('en-IN')} · {w.duration} · {w.mode}</p><h2 className="mt-8 text-2xl font-bold">Session overview</h2><p className="mt-5 leading-8">{w.content}</p><p className="mt-7 text-muted-foreground">Speaker: {w.speaker}</p><Button asChild className="mt-8"><Link to="/contact">Enquire about related training</Link></Button></div></section></>}
