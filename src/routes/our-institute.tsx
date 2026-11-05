import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { CtaBand, PageHero, SectionHead } from "@/components/site/Layout";
import { ClassroomSection, Gallery, Testimonials } from "@/components/site/Sections";
import { contact } from "@/data/site";

export const Route = createFileRoute("/our-institute")({
  head: () => ({
    meta: [
      { title: "Our Institute – Classrooms & Infrastructure | eSecurityIN" },
      { name: "description", content: "See eSecurityIN's offline classrooms with smartboard teaching at our Janakpuri, New Delhi centre." },
      { property: "og:title", content: "Our Institute – eSecurityIN" },
      { property: "og:description", content: "Instructor-led offline cybersecurity classes in Janakpuri, New Delhi." },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Institute,
});

function Institute() {
  return (
    <>
      <PageHero eyebrow="Our Institute" title="A physical cybersecurity training institute in New Delhi">
        Comfortable, fully equipped classrooms with smartboard teaching, a short walk from Janakpuri Metro.
      </PageHero>
      <ClassroomSection />
      <section className="bg-secondary py-14">
        <div className="container-site">
          <SectionHead title="Gallery" text="Moments from our classrooms." />
          <div className="mt-8"><Gallery /></div>
        </div>
      </section>
      <section className="py-14">
        <div className="container-site">
          <SectionHead title="What students say about our centre" />
          <div className="mt-8"><Testimonials /></div>
          <div className="mt-10 flex items-start gap-3 rounded-lg border border-border bg-secondary p-6 text-sm">
            <MapPin className="h-5 w-5 shrink-0 text-primary" /><p>{contact.directionsNote}</p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
