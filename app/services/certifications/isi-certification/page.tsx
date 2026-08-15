import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "ISI Certification | LAWXYGEN",
  description: "ISI Certification service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"ISI Certification"}
      category={"Certifications"}
      categorySlug={"certifications"}
      accent={"#06B6D4"}
      pageClassName={styles.servicePage}
    />
  );
}
