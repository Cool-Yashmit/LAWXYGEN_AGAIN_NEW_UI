import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Halal Certification | LAWXYGEN",
  description: "Halal Certification service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Halal Certification"}
      category={"Certifications"}
      categorySlug={"certifications"}
      accent={"#06B6D4"}
      pageClassName={styles.servicePage}
    />
  );
}
