"use client";

import { useEffect, useRef, useState } from "react";

type IconName =
  | "play"
  | "pause"
  | "volume"
  | "volumeX"
  | "menu"
  | "close"
  | "copy"
  | "mail"
  | "phone"
  | "paperclip"
  | "pin"
  | "file"
  | "battery"
  | "arrow";

const navItems = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Certifications", "#certifications"],
  ["Contact", "#contact"]
] as const;

const roles = ["CLOUD ENGINEER", "DEVOPS ENGINEER", "DEVSECOPS ENGINEER", "CYBERSECURITY ENTHUSIAST"];
const agentText = "# Kartik Kale\n\n**Role:** Cloud & DevOps Engineer\n**Location:** Pune, Maharashtra, India\n**Status:** Open to opportunities\n\n## Current focus\n- AWS cloud infrastructure, automation, and secure delivery\n- DevSecOps pipelines with Jenkins, Docker, SonarQube, and Trivy\n- Cybersecurity labs, monitoring, and incident response automation\n\n## Education\n- B.E. Electronics & Telecommunication Engineering\n- MES Wadia College of Engineering, Pune · 2026 · CGPA 8.35\n\n## Contact\n- Email: kalekartik2004@gmail.com\n- Phone: +91 9359156015\n\n## Index\n- [About](#about)\n- [Skills](#skills)\n- [Projects](#projects)\n- [Contact](#contact)";

const stackCards = [
  ["Cloud & Infrastructure", "Cloud foundations, networks, and infrastructure as code.", ["AWS", "EC2", "VPC", "S3", "ECR", "ECS", "IAM", "Terraform"]],
  ["DevOps & CI/CD", "Reliable delivery pipelines from commit to production.", ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Ansible", "Helm", "Nginx"]],
  ["DevSecOps & Cybersecurity", "Security checks and response woven into delivery.", ["Wazuh", "SIEM", "Trivy", "SonarQube", "Log Analysis", "Incident Response", "Threat Intelligence"]],
  ["Monitoring & Observability", "If you can't see it, you can't fix it.", ["Prometheus", "Grafana", "System Monitoring"]],
  ["Programming & Scripting", "Practical languages for automation and engineering.", ["Python", "Bash", "C++", "JavaScript", "SQL"]],
  ["Systems & Collaboration", "The tools that keep projects moving.", ["Linux", "Git", "GitHub", "REST APIs", "JSON"]]
] as const;

const brands = [
  "AWS",
  "Jenkins",
  "SonarQube",
  "Wazuh",
  "Docker",
  "GitLab",
  "Python",
  "Grafana",
  "Helm",
  "Kubernetes",
  "NGINX",
  "Prometheus",
  "Terraform",
  "Terraform",
  "Git",
  "GitHub"
];

const testTracks: readonly [string, string, string][] = [
  ["Summertime Sadness", "Lana Del Rey", "https://music.apple.com/us/song/summertime-sadness/1440811200"],
  ["Young and Beautiful", "Lana Del Rey", "https://music.apple.com/us/song/young-and-beautiful/1440811451"],
  ["Video Games", "Lana Del Rey", "https://music.apple.com/us/song/video-games/1440811185"],
  ["West Coast", "Lana Del Rey", "https://music.apple.com/us/song/west-coast/1440812014"]
] as const;

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true
  };

  if (name === "play") return <svg {...common}><path d="m8 5 11 7-11 7V5Z" /></svg>;
  if (name === "pause") return <svg {...common}><path d="M7 5v14M17 5v14" /></svg>;
  if (name === "volume") return <svg {...common}><path d="M11 5 6 9H3v6h3l5 4V5Z" /><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" /></svg>;
  if (name === "volumeX") return <svg {...common}><path d="M11 5 6 9H3v6h3l5 4V5Z" /><path d="m17 9 4 6m0-6-4 6" /></svg>;
  if (name === "menu") return <svg {...common}><path d="M4 6h16M4 12h16M4 18h16" /></svg>;
  if (name === "close") return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>;
  if (name === "copy") return <svg {...common}><rect x="9" y="9" width="11" height="11" rx="1" /><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" /></svg>;
  if (name === "mail") return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 7 9 6 9-6" /></svg>;
  if (name === "phone") return <svg {...common}><path d="M6.6 3.5 9 8l-2.2 1.8a15 15 0 0 0 7.4 7.4L16 15l4.5 2.4-.7 3a2 2 0 0 1-2.1 1.5C9.6 21.1 2.9 14.4 2.1 6.3A2 2 0 0 1 3.6 4.2l3-.7Z" /></svg>;
  if (name === "paperclip") return <svg {...common}><path d="m16.5 6.5-7.7 7.7a2.6 2.6 0 0 0 3.7 3.7l8-8a4 4 0 0 0-5.7-5.7l-8 8a6 6 0 0 0 8.5 8.5l7.2-7.2" /></svg>;
  if (name === "pin") return <svg {...common}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
  if (name === "file") return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h6" /></svg>;
  if (name === "battery") return <svg {...common}><rect x="3" y="6" width="16" height="12" rx="2" /><path d="M21 10v4M7 12h7" /></svg>;
  return <svg {...common}><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

