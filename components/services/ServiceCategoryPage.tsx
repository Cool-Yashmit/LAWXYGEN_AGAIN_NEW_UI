import type { CSSProperties } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { serviceCatalog } from "@/data/serviceCatalog";
import { serviceHref } from "@/lib/serviceRoutes";
import styles from "./ServiceCategoryPage.module.css";

type Props = {
  groupSlug: string;
};

export function ServiceCategoryPage({ groupSlug }: Props) {
  const group = serviceCatalog.find((item) => item.slug === groupSlug);

  if (!group) return null;

  return (
    <>
      <Header />
      <main
        className={styles.page}
        style={{ "--category-accent": group.accent } as CSSProperties}
      >
        <div className={styles.wrap}>
          <div className={styles.breadcrumbs}>
            <a href="/">Home</a>
            <i />
            <a href="/services">Services</a>
          </div>

          <section className={styles.hero} data-letter={group.label.charAt(0)}>
            <span className={styles.kicker}>LAWXYGEN SERVICE CATEGORY</span>
            <h1>{group.label}</h1>
            <p>
              Browse every connected LAWXYGEN service in this category. Detailed service content
              will be added to each individual page after the final content is supplied.
            </p>
          </section>

          <section className={styles.directory}>
            <div className={styles.directoryHead}>
              <div>
                <span>SERVICE DIRECTORY</span>
                <h2>{group.label}</h2>
              </div>
              <b>{group.services.length} services</b>
            </div>

            <div className={styles.list}>
              {group.services.map((service, index) => (
                <a href={serviceHref(group.slug, service)} key={service}>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  <strong>{service}</strong>
                  <b>↗</b>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
