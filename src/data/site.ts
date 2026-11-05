// All content below is taken from esecurityin.com (Nov 2026). Do not add invented courses, stats or testimonials.

export const contact = {
  phoneDisplay: "+91-9266055938 / 39 / 40",
  phones: ["+919266055938", "+919266055939", "+919266055940"],
  email: "info@esecurityin.com",
  address: "1/169-A, Third Floor, Janakpuri, Opp. Metro Pillar 616 (Blue Line), New Delhi – 110058",
  directionsNote:
    "Visit our Delhi centre in Janakpuri — A1/169A, opposite Metro Pillar No. 616, Block A1, Janakpuri, New Delhi 110058. Easily accessible from Janakpuri Metro.",
  hours: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sunday: Closed"],
  mapsLink: "https://maps.app.goo.gl/RhfwAzB6NPgKPncRA?g_st=iw",
  mapEmbed:
    "https://www.google.com/maps?q=A1%2F169A+Janakpuri+Opposite+Metro+Pillar+616+New+Delhi+110058&output=embed",
  whatsapp: "https://wa.me/919266055938",
  privacy: "https://esecurityin.com/privacy-policy",
  terms: "https://esecurityin.com/terms-conditions",
};

import logoAsset from "@/assets/esecurity-logo.png.asset.json";
export const logoUrl = logoAsset.url;

export type Track = "foundation" | "offensive" | "defensive" | "master";

export type Course = {
  slug: string;
  title: string;
  short: string;
  description: string[];
  duration: string;
  level: string;
  mode: string;
  track: Track;
  image: string;
  highlights: string[];
  outcomes?: string;
};

const img = (path: string) => `https://res.cloudinary.com/dsm6h8dio/image/upload/${path}`;

