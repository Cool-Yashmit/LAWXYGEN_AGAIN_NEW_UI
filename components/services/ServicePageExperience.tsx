"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { serviceHref } from "@/lib/serviceRoutes";
import { getServiceContent } from "./servicePageContent";
import styles from "./ServicePageShell.module.css";

type Props = {
  title: string;
  category: string;
  categorySlug: string;
  related: string[];
  theme: number;
  accent: string;
};

const themes = [
  { bg: "#f5f9ff", panel: "#edf5ff", soft: "#dcebff", ink: "#0b2a4a", accent: "#2f7cf6" },
  { bg: "#f5fbf9", panel: "#eaf8f3", soft: "#d3f1e5", ink: "#10382f", accent: "#16a47b" },
  { bg: "#f8f6ff", panel: "#f0ebff", soft: "#e2d9ff", ink: "#2a205e", accent: "#7958ee" },
  { bg: "#fffaf4", panel: "#fff1dc", soft: "#ffe4bd", ink: "#4c2f0e", accent: "#df8d1e" },
  { bg: "#fff7f8", panel: "#ffecef", soft: "#ffdce5", ink: "#541e2b", accent: "#d85877" },
  { bg: "#f3fbff", panel: "#e6f7ff", soft: "#d3effc", ink: "#103b52", accent: "#1b9ac7" },
];

const layouts = ["split", "editorial", "rail", "timeline", "cards", "catalog"] as const;
const indexItems = ["Overview", "Eligibility", "Expert tutorial", "Benefits", "Documents", "Process", "Pricing", "Related", "Expert help", "FAQs"];

