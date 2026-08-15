import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Drug License | LAWXYGEN",
  description: "Drug License service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Drug License"}
      category={"Certifications"}
      categorySlug={"certifications"}
      accent={"#06B6D4"}
      pageClassName={styles.servicePage}
    />
  );
}