const initialCourses: Course[] = [
  {
    slug: "esecurityin-certified-cybersecurity-master-program-eccmp",
    title: "eSecurityIN Certified Cybersecurity Master Program (ECCMP)",
    short:
      "A 12-month, cohort-based master program taking learners from core security fundamentals to a live Red-vs-Blue engagement.",
    description: [
      "The Professional Master Program in AI-Augmented Cybersecurity Operations is a 12-month, cohort-based program that takes learners from core security fundamentals to a live Red-vs-Blue engagement reviewed by an industry panel.",
      "Sixteen industry certifications — including CEH, CompTIA Security+, CySA+, PenTest+, AWS Security Specialty, Splunk and Microsoft SC-200 — are mapped across the 16 competencies, so learning outcomes drive the curriculum, not the other way around.",
    ],
    highlights: [
      "One continuous lab chain, not isolated exercises",
      "All relevant domains that matter to employers",
      "Certifications mapped to outcomes, not the other way around",
      "AI as a working tool throughout the learning structure",
      "A portfolio, not just a certificate",
    ],
    duration: "12 Months",
    level: "Beginner",
    mode: "On-Premises",
    track: "master",
    image: img("v1786343240/course-images/course-image-1786343237352-k10hj7b686-2.png.jpg"),
  },
  {
    slug: "esecurityin-ai-security-foundations",
    title: "eSecurityIN – AI Security Foundations",
    short:
      "A fast primer on how AI is reshaping both attack and defence — the entry point into the entire AI track.",
    description: [
      "A fast primer for anyone who wants to understand how AI is reshaping both attack and defence before committing to a deeper specialisation.",
      "Across four weekly modules it covers the current state of AI in cybersecurity from both offence and defence, the basics of LLM prompt-injection attacks, hands-on AI-copilot use for triage and recon, and a first look at AI governance frameworks like the NIST AI RMF and EU AI Act. It closes with a small mini project so learners have something tangible to show.",
      "Requires no prior AI or security background. Sets up a clean progression into either AI-Augmented Offensive Security or AI-Augmented Defensive Security.",
    ],
    highlights: [
      "State of AI in offence and defence",
      "LLM prompt-injection basics",
      "Hands-on AI-copilot use for triage and recon",
      "AI governance: NIST AI RMF and EU AI Act",
      "Mini project",
    ],
    duration: "2 Months",
    level: "Beginner",
    mode: "On-Premises",
    track: "foundation",
    image: img("v1786343321/course-images/course-image-1786343318643-lg9ed2vvkg9-3.png.jpg"),
  },
  {
    slug: "cybersecurity-foundations-pro",
    title: "Cybersecurity Foundations Pro",
    short:
      "An extended Foundations certificate with more depth, more lab time and a full Cloud & AWS Security module.",
    description: [
      "An extended version of our standard Foundations certificate for learners who want more depth and lab time without yet committing to a full offensive or defensive specialisation.",
      "Covers the core sequence — security mindset, networking, Linux and Windows host security, and AI-augmented scripting — and adds a full Cloud & AWS Security Fundamentals module, closing the most common skill gap employers flag in entry-level candidates.",
      "Ideal for learners still undecided between red-team and blue-team paths. Successful candidates receive a direct progression path into any Red Team, Blue Team or Purple Team bundle.",
    ],
    highlights: [
      "Security mindset and networking",
      "Linux and Windows host security",
      "AI-augmented scripting",
      "Cloud & AWS Security Fundamentals",
      "More hands-on lab time per competency",
    ],
    duration: "3 Months",
    level: "Beginner",
    mode: "On-Premises",
    track: "foundation",
    image: img("v1786343395/course-images/course-image-1786343392582-0t5ctlph8ryk-7.png.jpg"),
  },
  {
    slug: "esecurityin-certified-cybersecurity-practitioner-certificate",
    title: "eSecurityIN Certified Cybersecurity Practitioner Certificate",
    short:
      "The six-month generalist certificate covering the full breadth of what a modern security practitioner needs.",
    description: [
      "A six-month program for learners who want the broadest possible foundation before specialising, or a single complete credential covering the full breadth of what a modern security practitioner needs.",
      "Moves through host and network fundamentals, Linux and Windows security, AI-augmented scripting and automation, threat intelligence, and cloud security. No prerequisites — start with zero prior security experience.",
      "The right choice for a generalist security analyst, IT security or junior consulting role. Graduates leave with a branded certificate and a direct path into any specialist track.",
    ],
    highlights: [
      "Host and network fundamentals",
      "Linux and Windows security",
      "AI-augmented scripting and automation",
      "Threat intelligence",
      "Cloud security",
    ],
    duration: "6 Months",
    level: "Intermediate",
    mode: "On-Premises",
    track: "foundation",
    image: img("v1786343395/course-images/course-image-1786343392582-0t5ctlph8ryk-7.png.jpg"),
  },
  {
    slug: "esecurityin-certified-offensive-security-certificate-ecosc",
    title: "eSecurityIN Certified Offensive Security Certificate (ECOSC)",
    short:
      "A six-month Red Team program covering the entire offensive engagement lifecycle, ending in a live red-vs-blue engagement.",
    description: [
      "A six-month, fully self-contained program specialising in the Red Team / Offensive Security segment, taking learners from a condensed foundations refresher through the entire offensive engagement lifecycle.",
      "Designed for learners who already know they want red-team work. Recon methodology, exploit fundamentals, privilege escalation and wireless attacks are covered in depth. Closes with a live, simulated red-vs-blue engagement.",
    ],
    highlights: [
      "Reconnaissance",
      "Exploitation and privilege escalation",
      "Application security",
      "Full network penetration testing",
      "Wireless attacks",
    ],
    duration: "6 Months",
    level: "Advanced",
    mode: "On-Premises",
    track: "offensive",
    image: img("v1786343333/course-images/course-image-1786343331316-bkj4ibwcz09-4.png.jpg"),
  },
  {
    slug: "offensive-security-exploitation-certificate",
    title: "Offensive Security & Exploitation Certificate",
    short:
      "A deeper offensive bundle adding AI-Augmented Web, API & Mobile Application Security to the recon-to-pentest arc.",
    description: [
      "An offensive bundle for learners ready to move beyond the entry-level Offensive Security certificate into a deeper, more current attack-surface skillset.",
      "Extends the classic recon-to-network-pentest arc with a dedicated AI-Augmented Web, API & Mobile Application Security module. Moves through OSINT-driven reconnaissance, exploitation and privilege escalation, application security, and full network penetration testing with wireless attacks — with substantially more lab time.",
      "Graduates are positioned for junior-to-mid penetration tester or red-team roles.",
    ],
    highlights: [
      "OSINT-driven reconnaissance",
      "Exploitation and privilege escalation",
      "AI-Augmented Web, API & Mobile App Security",
      "Network penetration testing",
      "Wireless attacks",
    ],
    duration: "3 Months",
    level: "Beginner",
    mode: "On-Premises",
    track: "offensive",
    image: img("v1786343340/course-images/course-image-1786343339717-761nl4t17ww-5.png.jpg"),
  },
  {
    slug: "ai-augmented-offensive-security",
    title: "AI-Augmented Offensive Security",
    short:
      "For offensive practitioners who want to fold AI into every stage of an engagement — and red-team AI systems themselves.",
    description: [
      "A 3-month course for offensive practitioners who want to fold AI into every stage of an engagement — and treat attacking AI systems as a genuine red-team discipline.",
      "Opens with AI-assisted recon and exploit scripting, moves through AI-driven threat intelligence, covers application security focused on AI-agent auth flaws, and closes with adversarial AI red teaming — jailbreaks, prompt injection and model evasion.",
      "Natural next step after AI Security Foundations. Prepares graduates for roles like AI red-teamer or offensive AI security researcher, alongside traditional penetration testing positions.",
    ],
    highlights: [
      "AI-assisted recon and exploit scripting",
      "AI-driven threat intelligence",
      "AI-agent auth flaws",
      "Adversarial AI red teaming",
    ],
    duration: "3 Months",
    level: "Advanced",
    mode: "On-Premises",
    track: "offensive",
    image: img("v1786343201/course-images/course-image-1786343197688-jf07t0kredi-1.png.jpg"),
  },
  {
    slug: "esecurityin-certified-defensive-security-certificate-ecdsc",
    title: "eSecurityIN Certified Defensive Security Certificate (ECDSC)",
    short:
      "A six-month Blue Team program covering SOC triage, SIEM detection engineering, threat hunting and incident response.",
    description: [
      "The counterpart to our Offensive Security program — a six-month, self-contained program for learners who want to specialise in defensive operations.",
      "After a foundations refresher and Windows/AD groundwork, it moves through the full defensive workflow: SOC triage and case management, SIEM detection engineering with ATT&CK-mapped correlation rules, endpoint/XDR threat hunting, and full incident response with forensic artifact analysis. Every module is AI-copilot-driven.",
      "Closes with a live, simulated blue-team engagement where learners respond to an active simulated intrusion and produce GRC-aligned incident documentation. Right for SOC analyst, detection engineer, threat hunter or incident responder roles.",
    ],
    highlights: [
      "SOC triage and case management",
      "SIEM detection engineering (ATT&CK-mapped)",
      "Endpoint / XDR threat hunting",
      "Incident response and forensic artifact analysis",
      "Live simulated blue-team engagement",
    ],
    duration: "6 Months",
    level: "Advanced",
    mode: "On-Premises",
    track: "defensive",
    image: img("v1786343385/course-images/course-image-1786343382890-5bwx6imc8ye-6.png.jpg"),
  },
  {
    slug: "ai-augmented-defensive-security-soc",
    title: "AI-Augmented Defensive Security / SOC",
    short:
      "For defenders who want to operationalise AI across the entire SOC workflow — triage, detection, hunting and IR.",
    description: [
      "A 3-month course for defenders who want to operationalise AI across the entire SOC workflow rather than treat it as a single bolt-on tool.",
      "Covers AI-assisted alert triage and case management, correlation rule design and ATT&CK gap analysis for detection engineering, IOC- and behaviour-driven endpoint hunting, and closes with AI-assisted IR timeline reconstruction.",
      "Natural next step after AI Security Foundations. Prepares graduates for detection engineer, SOC analyst or incident response analyst roles.",
    ],
    highlights: [
      "AI-assisted alert triage",
      "Detection engineering and ATT&CK gap analysis",
      "IOC- and behaviour-driven endpoint hunting",
      "AI-assisted IR timeline reconstruction",
    ],
    duration: "3 Months",
    level: "Advanced",
    mode: "On-Premises",
    track: "defensive",
    image: img("v1786343385/course-images/course-image-1786343382890-5bwx6imc8ye-6.png.jpg"),
  },
];

