import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Layout";
import { ContactBlock } from "@/components/site/Sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us – eSecurityIN, Janakpuri, New Delhi" },
      { name: "description", content: "Call +91-9266055938, email info@esecurityin.com or visit eSecurityIN opposite Metro Pillar 616, Janakpuri, New Delhi." },
      { property: "og:title", content: "Contact eSecurityIN" },
      { property: "og:description", content: "Enquire about cybersecurity courses at eSecurityIN." },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Contact Us" title="Let's talk">
        Have questions or need expert guidance? We're here to help you on your cybersecurity journey.
      </PageHero>
      <section className="py-14"><div className="container-site"><ContactBlock /></div></section>
    </>
  ),
});
