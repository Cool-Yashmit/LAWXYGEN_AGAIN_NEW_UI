import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Composition Scheme Registration under GST | LAWXYGEN",
  description: "Composition Scheme Registration under GST service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Composition Scheme Registration under GST"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
