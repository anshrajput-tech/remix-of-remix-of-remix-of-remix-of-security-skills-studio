import { createFileRoute } from "@tanstack/react-router";
import { TrackPage } from "@/components/site/TrackPage";

export const Route = createFileRoute("/offensive-security")({
  head: () => ({
    meta: [
      { title: "Offensive Security Courses – eSecurityIN" },
      { name: "description", content: "Red Team training at eSecurityIN: reconnaissance, exploitation, privilege escalation, application security, network penetration testing and AI red teaming." },
      { property: "og:title", content: "Offensive Security – eSecurityIN" },
      { property: "og:description", content: "Understand attacks. Identify vulnerabilities." },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <TrackPage
      track="offensive"
      eyebrow="Offensive Security · Red Team"
      title="Understand Attacks. Identify Vulnerabilities."
      intro="Hands-on Red Team programs taking you through the entire offensive engagement lifecycle — closing with a live, simulated red-vs-blue engagement."
      topics={["OSINT & Reconnaissance", "Exploitation", "Privilege Escalation", "Web, API & Mobile App Security", "Network Penetration Testing", "Wireless Attacks", "AI-assisted Exploit Scripting", "Adversarial AI Red Teaming"]}
      other={{ to: "/defensive-security", label: "Defensive Security" }}
    />
  ),
});