export const courses: Course[] = [...initialCourses, {"slug": "purple-team-cyber-defense", "title": "Purple Team & Cyber Defense", "short": "Where red and blue meet \u2014 intel, exposure, response, and detection in one synthesis track", "description": ["This is an advanced 4-month bundle for learners who already have some foundational red or blue exposure and want to build the connective tissue between offense and defense rather than commit fully to one side.", "Opens with threat intelligence as its bridge discipline \u2014 translating attacker campaign data into defensive priorities \u2014 then moves through the shared attack/defend surfaces of web/API/mobile applications and cloud infrastructure.", "Closes by tying findings back into formal incident response and SIEM detection engineering, ensuring intelligence and IR work becomes reusable detection content rather than a one-off report.", "Right fit for learners aiming at threat intelligence, detection engineering, or purple-team consulting roles rather than a purely offensive or defensive career path."], "duration": "4 Months", "level": "Advanced", "mode": "On-Premises", "track": "defensive", "image": "https://res.cloudinary.com/dsm6h8dio/image/upload/v1785860319/course-images/course-image-1785860316508-kgmj6my6ce-e4c2f195-4f68-4f3f-8863-52576d94b9f0.png.jpg", "highlights": ["AI-Augmented Threat Intelligence", "AI-Augmented Web, API & Mobile Application Security", "Cloud & AWS Security Fundamentals", "AI-Augmented Incident Response & Digital Forensics", "AI-Augmented SIEM Engineering & Threat Detection"]}];

