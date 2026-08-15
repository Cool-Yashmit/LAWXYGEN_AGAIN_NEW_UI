import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Arbitration & Mediation | LAWXYGEN",
  description: "Arbitration & Mediation service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Arbitration & Mediation"}
      category={"Talk to a Lawyer"}
      categorySlug={"talk-lawyer"}
      accent={"#EF4444"}
      pageClassName={styles.servicePage}
    />
  );
}
