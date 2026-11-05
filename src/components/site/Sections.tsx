import { Link } from "@tanstack/react-router";
import {
  Award, BrainCircuit, Briefcase, Building2, Clock, FlaskConical, Linkedin, Mail, MapPin, MonitorSmartphone,
  Phone, Quote, Server, ShieldCheck, Sword, Trophy, Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, courses, founders, testimonials, whyChoose } from "@/data/site";
import classroom from "@/assets/classroom-session.jpg.asset.json";
import smartboard from "@/assets/smartboard-session.jpg.asset.json";
import { SectionHead } from "./Layout";
import { EnquiryForm } from "./EnquiryForm";
import { instituteMedia } from "@/data/media";

export const photos = { classroom: classroom.url, smartboard: smartboard.url };

export function TrackSplit() {
  const off = courses.filter((c) => c.track === "offensive");
  const def = courses.filter((c) => c.track === "defensive");
  const col = (
    icon: typeof Sword, label: string, title: string, text: string, list: typeof off, to: "/offensive-security" | "/defensive-security",
  ) => {
    const Icon = icon;
    return (
      <div className="flex flex-col rounded-lg border border-border bg-card p-7 shadow-card">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground"><Icon className="h-5 w-5" /></span>
          <p className="eyebrow">{label}</p>
        </div>
        <h3 className="mt-4 text-2xl font-extrabold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{text}</p>
        <ul className="mt-5 flex-1 divide-y divide-border border-y border-border">
          {list.map((c) => (
            <li key={c.slug}>
              <Link to="/courses/$slug" params={{ slug: c.slug }} className="flex items-center justify-between gap-3 py-3 text-sm font-semibold text-heading hover:text-primary">
                <span>{c.title}</span><span className="shrink-0 text-xs font-medium text-muted-foreground">{c.duration}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Button asChild className="mt-6 self-start"><Link to={to}>Explore {label}</Link></Button>
      </div>
    );
  };
  return (
    <section className="bg-secondary py-16 md:py-20">
      <div className="container-site">
        <SectionHead center eyebrow="Two specialisations, equal weight" title="Offensive and Defensive Security" text="Our Red Team and Blue Team tracks mirror each other in rigour and capstone structure, so both carry equal weight with employers." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {col(Sword, "Offensive Security", "Understand Attacks. Identify Vulnerabilities.", "Reconnaissance, exploitation, privilege escalation, application security, network penetration testing and AI red teaming.", off, "/offensive-security")}
          {col(ShieldCheck, "Defensive Security", "Detect Threats. Protect Systems.", "SOC triage, SIEM detection engineering, endpoint threat hunting, incident response and forensic analysis.", def, "/defensive-security")}
        </div>
      </div>
    </section>
  );
}

export function ClassroomSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-site">
        <SectionHead eyebrow="Offline classroom training" title="Learn Cybersecurity Through Real Classroom Training." text="Experience instructor-led offline classes, interactive smartboard sessions and practical cybersecurity learning in a professional classroom environment." />
        <div className="mt-10 grid gap-5 md:grid-cols-5">
          <figure className="md:col-span-3">
            <img src={photos.smartboard} alt="Trainer teaching with a smartboard at eSecurityIN" loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
            <figcaption className="mt-2 text-sm text-muted-foreground">Smartboard-based session at our Janakpuri centre</figcaption>
          </figure>
          <figure className="md:col-span-2">
            <img src={photos.classroom} alt="Students attending an offline class at eSecurityIN" loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover md:aspect-auto md:h-[calc(100%-1.75rem)]" />
            <figcaption className="mt-2 text-sm text-muted-foreground">Students in an instructor-led classroom</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

const whyIcons = [Briefcase, BrainCircuit, FlaskConical, Server, Trophy, Users, Building2, MonitorSmartphone, Award];

export function WhySection() {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <div className="container-site">
        <SectionHead center eyebrow="Why choose us" title="Why Choose eSecurityIN?" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w, i) => {
            const Icon = whyIcons[i % whyIcons.length] ?? Briefcase;
            return (
              <div key={w.title} className="rounded-lg border border-border bg-card p-6">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-bold">{w.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{w.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const items = [
    { src: instituteMedia.lab, alt: "Cybersecurity lab workstations" },
    { src: instituteMedia.hero, alt: "Inside the eSecurityIN workspace" },
  ];
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {items.map((p) => (
        <img key={p.alt} src={p.src} alt={p.alt} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
      ))}
    </div>
  );
}

export function FoundersGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {founders.map((f) => (
        <article key={f.name} className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
          <img src={f.image} alt={f.name} loading="lazy" className="aspect-square w-full bg-muted object-cover object-top" />
          <div className="p-6">
            <h3 className="text-lg font-bold">{f.name}</h3>
            <p className="mt-1 text-sm font-semibold text-primary">{f.role}</p>
            <p className="mt-3 text-sm text-muted-foreground">{f.bio}</p>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="flex items-center gap-1 font-medium text-heading"><Clock className="h-4 w-4 text-cyan" />{f.experience} experience</span>
              <a href={f.linkedin} target="_blank" rel="noreferrer" aria-label={`${f.name} on LinkedIn`} className="text-primary hover:underline"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function Testimonials({ limit }: { limit?: number }) {
  const list = limit ? testimonials.slice(0, limit) : testimonials;
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {list.map((t) => (
        <figure key={t.name} className="flex flex-col rounded-lg border border-border bg-card p-6">
          <Quote className="h-6 w-6 text-cyan" />
          <blockquote className="mt-3 flex-1 text-sm leading-relaxed">“{t.text}”</blockquote>
          <figcaption className="mt-4 text-sm"><span className="font-bold text-heading">{t.name}</span> <span className="text-muted-foreground">· {t.city}</span></figcaption>
        </figure>
      ))}
    </div>
  );
}

export function ContactBlock() {
  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="space-y-5 lg:col-span-2">
        <div className="rounded-lg border border-border bg-card p-6">
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>{contact.address}</span></li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>{contact.phones.map((p, i) => (<a key={p} href={`tel:${p}`} className="block hover:text-primary">{["+91-9266055938", "+91-9266055939", "+91-9266055940"][i]}</a>))}</span></li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><a href={`mailto:${contact.email}`} className="hover:text-primary">{contact.email}</a></li>
            <li className="flex gap-3"><Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>{contact.hours.map((h) => <span key={h} className="block">{h}</span>)}</span></li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm"><a href={contact.mapsLink} target="_blank" rel="noreferrer">Get Directions</a></Button>
            <Button asChild variant="outline" size="sm"><a href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></Button>
          </div>
        </div>
        <iframe title="eSecurityIN location map" src={contact.mapEmbed} loading="lazy" className="h-64 w-full rounded-lg border border-border" />
      </div>
      <div className="rounded-lg border border-border bg-card p-6 md:p-8 lg:col-span-3">
        <h3 className="text-xl font-bold">Send us an enquiry</h3>
        <p className="mb-6 mt-1 text-sm text-muted-foreground">Fill in your details and our team will get back to you.</p>
        <EnquiryForm />
      </div>
    </div>
  );
}
