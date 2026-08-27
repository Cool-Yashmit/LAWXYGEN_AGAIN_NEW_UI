import type { CSSProperties } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { serviceCatalog } from "@/data/serviceCatalog";
import { categoryHref } from "@/lib/serviceRoutes";
import { ServicePageExperience } from "./ServicePageExperience";
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
  const related = group?.services.filter((service) => service !== title).slice(0, 8) ?? [];

  return (
    <>
      <Header />
      <main
        className={`${styles.page} ${pageClassName}`}
        style={{ "--service-accent": accent } as CSSProperties}
      >
        <div className={styles.breadcrumbs}>
          <a href="/">Home</a><i />
          <a href="/services">Services</a><i />
          <a href={categoryHref(categorySlug)}>{category}</a><i />
          <span>{title}</span>
        </div>
        <ServicePageExperience
          title={title}
          category={category}
          categorySlug={categorySlug}
          related={related}
        />
      </main>
      <Footer />
    </>
  );
}
