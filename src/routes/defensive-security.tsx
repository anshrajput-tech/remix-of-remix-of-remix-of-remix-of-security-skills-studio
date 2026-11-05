import { createFileRoute } from "@tanstack/react-router";
import { TrackPage } from "@/components/site/TrackPage";

export const Route = createFileRoute("/defensive-security")({
  head: () => ({
    meta: [
      { title: "Defensive Security & SOC Courses – eSecurityIN" },
      { name: "description", content: "Blue Team training at eSecurityIN: SOC triage, SIEM detection engineering, endpoint/XDR threat hunting, incident response and forensics." },
      { property: "og:title", content: "Defensive Security – eSecurityIN" },
      { property: "og:description", content: "Detect threats. Protect systems." },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <TrackPage
      track="defensive"
      eyebrow="Defensive Security · Blue Team"
      title="Detect Threats. Protect Systems."
      intro="Hands-on Blue Team programs covering the full defensive workflow — closing with a live, simulated blue-team engagement against an active intrusion."
      topics={["SOC Triage & Case Management", "SIEM Detection Engineering", "MITRE ATT&CK-mapped Rules", "Endpoint / XDR Threat Hunting", "Incident Response", "Forensic Artifact Analysis", "Windows / AD Groundwork", "GRC-aligned Documentation"]}
      other={{ to: "/offensive-security", label: "Offensive Security" }}
    />
  ),
});
