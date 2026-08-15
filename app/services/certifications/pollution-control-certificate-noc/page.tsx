import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Pollution Control Certificate (NOC) | LAWXYGEN",
  description: "Pollution Control Certificate (NOC) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Pollution Control Certificate (NOC)"}
      category={"Certifications"}
      categorySlug={"certifications"}
      accent={"#06B6D4"}
      pageClassName={styles.servicePage}
    />
  );
}