export const trackInfo: Record<Track, { label: string; blurb: string }> = {
  foundation: { label: "Foundations & AI", blurb: "Start here — no prior security background required." },
  offensive: { label: "Offensive Security", blurb: "Red Team: reconnaissance, exploitation and penetration testing." },
  defensive: { label: "Defensive Security", blurb: "Blue Team: SOC operations, detection and incident response." },
  master: { label: "Master Program", blurb: "Twelve months covering both offence and defence." },
};

export const founders = [
  {
    name: "Ashish Mudgal",
    role: "Co-Founder & Executive Director – Technology",
    experience: "25+ years",
    bio: "25+ years of elite enterprise cybersecurity leadership, translated into career-accelerating, practical education.",
    image: img("v1786509180/course-images/course-image-1786509179628-j99p4luqstj-ashish.png.jpg"),
    linkedin: "https://www.linkedin.com/in/ashish-mudgal/",
  },
  {
    name: "R. Venkatesh",
    role: "Co-Founder & Executive Director – Growth & Partnerships",
    experience: "30+ years",
    bio: "30+ years of merging enterprise industry expertise with strategic alliances, to bridge the Indian cybersecurity skills gap.",
    image: img("v1786509175/course-images/course-image-1786509172092-119vdw60qt5-ven.png.jpg"),
    linkedin: "https://www.linkedin.com/in/r-venkatesh-88b521b/",
  },
  {
    name: "Karan Pandey",
    role: "Co-Founder & Executive Director – Innovations and Business Strategy",
    experience: "25+ years",
    bio: "25+ years of enterprise tech, digital infrastructure, innovation and business strategy expertise, delivering high-impact cybersecurity education.",
    image: img("v1786509184/course-images/course-image-1786509176350-a2e6escx3oh-karan.png.jpg"),
    linkedin: "https://www.linkedin.com/in/karan-pandey-4a650a379/",
  },
];

