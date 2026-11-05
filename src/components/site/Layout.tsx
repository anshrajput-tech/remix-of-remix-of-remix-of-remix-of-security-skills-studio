import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, courses, logoUrl } from "@/data/site";

const nav = [
  { to: "/", label: "Home" }, { to: "/about", label: "About Us" },
  { to: "/courses", label: "Courses" }, { to: "/certifications", label: "Certifications" },
  { to: "/blogs", label: "Blogs" }, { to: "/workshops", label: "Workshops" },
] as const;
const resources = [{to:"/gallery",label:"Gallery"},{to:"/webinars",label:"Webinars"},{to:"/events",label:"Events"},{to:"/case-studies",label:"Case Studies"},{to:"/whitepapers",label:"Whitepapers"}] as const;

export function Logo({ className = "h-9" }: { className?: string }) {
  return <span className={`${className} academy-logo`}><span className="academy-logo-mark"><img src={logoUrl} alt="" /></span><span className="academy-wordmark">eSecurity<span>IN</span><small>CYBERSECURITY &amp; AI</small></span></span>;
}

export function Header() {
 const [open,setOpen]=useState(false);
 return <header className="site-header sticky top-0 z-40 border-b backdrop-blur"><div className="container-site grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex lg:justify-between"><Link to="/" aria-label="eSecurityIN home" className="min-w-0 shrink-0"><Logo className="h-10"/></Link><nav className="hidden items-center gap-5 text-xs xl:gap-9 font-semibold lg:flex" aria-label="Main">{nav.map(n=><Link key={n.to} to={n.to} activeOptions={{exact:true}}>{n.label}</Link>)}<div className="group relative"><Link to="/resources" className="flex items-center gap-1">Resources <ChevronDown size={12}/></Link><div className="invisible absolute right-0 top-full w-48 translate-y-3 rounded-md border border-border bg-popover p-2 text-popover-foreground opacity-0 shadow-card transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">{resources.map(n=><Link key={n.to} to={n.to} className="block rounded px-3 py-3 hover:bg-secondary">{n.label}</Link>)}</div></div></nav><div className="flex shrink-0 items-center gap-2"><Button asChild size="sm" className="hidden text-xs sm:inline-flex"><Link to="/contact">Contact Us</Link></Button><Button variant="ghost" size="icon" className="text-hero-foreground lg:hidden" aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button></div></div>{open&&<nav aria-label="Mobile" className="max-h-[calc(100dvh-80px)] overflow-auto border-t border-hero-border bg-hero lg:hidden"><div className="container-site flex flex-col py-3">{[...nav,{to:'/resources',label:'Resources'},...resources,{to:'/contact',label:'Contact Us'}].map(n=><Link key={n.to} to={n.to} onClick={()=>setOpen(false)} className="border-b border-hero-border py-3 text-sm">{n.label}</Link>)}</div></nav>}</header>;
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-foreground">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="h-10" />
          <p className="mt-4 text-sm leading-relaxed opacity-80">
            A brand of eSecurity Innovations Labs LLP — an industry-led Cybersecurity & Artificial Intelligence training institute in Janakpuri, New Delhi.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-heading">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-90">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/courses" className="hover:underline">All Courses</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li><li><Link to="/certifications" className="hover:underline">Certifications</Link></li><li><Link to="/blogs" className="hover:underline">Blogs</Link></li><li><Link to="/resources" className="hover:underline">Resources</Link></li>
            <li><Link to="/faculty" className="hover:underline">Faculty</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-heading">Course Categories</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-90">
            <li><Link to="/courses" hash="foundation" className="hover:underline">Foundations & AI</Link></li>
            <li><Link to="/offensive-security" className="hover:underline">Offensive Security</Link></li>
            <li><Link to="/defensive-security" className="hover:underline">Defensive Security</Link></li>
            <li><Link to="/courses/$slug" params={{ slug: courses[0]?.slug ?? "esecurityin-certified-cybersecurity-master-program-eccmp" }} className="hover:underline">Master Program (ECCMP)</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-heading">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm opacity-90">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />{contact.address}</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0" /><a href={`tel:${contact.phones[0]}`} className="hover:underline">{contact.phoneDisplay}</a></li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0" /><a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a></li>
          </ul>
          <div className="mt-4 flex gap-4 text-sm">
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="underline">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-site flex flex-col gap-2 py-5 text-xs opacity-75 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} eSecurity Innovations Labs LLP. All rights reserved.</span>
          <span className="flex gap-4">
            <a href={contact.privacy} target="_blank" rel="noreferrer" className="hover:underline">Privacy Policy</a>
            <a href={contact.terms} target="_blank" rel="noreferrer" className="hover:underline">Terms & Conditions</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="page-intro border-b border-border bg-secondary">
      <div className="container-site py-14 md:py-16">
        <nav className="mb-6 text-xs text-muted-foreground" aria-label="Breadcrumb"><Link to="/">Home</Link> / {eyebrow}</nav><p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-2 max-w-3xl text-3xl font-extrabold md:text-4xl">{title}</h1>
        {children && <div className="mt-4 max-w-2xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, text, center }: { eyebrow?: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-2 text-2xl font-extrabold md:text-3xl">{title}</h2>
      {text && <p className="mt-3 text-muted-foreground">{text}</p>}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="bg-accent">
      <div className="container-site flex flex-col items-start justify-between gap-5 py-12 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-extrabold">Ready to build your cybersecurity career?</h2>
          <p className="mt-1 text-muted-foreground">Speak to our team about the right course for you.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg"><Link to="/contact">Enquire Now</Link></Button>
          <Button asChild size="lg" variant="outline"><a href={`tel:${contact.phones[0]}`}>Call Us</a></Button>
        </div>
      </div>
    </section>
  );
}
