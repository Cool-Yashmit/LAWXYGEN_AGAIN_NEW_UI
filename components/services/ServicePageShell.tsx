import type { CSSProperties } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { serviceCatalog } from "@/data/serviceCatalog";
import { categoryHref, serviceHref } from "@/lib/serviceRoutes";
import styles from "./ServicePageShell.module.css";

type Props = {
  title: string;
  category: string;
  categorySlug: string;
  accent: string;
  pageClassName?: string;
};

export function ServicePageShell({
  title,
  category,
  categorySlug,
  accent,
  pageClassName = "",
}: Props) {
  const group = serviceCatalog.find((item) => item.slug === categorySlug);
  const related = group?.services.filter((service) => service !== title).slice(0, 6) ?? [];

  return (
    <>
      <Header />
      <main
        className={`${styles.page} ${pageClassName}`}
        style={{ "--service-accent": accent } as CSSProperties}
      >
        <section className={styles.hero}>
          <div className={styles.breadcrumbs}>
            <a href="/">Home</a>
            <i />
            <a href="/services">Services</a>
            <i />
            <a href={categoryHref(categorySlug)}>{category}</a>
          </div>

          <span className={styles.kicker}>LAWXYGEN SERVICE</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.lead}>
            This service page is connected and ready. Detailed service information, process,
            requirements, pricing and FAQs will be added after the final content is provided.
          </p>

          <div className={styles.actions}>
            <a className={styles.primary} href={categoryHref(categorySlug)}>
              Explore {category} <span>↗</span>
            </a>
            <a className={styles.secondary} href="/services/talk-lawyer/online-lawyer-consultation">
              Talk to an expert
            </a>
          </div>
        </section>

        <section className={styles.content}>
          <article className={styles.placeholder}>
            <span>CONTENT AREA</span>
            <h2>{title}</h2>
            <p>
              The page structure is ready for the client-approved content. We can add the final
              overview, eligibility, documents, process, timelines, fees, FAQs and service-specific
              sections here without changing the route.
            </p>
          </article>

          <aside className={styles.sideCard}>
            <span>RELATED SERVICES</span>
            <h3>{category}</h3>
            <div className={styles.related}>
              {related.map((service) => (
                <a key={service} href={serviceHref(categorySlug, service)}>
                  {service}
                  <span>↗</span>
                </a>
              ))}
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