export const testimonials = [
  { name: "Abhishek", city: "Delhi", text: "What really sets this place apart is the dedication of the instructors. I used to message my mentor late at night with doubts about the ethical hacking modules, and they were always happy to help. Thanks to their mentorship, I successfully cleared my interviews and got placed at Netweb." },
  { name: "Himanshu", city: "Delhi", text: "Landing a role at Mansh Technologies felt like a dream come true! The institute didn't just teach us the tools; they completely transformed my interview skills. The mock interviews, resume-building sessions and the constant push from the faculty gave me the edge I needed." },
  { name: "Raajan", city: "Delhi", text: "Coming from a completely non-IT background, I was worried the technical concepts would go over my head. But the way they break down complex networking and security topics is incredible. Because of this strong foundation, I recently got placed at Optum as a Security Analyst." },
  { name: "Rakesh", city: "Delhi", text: "I recently got placed at Netweb. It's rare to see founders so actively involved in the day-to-day progress of the students. They regularly drop into classes, ask for feedback and bring in industry professionals to share real-world insights." },
  { name: "Harsh", city: "Delhi", text: "I recently got placed at Ebix Cash. The training, hands-on learning and constant encouragement from the mentors played an important role in helping me prepare for this opportunity." },
  { name: "Aditi", city: "Delhi", text: "Getting placed at GISPL was a huge milestone for me. The practical sessions, mentorship and interview preparation helped me build both the technical skills and confidence I needed." },
  { name: "Nipum", city: "Delhi", text: "I really like the location. Being in Janakpuri makes it very convenient to travel by metro or other public transport. The location is accessible, safe and student friendly." },
  { name: "Varun", city: "Delhi", text: "The environment is very motivating. The classrooms are comfortable and fully equipped, and you are surrounded by students who are genuinely interested in learning cybersecurity." },
  { name: "Devansh Upadhyay", city: "Delhi", text: "The most impressive thing for me was how much the founders care about students. They interact with us, motivate us and keep everything in check regularly. They genuinely want students to grow in their cybersecurity careers." },
];

export const whyChoose = [
  { title: "Industry-Led Learning", text: "Learn directly from professionals with decades of experience managing complex security environments for global organisations." },
  { title: "AI-Integrated Curriculum", text: "Prepare for the next generation of security operations and intelligent threat defence with integrated AI training." },
  { title: "Hands-on Practical Training", text: "Live labs, cyber ranges, security tools, simulations, capstone projects and real-world case studies." },
  { title: "Enterprise-Grade Technologies", text: "Train on SIEM, SOAR, Endpoint & Cloud Security, Digital Forensics and Security Automation platforms." },
  { title: "Career-Focused Approach", text: "Resume development, LinkedIn optimisation, interview preparation, soft-skills coaching and placement assistance." },
  { title: "Mentorship That Matters", text: "Continuous guidance from mentors who have led global security operations." },
  { title: "Centre of Excellence", text: "Practical exposure to SOC operations, incident response and threat hunting in a dedicated CoE." },
  { title: "Offline Classroom Training", text: "Instructor-led, on-premises classes with smartboard teaching at our Janakpuri, New Delhi centre." },
  { title: "Learning Beyond the Classroom", text: "Live projects, hackathons, cybersecurity competitions, expert guest sessions and research initiatives." },
];
