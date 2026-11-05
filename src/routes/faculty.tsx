import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero } from "@/components/site/Layout";
import { FoundersGrid } from "@/components/site/Sections";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty & Founders – eSecurityIN" },
      { name: "description", content: "Meet eSecurityIN's founders: Ashish Mudgal, R. Venkatesh and Karan Pandey — decades of enterprise cybersecurity and technology leadership." },
      { property: "og:title", content: "Faculty & Founders – eSecurityIN" },
      { property: "og:description", content: "Industry leaders bringing enterprise experience into the classroom." },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Faculty" title="Meet the Founders">
        eSecurityIN was built by industry leaders who bring decades of enterprise cybersecurity, technology and business experience directly into your learning.
      </PageHero>
      <section className="py-14"><div className="container-site"><FoundersGrid /></div></section>
      <CtaBand />
    </>
  ),
});
