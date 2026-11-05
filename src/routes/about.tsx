import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { CtaBand, PageHero, SectionHead } from "@/components/site/Layout";
import { WhySection } from "@/components/site/Sections";
import { instituteMedia } from "@/data/media";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us – eSecurityIN" },
      { name: "description", content: "eSecurityIN, a brand of eSecurity Innovations Labs LLP, is an industry-led Cybersecurity & AI training institute in New Delhi." },
      { property: "og:title", content: "About eSecurityIN" },
      { property: "og:description", content: "Our story, mission, vision and services." },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const gaps = [
  { t: "The Skills Gap", d: "In 2025, there were 1 million cybersecurity vacancies in India — the 2nd largest after China, and a figure expected to progressively grow.", s: "Source: WEF" },
  { t: "The AI Gap", d: "As per the Ministry of Electronics & IT, only approximately 16% of Indian IT professionals are AI-skilled.", s: "Source: MeitY" },
  { t: "The Security Gap", d: "Only 7% of organisations in India have achieved the “Mature” level of readiness required to withstand today's cyberthreats.", s: "Source: Cisco 2025 Cybersecurity Readiness Index" },
];

const mission = [
  ["Developing Talent", "job-ready cybersecurity professionals through hands-on learning and real-world exposure."],
  ["Integrating AI", "embedding Artificial Intelligence into cybersecurity education for the future of digital defence."],
  ["Providing Mentorship", "enterprise expertise in the classroom from experienced industry practitioners."],
  ["Forging Partnerships", "alliances with organisations, universities and technology leaders for learning, internships and careers."],
  ["Empowering Business", "cybersecurity awareness, talent-pipeline development and specialised services that strengthen cyber resilience."],
];

const individuals = ["Cybersecurity diplomas for students", "Flexible online courses for working professionals", "Programs in industry-relevant cybersecurity + AI skills", "Placement cell working with recruiters from top Indian organisations"];
const enterprises = ["Cybersecurity services using best-in-class tools", "Awareness seminars for public institutions", "Corporate training programs", "Cyber audits + compliance services", "Managed 24x7 SOC services", "Access to skilled cybertalent"];

function List({ items }: { items: string[] }) {
  return <ul className="mt-4 space-y-2">{items.map((i) => <li key={i} className="flex gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{i}</li>)}</ul>;
}

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="eSecurityIN was created to make Digital India more skilled.">
        A brand of eSecurity Innovations Labs LLP, eSecurityIN is an industry-led Cybersecurity & Artificial Intelligence training institute — founded by seasoned technology leaders to bridge academic learning and real-world industry expectations.
      </PageHero>

      <section className="py-16">
        <div className="container-site grid items-start gap-10 md:grid-cols-2">
          <div>
            <SectionHead eyebrow="Our Story" title="Where the Journey Began" />
            <p className="mt-4">As Indians, we all aspire to make our country better. Our journey towards that goal began by identifying the gaps that were holding Digital India back.</p>
            <p className="mt-3 text-muted-foreground">At the time of our inception, there were organisations that filled one, maybe two of these gaps, but not all. That's why eSecurityIN was formed — to bring together all the elements required for Digital India to be better, in an interconnected environment that works in sync.</p>
          </div>
          <img src={instituteMedia.story} alt="The welcome desk at eSecurityIN" loading="lazy" className="w-full rounded-lg" />
        </div>
        <div className="container-site mt-10 grid gap-5 md:grid-cols-3">
          {gaps.map((g, i) => (
            <div key={g.t} className="rounded-lg border border-border bg-card p-6">
              <span className="font-display text-sm font-bold text-cyan">0{i + 1}</span>
              <h3 className="mt-1 font-bold">{g.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{g.d}</p>
              <p className="mt-3 text-xs text-muted-foreground">{g.s}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="container-site grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-7">
            <p className="eyebrow">Our Mission</p>
            <h2 className="mt-2 text-2xl font-extrabold">Practical, industry-driven training</h2>
            <p className="mt-3 text-sm text-muted-foreground">Our mission is to replace traditional academic theory with practical, industry-driven training in Cybersecurity and Artificial Intelligence. We are committed to:</p>
            <ul className="mt-4 space-y-2 text-sm">{mission.map(([a, b]) => <li key={a} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span><strong className="text-heading">{a}</strong> — {b}</span></li>)}</ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-7">
            <p className="eyebrow">Our Vision</p>
            <h2 className="mt-2 text-2xl font-extrabold">Empowering Talent. Securing the Digital Future.</h2>
            <p className="mt-3 text-sm">To be India's most trusted industry-led Cybersecurity & Artificial Intelligence institute, recognised for developing highly skilled, ethical and future-ready professionals who strengthen organisations, drive innovation and contribute to a safer digital ecosystem.</p>
            <p className="mt-3 text-sm text-muted-foreground">We envision becoming a national centre of excellence that nurtures world-class talent, fosters continuous innovation, and serves as a strategic partner for academia, industry and government.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site">
          <SectionHead eyebrow="Our Services" title="One Partner, Two Missions" text="Job-ready individuals on one side, resilient enterprises on the other." />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-7"><h3 className="text-lg font-bold">Programs for Individuals</h3><List items={individuals} /></div>
            <div className="rounded-lg border border-border bg-card p-7"><h3 className="text-lg font-bold">Protection for Enterprises</h3><List items={enterprises} /></div>
          </div>
        </div>
      </section>
      <WhySection />
      <CtaBand />
    </>
  );
}