function SectionHeader({ eyebrow, title, description, action }: { eyebrow: string; title: React.ReactNode; description?: string; action?: React.ReactNode }) {
  return (
    <header className="section-header">
      <div>
        <p className="section-kicker">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description ? <p className="section-description">{description}</p> : null}
      {action}
    </header>
  );
}

function ContactPill({ kind, value, href, copied, onCopy }: { kind: "email" | "phone"; value: string; href: string; copied: boolean; onCopy: () => void }) {
  return (
    <div className="contact-pill">
      <span className="contact-icon"><Icon name={kind === "email" ? "mail" : "phone"} size={15} /></span>
      <a href={href}>{value}</a>
      <button type="button" aria-label={copied ? `Copied ${kind}` : `Copy ${kind === "email" ? "email" : "phone number"}`} onClick={onCopy}>
        <Icon name="copy" size={14} />
      </button>
    </div>
  );
}

function Header({ scrolled, menuOpen, setMenuOpen }: { scrolled: boolean; menuOpen: boolean; setMenuOpen: (value: boolean) => void }) {
  const [playing, setPlaying] = useState(false);
  const [track, setTrack] = useState(testTracks[0]);
  const [volumeOpen, setVolumeOpen] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const audioRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);

  const toggleMusic = () => {
    if (playing) {
      oscillatorRef.current?.stop();
      oscillatorRef.current = null;
      setPlaying(false);
      return;
    }
    const AudioCtx = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const context = audioRef.current ?? new AudioCtx();
    audioRef.current = context;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = 220;
    gain.gain.value = Math.max(0.02, volume * 0.06);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start();
    oscillatorRef.current = oscillator;
    setPlaying(true);
  };

  useEffect(() => {
    setTrack(testTracks[Math.floor(Math.random() * testTracks.length)]);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="header-inner">
          <a className="home-mark" href="/" aria-label="Kartik Kale - home">KK.</a>
          <nav className="desktop-nav" aria-label="Primary">
            {navItems.map(([label, href]) => <a href={href} key={href}><span>→</span>{label}</a>)}
          </nav>
          <div className="media-controls">
            <button className="square-button media-button" type="button" aria-label={playing ? `Pause ${track[0]}` : `Play preview of ${track[0]}`} onClick={toggleMusic}><Icon name={playing ? "pause" : "play"} size={12} /></button>
            <a className="track-details" href={track[2]} target="_blank" rel="noreferrer"><strong>{track[0]}</strong><small>{track[1]}</small></a>
            <div className="volume-wrap">
              <button className="square-button media-button" type="button" aria-label={volumeOpen ? `Volume ${Math.round(volume * 100)}%` : "Unmute and open volume slider"} aria-expanded={volumeOpen} onClick={() => setVolumeOpen(!volumeOpen)}><Icon name={volume ? "volumeX" : "volume"} size={12} /></button>
              {volumeOpen ? <input aria-label="Volume" type="range" min="0" max="1" step="0.01" value={volume} onChange={(event) => setVolume(Number(event.target.value))} /> : null}
            </div>
            <a className="instagram-square" href="https://www.linkedin.com/in/kartik-kale" target="_blank" rel="noreferrer" aria-label="LinkedIn - Kartik Kale">+</a>
          </div>
          <button className="menu-button" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "close" : "menu"} size={20} /></button>
        </div>
      </header>
      {menuOpen ? (
        <div className="mobile-menu" role="dialog" aria-label="Site menu">
          <div className="mobile-menu-head"><a className="home-mark" href="/" onClick={() => setMenuOpen(false)}>hw</a><button type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)}><Icon name="close" size={24} /></button></div>
          <nav aria-label="Mobile primary">
            {navItems.map(([label, href]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}><span>→</span>{label}</a>)}
          </nav>
        </div>
      ) : null}
    </>
  );
}

