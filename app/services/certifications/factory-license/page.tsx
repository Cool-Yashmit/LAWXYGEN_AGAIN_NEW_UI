import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Factory License | LAWXYGEN",
  description: "Factory License service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Factory License"}
      category={"Certifications"}
      categorySlug={"certifications"}
      accent={"#06B6D4"}
      pageClassName={styles.servicePage}
    />
  );
}