function jump(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function ServicePageExperience({ title, category, categorySlug, related, theme, accent }: Props) {
  const visual = themes[theme % themes.length];
  const layout = layouts[theme % layouts.length];
  const content = useMemo(() => getServiceContent(title, category), [title, category]);
  const [indexOpen, setIndexOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((value) => (value + 1) % Math.max(related.length, 1)), 3400);
    return () => window.clearInterval(timer);
  }, [related.length]);

  const palette = { "--page-bg": visual.bg, "--page-panel": visual.panel, "--page-soft": visual.soft, "--page-ink": visual.ink, "--page-accent": accent || visual.accent } as React.CSSProperties;

  return (
    <div className={`${styles.experience} ${styles[`layout-${layout}`]}`} style={palette}>
      <div className={styles.pageTop} data-reveal>
        <div className={styles.crumbs}><Link href="/services">Services</Link><span>/</span><Link href={`/services/${categorySlug}`}>{category}</Link><span>/</span><strong>{title}</strong></div>
        <button className={styles.indexToggle} type="button" onClick={() => setIndexOpen((value) => !value)}>{indexOpen ? "Hide index" : "Page index"}<span>{indexOpen ? "−" : "+"}</span></button>
      </div>

      {indexOpen && (
        <nav className={styles.indexBar} data-reveal aria-label="Service page sections">
          {indexItems.map((item, index) => {
            const ids = ["overview", "eligibility", "tutorial", "benefits", "documents", "process", "pricing", "related", "help", "faq"];
            return <button key={item} type="button" onClick={() => jump(ids[index])}><b>{String(index + 1).padStart(2, "0")}</b>{item}</button>;
          })}
        </nav>
      )}

      <section className={styles.hero} data-reveal>
        <div className={styles.heroOrb} />
        <div className={styles.heroCopy}>
          <div className={styles.kicker}>{category.toUpperCase()} · LAWXYGEN</div>
          <h1>{title}</h1>
          <p>{content.hero}</p>
          <div className={styles.heroActions}>
            <Link className={styles.primary} href="/login">Start this service <span>↗</span></Link>
            <button className={styles.secondary} type="button" onClick={() => jump("help")}>Talk to an expert <span>→</span></button>
          </div>
          <div className={styles.heroFacts}>{content.highlights.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <aside className={styles.startPanel}>
          <div className={styles.panelEyebrow}>SERVICE WORKSPACE <span>01</span></div>
          <h2>Keep the next action visible.</h2>
          <div className={styles.statusList}>
            <div><span>Service</span><strong>{title}</strong></div>
            <div><span>Category</span><strong>{category}</strong></div>
            <div><span>Status</span><strong>Ready to start</strong></div>
            <div><span>Next</span><strong>Review requirements</strong></div>
          </div>
          <Link href="/login" className={styles.panelButton}>Log in / Sign up <span>→</span></Link>
        </aside>
      </section>

      <section id="overview" className={styles.section} data-reveal>
        <div className={styles.sectionLabel}>01 · OVERVIEW</div>
        <div className={styles.sectionGrid}>
          <h2>{title}<br /><em>at a glance.</em></h2>
          <div><p className={styles.largeCopy}>{content.overview}</p><div className={styles.signalRow}>{content.highlights.map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong></div>)}</div></div>
        </div>
      </section>

      <section id="eligibility" className={`${styles.section} ${styles.alt}`} data-reveal>
        <div className={styles.sectionLabel}>02 · ELIGIBILITY</div>
        <div className={styles.eligibilityWrap}>
          <div><h2>Know before<br />you begin.</h2><p>Use this checklist as a practical starting point. Service-specific conditions should be confirmed for the actual case.</p></div>
          <div className={styles.eligibilityList}>{content.eligibility.map((item, i) => <div key={item}><b>{String(i + 1).padStart(2, "0")}</b><span>{item}</span></div>)}</div>
        </div>
      </section>

      <section id="tutorial" className={styles.section} data-reveal>
        <div className={styles.sectionLabel}>03 · EXPERT TUTORIAL</div>
        <div className={styles.videoGrid}>
          <div className={styles.videoPanel}><div className={styles.play}>▶</div><div><span>LAWXYGEN EXPERT</span><strong>See how the service works.</strong></div></div>
          <div><h2>Understand the journey before you start.</h2><p>{content.tutorial}</p><button className={styles.textAction} type="button" onClick={() => jump("help")}>Talk to an expert <span>→</span></button></div>
        </div>
      </section>

      <section id="benefits" className={styles.section} data-reveal>
        <div className={styles.sectionLabel}>04 · BENEFITS</div>
        <div className={styles.sectionHead}><h2>Why this service matters.</h2><p>Short, useful reasons to choose a guided route.</p></div>
        <div className={styles.benefitGrid}>{content.benefits.map(([titleText, body], i) => <article key={titleText}><span>{String(i + 1).padStart(2, "0")}</span><h3>{titleText}</h3><p>{body}</p></article>)}</div>
      </section>

      <section id="documents" className={`${styles.section} ${styles.alt}`} data-reveal>
        <div className={styles.sectionLabel}>05 · DOCUMENTS</div>
        <div className={styles.sectionHead}><h2>Prepare what matters.</h2><p>Keep the essential records grouped so the next stage stays straightforward.</p></div>
        <div className={styles.documentGrid}>{content.documents.map(([group, items]) => <article key={group}><span>{group}</span><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>

      <section id="process" className={styles.section} data-reveal>
        <div className={styles.sectionLabel}>06 · PROCESS</div>
        <div className={styles.processGrid}><div><h2>From first step<br />to next action.</h2><p>Every stage is kept visible so the user knows what happens next.</p></div><div className={styles.steps}>{content.process.map(([num, step]) => <div key={num}><span>{num}</span><strong>{step}</strong><i>↗</i></div>)}</div></div>
      </section>

      <section id="pricing" className={`${styles.section} ${styles.alt}`} data-reveal>
        <div className={styles.sectionLabel}>07 · PRICING</div>
        <div className={styles.pricingCard}><div><span>LAWXYGEN SERVICE</span><h2>Clear scope.<br />Clear next step.</h2><p>{content.pricing}</p></div><Link href="/login" className={styles.primary}>Get started <span>↗</span></Link></div>
      </section>

      <section id="related" className={styles.section} data-reveal>
        <div className={styles.sectionLabel}>08 · RELATED SERVICES</div>
        <div className={styles.sectionHead}><h2>Continue where you need to.</h2><p>Related LAWXYGEN routes, kept one click away.</p></div>
        <div className={styles.relatedViewport}><div className={styles.relatedTrack} style={{ transform: `translateX(-${slide * 33.3333}%)` }}>{[...related, ...related, ...related].map((service, i) => <Link href={serviceHref(categorySlug, service)} key={`${service}-${i}`}><small>{String((i % Math.max(related.length, 1)) + 1).padStart(2, "0")}</small><strong>{service}</strong><span>↗</span></Link>)}</div></div>
      </section>

      <section id="help" className={styles.section} data-reveal>
        <div className={styles.helpPanel}><div><span>09 · TALK TO AN EXPERT</span><h2>Need a clearer next step?</h2><p>{content.help}</p></div><Link href="/services/talk-lawyer/online-lawyer-consultation" className={styles.lightButton}>Talk to an expert <span>→</span></Link></div>
      </section>

      <section id="faq" className={styles.section} data-reveal>
        <div className={styles.sectionLabel}>10 · FAQs</div>
        <div className={styles.faqGrid}><h2>Common questions,<br />answered clearly.</h2><div className={styles.faqList}>{content.faqs.map(([q, a], i) => <article key={q}><button type="button" onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}><span>{q}</span><b>{faqOpen === i ? "−" : "+"}</b></button>{faqOpen === i && <p>{a}</p>}</article>)}</div></div>
      </section>
    </div>
  );
}
