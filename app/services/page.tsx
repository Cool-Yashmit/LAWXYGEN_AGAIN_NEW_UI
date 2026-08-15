import type { CSSProperties } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { serviceCatalog } from "@/data/serviceCatalog";
import { categoryHref } from "@/lib/serviceRoutes";
import styles from "../services.module.css";

export const metadata = {
  title: "All Services | LAWXYGEN",
  description: "Browse the complete LAWXYGEN service directory.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.wrap}>
          <section className={styles.hero}>
            <span>LAWXYGEN SERVICE DIRECTORY</span>
            <h1>Every service, connected.</h1>
            <p>
              Open any category and continue to its individual service pages. The complete route
              structure is ready for the final client-provided content.
            </p>
          </section>

          <section className={styles.grid}>
            {serviceCatalog.map((group) => (
              <a
                key={group.slug}
                href={categoryHref(group.slug)}
                className={styles.card}
                style={{ "--card-accent": group.accent } as CSSProperties}
              >
                <i />
                <h2>{group.label}</h2>
                <div>
                  <span>{group.services.length} services</span>
                  <b>Explore ↗</b>
                </div>
              </a>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
