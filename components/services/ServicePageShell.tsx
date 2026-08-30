import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { serviceCatalog } from "@/data/serviceCatalog";
import { ServicePageExperience } from "./ServicePageExperience";
import styles from "./ServicePageShell.module.css";

type Props = {
  title: string;
  category: string;
  categorySlug: string;
  accent?: string;
  pageClassName?: string;
  theme?: number;
};

export function ServicePageShell({ title, category, categorySlug, accent = "#2f7cf6", pageClassName = "", theme = 0 }: Props) {
  const group = serviceCatalog.find((item) => item.slug === categorySlug);
  const related = group?.services.filter((service) => service !== title).slice(0, 8) ?? [];

  return (
    <div className={`${styles.shell} ${pageClassName}`}>
      <Header />
      <main>
        <ServicePageExperience
          title={title}
          category={category}
          categorySlug={categorySlug}
          related={related}
          accent={accent}
          theme={theme}
        />
      </main>
      <Footer />
    </div>
  );
}