function Hero({ copied, copy }: { copied: string; copy: (value: "email" | "phone") => void }) {
  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 1800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="page-section hero-outer">
      <div className="section-inner">
        <p className="hero-intro">HOLA&nbsp; · &nbsp;I&apos;M ◢</p>
        <section className="hero" aria-label="Hero">
          <div className="hero-grid">
            <div className="portrait-frame"><img src="/images/random/kartik-avatar.png" alt="Animated cyberpunk avatar of Kartik Kale" /></div>
            <div className="hero-copy">
              <p className="role-cycle" aria-live="polite">{roles[roleIndex]}</p>
              <h1>Kartik Kale.</h1>
              <p className="hero-body">Building scalable cloud infrastructure, automating workflows, and exploring secure, reliable systems.</p>
              <p className="hero-body">I work across AWS, containers, CI/CD, DevSecOps, and cybersecurity labs — always learning by building.</p>
              <p className="education" aria-label="Current education">B.E. Electronics &amp; Telecommunication Engineering · MES Wadia College of Engineering, Pune · 2026 · CGPA 8.35</p>
              <ul className="status-list" aria-label="Status"><li>OPEN TO OPPORTUNITIES</li><li>PUNE, MAHARASHTRA, INDIA · IST (UTC+5:30)</li></ul>
            </div>
            <div className="hero-aside">
              <aside className="focus-card" aria-label="Current focus">
                <span className="focus-dash" /><Icon name="paperclip" size={28} /><span className="focus-halo" />
                <p className="focus-label">CURRENT FOCUS</p>
                <ul>
                  <li><b>▸</b><span>Designing practical AWS infrastructure with networking, compute, storage, and IAM</span></li>
                  <li><b>▸</b><span>Building secure CI/CD pipelines with Jenkins, Docker, SonarQube, and Trivy</span></li>
                  <li><b>▸</b><span>Exploring Wazuh SIEM, monitoring, and automated incident response</span></li>
                </ul>
              </aside>
              <div className="contacts"><ContactPill kind="email" value="kalekartik2004@gmail.com" href="mailto:kalekartik2004@gmail.com" copied={copied === "email"} onCopy={() => copy("email")} /><ContactPill kind="phone" value="+91 9359156015" href="tel:+919359156015" copied={copied === "phone"} onCopy={() => copy("phone")} /></div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

function MapCard() {
  return (
    <article className="live-card map-card" aria-label="Live location">
      <div className="card-label">LOCATION</div>
      <div className="map-surface" aria-label="Map centred on Pune, Maharashtra" role="img">
        <span className="map-water water-one" /><span className="map-park park-one" /><span className="map-label label-pune">PUNE</span><span className="map-label label-kothrud">KOTHRUD</span><span className="map-label label-shivaji">SHIVAJI NAGAR</span><span className="map-label label-wadia">MES WADIA</span>
        <i className="map-road road-one" /><i className="map-road road-two" /><i className="map-road road-three" /><i className="map-road road-four" /><i className="map-road road-five" /><i className="map-route" />
        <span className="map-marker"><span /></span>
        <span className="map-scale">500 m</span><span className="mapbox-mark">mapbox</span>
      </div>
      <footer className="map-footer"><p className="location-copy"><Icon name="pin" size={14} /> Pune, Maharashtra, India</p><p className="card-meta">LIVE · IST (UTC+5:30)</p></footer>
    </article>
  );
}

function LiveCards() {
  return (
    <section className="page-section live-section">
      <div className="section-inner">
        <SectionHeader eyebrow="§01 · STATUS" title="Where, what, who." />
        <div className="live-grid">
          <MapCard />
          <article className="live-card music-card" aria-label="Apple Music now playing">
            <div><div className="card-label">APPLE MUSIC</div><p className="card-meta">Last played · 18 min ago</p></div>
            <a className="music-link" href="https://music.apple.com/us/song/tejano-blue/1783182599" target="_blank" rel="noreferrer"><strong>Tejano Blue</strong><span>Cigarettes After Sex · X&apos;s</span></a>
            <div className="disc"><span>♪</span></div>
          </article>
          <article className="live-card social-card" aria-label="Find me elsewhere">
            <div className="card-label" id="contact">FIND ME ELSEWHERE</div>
            <ul className="social-links">
              <li><a href="https://github.com/Kartik-IN" target="_blank" rel="noreferrer"><span>GITHUB</span><small>@Kartik-IN</small><Icon name="arrow" size={13} /></a></li>
              <li><a href="https://www.linkedin.com/in/kartik-kale" target="_blank" rel="noreferrer"><span>LINKEDIN</span><small>@kartik-kale</small><Icon name="arrow" size={13} /></a></li>
              <li><a href="mailto:kalekartik2004@gmail.com"><span>EMAIL</span><small>kalekartik2004@gmail.com</small><Icon name="arrow" size={13} /></a></li>
            </ul>
            <a className="resume-card" href="/resume"><img src="/images/random/resume.png" alt="" /><span><strong>RESUME</strong><small>PDF · OPEN IN TAB</small></span><Icon name="arrow" size={14} /></a>
          </article>
        </div>
      </div>
    </section>
  );
}

function PersonalAside() {
  return <section className="page-section aside-section" id="about"><div className="section-inner"><aside className="personal-aside" aria-label="About Kartik"><p>I&apos;m Kartik Kale, an Electronics and Telecommunication Engineering graduate focused on Cloud Computing, DevOps, DevSecOps, and Cybersecurity. I enjoy building reliable systems, automating delivery, and solving real-world engineering challenges.</p></aside></div></section>;
}

function StackCard({ title, description, tags }: { title: string; description: string; tags: readonly string[] }) {
  return <article className="stack-card" aria-label={title}><span className="card-sweep" /><span className="corner top-left" /><span className="corner top-right" /><span className="corner bottom-left" /><span className="corner bottom-right" /><div className="stack-card-copy"><div className="stack-card-head"><h3>{title}</h3><span>{tags.length}</span></div><p>{description}</p></div><ul className="tag-list">{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>;
}

function TechnicalStack() {
  return <section className="page-section section-y tex-graph technical-section" id="skills"><div className="section-inner"><section aria-label="Technical stack"><SectionHeader eyebrow="§02 · STACK" title="What I reach for." description="A snapshot of Kartik&apos;s cloud, DevOps, security, and automation toolkit." /><div className="stack-grid">{stackCards.map(([title, description, tags]) => <StackCard key={title} title={title} description={description} tags={tags} />)}</div></section></div></section>;
}

function HeatmapLegend() {
  return <footer className="heatmap-legend"><span>less</span><i /><i /><i /><i /><span>more</span></footer>;
}

function GithubActivity() {
  return <section className="page-section compact-section tex-graph"><div className="section-inner"><section aria-label="GitHub contributions heatmap"><SectionHeader eyebrow="§03 · GIT ACTIVITY" title="525 contributions this year" /><div className="heatmap-frame"><img src="/heatmaps/github.svg" alt="Contribution heatmap with 525 cells filled across 52 weeks" /></div><HeatmapLegend /></section></div></section>;
}

function CodingProfile() {
  const [year, setYear] = useState<"2026" | "2025" | "2024">("2026");
  return <section className="page-section compact-section tex-graph coding-section" id="certifications"><div className="section-inner"><section aria-label="Certifications and learning"><SectionHeader eyebrow="§04 · LEARNING" title={<><span>Always building, always learning</span><span className="coding-title-subtle"> · certifications in progress</span></>} /><ul className="coding-links"><li><a href="#skills">AWS CLOUD <strong>CORE</strong> <Icon name="arrow" size={12} /></a></li><li><a href="#skills">DOCKER <strong>CORE</strong> <Icon name="arrow" size={12} /></a></li><li><a href="#skills">LINUX <strong>CORE</strong> <Icon name="arrow" size={12} /></a></li></ul><div className="coding-subhead"><p>AWS CLOUD PRACTITIONER · ORACLE AGENTIC AI · LINUX · DOCKER</p></div><div className="heatmap-frame coding-heatmap"><img src="/heatmaps/coding-2026.svg" alt="Learning activity heatmap" /></div><HeatmapLegend /></section></div></section>;
}

const projects = [
  ["Three-Tier AWS Architecture", "Scalable AWS networking, compute, load balancing, and database design.", ["AWS", "VPC", "EC2", "ALB", "RDS"]],
  ["DevSecOps CI/CD Pipeline", "Jenkins delivery pipeline with quality analysis, container builds, and vulnerability scanning.", ["Jenkins", "Docker", "SonarQube", "Trivy"]],
  ["Enterprise SOC Home Lab", "Wazuh-based security monitoring lab for log collection, alert investigation, and detection.", ["Wazuh", "SIEM", "Linux", "VirtualBox"]],
  ["Automated Incident Response", "Python automation for alert enrichment, response actions, and incident reports.", ["Python", "Wazuh API", "REST API", "JSON"]],
  ["AWS Production-Ready VPC", "Segmented public/private networking with routing, controlled access, and Terraform.", ["AWS", "VPC", "NAT Gateway", "Terraform"]],
  ["AI Mock Interview Assistant", "Interview preparation platform with AI questions, voice interaction, and feedback.", ["Next.js", "Firebase", "Gemini AI", "n8n"]]
] as const;

function Projects() {
  return <section className="page-section section-y projects-section" id="projects"><div className="section-inner"><section aria-label="Projects"><SectionHeader eyebrow="§05 · PROJECTS" title="Things I keep building." description="Selected cloud, DevOps, DevSecOps, and automation projects." /><div className="projects-grid">{projects.map(([title, description, tags]) => <article className="project-card" key={title}><span className="project-index">PROJECT / {String(projects.findIndex((project) => project[0] === title) + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p><ul>{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul><a href="https://github.com/Kartik-IN" target="_blank" rel="noreferrer">VIEW REPOSITORY <Icon name="arrow" size={13} /></a></article>)}</div></section></div></section>;
}

function Favorites() {
  return <section className="page-section section-y favorites-section" id="favorites"><div className="section-inner"><section aria-label="Gaming favorites"><SectionHeader eyebrow="§06 · GAMING" title="When the infrastructure is quiet." /><div className="favorites-grid"><article className="favorite-card ac-card"><img src="/images/games/ac.jpg" alt="Assassin's Creed Valhalla key art" /><div className="favorite-overlay" /><p><span>UBISOFT · 2020</span><b>ASSASSIN&apos;S CREED VALHALLA</b></p></article><article className="favorite-card fc-card"><div className="fc-logo">FC25</div><p><span>EA · 2024</span><b>FC 25</b></p></article></div></section></div></section>;
}

function BrandMarquee() {
  const list = [...brands, ...brands];
  return <section className="brand-section" aria-label="Brands and organisations"><div className="brand-marquee"><ul>{list.map((brand, index) => <li key={`${brand}-${index}`}>{brand}</li>)}</ul></div><p className="sr-only">Brands and organisations: {brands.join(", ")}.</p></section>;
}

function FooterHud() {
  const [time, setTime] = useState("");
  useEffect(() => { const update = () => setTime(new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: "Asia/Kolkata" }).format(new Date())); update(); const timer = window.setInterval(update, 1000); return () => window.clearInterval(timer); }, []);
  return <footer className="site-footer" aria-label="Site footer HUD"><div className="footer-inner"><div className="footer-hud"><p>IST · <span>{time || "00:00:00"} IST</span></p><p>PUNE, MAHARASHTRA, INDIA</p><p>OPEN TO OPPORTUNITIES · <span className="battery-status"><Icon name="battery" size={12} />100%</span></p></div><div className="footer-rule" /><div className="footer-bottom"><p>© 2026 Kartik Kale.</p><p>You&apos;re the <strong>1,061st</strong> visitor.</p><a href="/?agent=1">AGENT VIEW</a></div></div></footer>;
}

function AgentView() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => { setScrolled(window.scrollY > 16); document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`); document.documentElement.style.setProperty("--scroll-angle", `${Math.min(window.scrollY * 0.008, 8)}deg`); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <><div className="cursor-bloom" /><div className="agent-banner" role="status">AGENT VIEW ACTIVE<span>·</span><a href="/">EXIT</a></div><Header scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><main id="main" className="dot-grid tex-noise"><section className="page-section agent-hero"><div className="section-inner"><p className="hero-intro">HOLA&nbsp; · &nbsp;I&apos;M ◢</p><pre className="agent-pre">{agentText}</pre></div></section><LiveCards /><PersonalAside /><div className="rail-wrap" aria-hidden="true"><div className="rail-comet" /></div><TechnicalStack /><GithubActivity /><CodingProfile /><div className="rail-wrap" aria-hidden="true"><div className="rail-comet" /></div><Favorites /><BrandMarquee /></main><FooterHud /></>;
}

export default function Home() {
  const [agentMode, setAgentMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const onScroll = () => { setScrolled(window.scrollY > 16); document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`); document.documentElement.style.setProperty("--scroll-angle", `${Math.min(window.scrollY * 0.008, 8)}deg`); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--mx", `${window.innerWidth / 2}px`);
    document.documentElement.style.setProperty("--my", `${window.innerHeight / 2}px`);
    const onPointerMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
      document.documentElement.style.setProperty("--my", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("agent-mode", agentMode);
    return () => document.body.classList.remove("agent-mode");
  }, [agentMode]);

  useEffect(() => {
    setAgentMode(new URLSearchParams(window.location.search).get("agent") === "1");
  }, []);

  const copy = (value: "email" | "phone") => {
    const text = value === "email" ? "kalekartik2004@gmail.com" : "+91 9359156015";
    navigator.clipboard?.writeText(text).catch(() => undefined);
    setCopied(value);
    window.setTimeout(() => setCopied(""), 1300);
  };

  if (agentMode) return <AgentView />;

  return <><div className="cursor-bloom" /><Header scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><main id="main" className="dot-grid tex-noise"><Hero copied={copied} copy={copy} /><LiveCards /><PersonalAside /><div className="rail-wrap" aria-hidden="true"><div className="rail-comet" /></div><TechnicalStack /><GithubActivity /><CodingProfile /><Projects /><div className="rail-wrap" aria-hidden="true"><div className="rail-comet" /></div><Favorites /><BrandMarquee /></main><FooterHud /></>;
}
