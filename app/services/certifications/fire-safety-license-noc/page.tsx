import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Fire Safety License (NOC) | LAWXYGEN",
  description: "Fire Safety License (NOC) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Fire Safety License (NOC)"}
      category={"Certifications"}
      categorySlug={"certifications"}
      accent={"#06B6D4"}
      pageClassName={styles.servicePage}
    />
  );
}
