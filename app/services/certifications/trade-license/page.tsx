import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Trade License | LAWXYGEN",
  description: "Trade License service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Trade License"}
      category={"Certifications"}
      categorySlug={"certifications"}
      accent={"#06B6D4"}
      pageClassName={styles.servicePage}
    />
  );
}
