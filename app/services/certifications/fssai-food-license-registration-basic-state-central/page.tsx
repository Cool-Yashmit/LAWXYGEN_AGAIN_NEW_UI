import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "FSSAI Food License Registration (Basic / State / Central) | LAWXYGEN",
  description: "FSSAI Food License Registration (Basic / State / Central) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"FSSAI Food License Registration (Basic / State / Central)"}
      category={"Certifications"}
      categorySlug={"certifications"}
      accent={"#06B6D4"}
      pageClassName={styles.servicePage}
    />
  );
}
