"use client";

import { useMemo, useState } from "react";
import { categoryHref, serviceHref } from "@/lib/serviceRoutes";
import { getServicePageContent } from "./servicePageContent";
import styles from "./ServicePageShell.module.css";

type Audience = "individual" | "business";

type Props = {
  title: string;
  category: string;
  categorySlug: string;
  related: string[];
};

const sections = [
  ["overview", "Overview"],
  ["eligibility", "Eligibility"],
  ["benefits", "Benefits"],
  ["documents", "Documents"],
  ["process", "Process"],
  ["tutorial", "Expert video"],
  ["pricing", "Pricing"],
  ["related", "Related"],
  ["faq", "FAQs"],
] as const;

export function ServicePageExperience({ title, category, categorySlug, related }: Props) {
  const [audience, setAudience] = useState<Audience>("business");
  const [indexOpen, setIndexOpen] = useState(true);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const content = useMemo(() => getServicePageContent(title, category), [title, category]);
  const marqueeItems = useMemo(() => {
    const items = related.length ? related : [title];
    return [...items, ...items];
  }, [related, title]);

  const openLogin = () => {
    document.querySelector<HTMLButtonElement>(".lawx-final-login")?.click();
  };

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className={styles.audienceBar}>
        <span>Registering as</span>
        <div className={styles.audienceTabs} role="tablist" aria-label="Customer type">
          <button
            type="button"
            className={audience === "individual" ? styles.activeAudience : ""}
            onClick={() => setAudience("individual")}
            role="tab"
            aria-selected={audience === "individual"}
          >
            Individual
          </button>
          <button
            type="button"
            className={audience === "business" ? styles.activeAudience : ""}
            onClick={() => setAudience("business")}
            role="tab"
            aria-selected={audience === "business"}
          >
            Business
          </button>
        </div>
        <p>
          {audience === "business"
            ? "For founders, teams and businesses completing this service."
            : "For an individual starting or managing the service personally."}
        </p>
      </div>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>{category}</span>
          <h1>{title}</h1>
          <p className={styles.heroSummary}>{content.summary}</p>
          <div className={styles.heroPoints}>
            {content.heroPoints.map((point) => (
              <span key={point}><i>✓</i>{point}</span>
            ))}
          </div>
          <div className={styles.heroActions}>
            <button type="button" className={styles.primaryAction} onClick={openLogin}>
              Start service <span>↗</span>
            </button>
            <a href="/services/talk-lawyer/online-lawyer-consultation" className={styles.secondaryAction}>
              Talk to an expert <span>→</span>
            </a>
          </div>
        </div>

        <aside className={styles.workspaceCard} aria-label="LAWXYGEN service workspace">
          <div className={styles.workspaceTop}>
            <div>
              <span>YOUR SERVICE WORKSPACE</span>
              <strong>Ready when you are.</strong>
            </div>
            <b>0%</b>
          </div>
          <div className={styles.workspaceProgress}><i /></div>
          <div className={styles.workspaceRows}>
            <div><span>Account</span><strong>Not signed in</strong></div>
            <div><span>Status</span><strong>Not started</strong></div>
            <div><span>Next step</span><strong>Sign in and share details</strong></div>
          </div>
          <button type="button" onClick={openLogin}>Login / Sign up <span>→</span></button>
          <p>After sign-in, track documents, actions and service status from your LAWXYGEN dashboard.</p>
        </aside>
      </section>

      <div className={styles.factStrip}>
        {content.facts.map((fact) => (
          <div key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>
        ))}
      </div>

      <div className={styles.bodyGrid}>
        <aside className={`${styles.sectionIndex} ${indexOpen ? styles.indexOpen : styles.indexClosed}`}>
          <button type="button" className={styles.indexToggle} onClick={() => setIndexOpen((value) => !value)}>
            <span>{indexOpen ? "On this page" : "Index"}</span>
            <b>{indexOpen ? "−" : "+"}</b>
          </button>
          {indexOpen && (
            <nav aria-label="Service page sections">
              {sections.map(([id, label], index) => (
                <button key={id} type="button" onClick={() => goTo(id)}>
                  <span>{String(index + 1).padStart(2, "0")}</span>{label}
                </button>
              ))}
            </nav>
          )}
        </aside>

        <div className={styles.sections}>
          <section id="overview" className={styles.section}>
            <div className={styles.sectionHeading}>
              <span>01</span>
              <div><small>OVERVIEW</small><h2>What you should know first.</h2></div>
            </div>
            <div className={styles.readingGrid}>
              <div className={styles.prose}>
                {content.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className={styles.noteCard}>
                <span>LAWXYGEN NOTE</span>
                <strong>Clear before you file.</strong>
                <p>We keep the legal process, documents and next action visible so you know what is happening at each stage.</p>
              </div>
            </div>
          </section>

          <section id="eligibility" className={styles.section}>
            <div className={styles.sectionHeading}>
              <span>02</span>
              <div><small>ELIGIBILITY</small><h2>Quick eligibility check.</h2></div>
            </div>
            <div className={styles.checkList}>
              {content.eligibility.map((item, index) => (
                <article key={item.title}>
                  <i>{String(index + 1).padStart(2, "0")}</i>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section id="benefits" className={styles.section}>
            <div className={styles.sectionHeading}>
              <span>03</span>
              <div><small>BENEFITS</small><h2>Why businesses choose this structure.</h2></div>
            </div>
            <div className={styles.benefitGrid}>
              {content.benefits.map((item, index) => (
                <article key={item.title}>
                  <i>{String(index + 1).padStart(2, "0")}</i>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="documents" className={styles.section}>
            <div className={styles.sectionHeading}>
              <span>04</span>
              <div><small>DOCUMENTS</small><h2>Prepare these before filing.</h2></div>
            </div>
            <div className={styles.documentGrid}>
              {content.documentGroups.map((group) => (
                <article key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </section>

          <section id="process" className={styles.section}>
            <div className={styles.sectionHeading}>
              <span>05</span>
              <div><small>PROCESS</small><h2>From details to incorporation.</h2></div>
            </div>
            <div className={styles.processList}>
              {content.process.map((step, index) => (
                <article key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="tutorial" className={`${styles.section} ${styles.tutorialSection}`}>
            <div className={styles.videoPanel}>
              <div className={styles.videoBadge}>EXPERT VIDEO</div>
              <button type="button" aria-label="Expert tutorial coming soon">▶</button>
              <span>LAWXYGEN expert tutorial</span>
            </div>
            <div className={styles.tutorialCopy}>
              <span>06 — EXPERT VIDEO</span>
              <h2>Prefer watching instead?</h2>
              <p>The page is ready for a short LAWXYGEN expert video. It will be enabled when the approved service tutorial is available.</p>
            </div>
          </section>

          <section id="pricing" className={styles.section}>
            <div className={styles.sectionHeading}>
              <span>07</span>
              <div><small>PRICING</small><h2>Know the cost before filing.</h2></div>
            </div>
            <div className={styles.pricingPanel}>
              <div>
                <span>TRANSPARENT QUOTE</span>
                <strong>Get the exact LAWXYGEN price</strong>
                <p>{content.pricingNote}</p>
              </div>
              <button type="button" onClick={openLogin}>Get started <span>↗</span></button>
            </div>
          </section>

          <section id="related" className={styles.section}>
            <div className={styles.sectionHeading}>
              <span>08</span>
              <div><small>RELATED SERVICES</small><h2>Useful next steps.</h2></div>
            </div>
            <div className={styles.marquee}>
              <div className={styles.marqueeTrack}>
                {marqueeItems.map((service, index) => (
                  <a key={`${service}-${index}`} href={serviceHref(categorySlug, service)}>
                    <span>{service}</span><b>↗</b>
                  </a>
                ))}
              </div>
            </div>
            <a className={styles.categoryLink} href={categoryHref(categorySlug)}>Browse all {category} services <span>→</span></a>
          </section>

          <section className={styles.helpSection}>
            <div>
              <span>NEED HELP?</span>
              <h2>Not sure what applies to you?</h2>
              <p>Speak with a LAWXYGEN expert before you start. We can help you identify the right service and next step.</p>
            </div>
            <a href="/services/talk-lawyer/online-lawyer-consultation">Talk to an expert <span>↗</span></a>
          </section>

          <section id="faq" className={styles.section}>
            <div className={styles.sectionHeading}>
              <span>09</span>
              <div><small>FAQ</small><h2>Common questions.</h2></div>
            </div>
            <div className={styles.faqList}>
              {content.faqs.map(([question, answer], index) => (
                <article key={question} className={faqOpen === index ? styles.faqActive : ""}>
                  <button type="button" onClick={() => setFaqOpen(faqOpen === index ? null : index)} aria-expanded={faqOpen === index}>
                    <span>{question}</span><b>{faqOpen === index ? "−" : "+"}</b>
                  </button>
                  <div><p>{answer}</p></div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>

      <a className={styles.floatingHelp} href="/services/talk-lawyer/online-lawyer-consultation" aria-label="Talk to a LAWXYGEN expert">
        <span>?</span><b>Need help?</b>
      </a>
    </>
  );
}
