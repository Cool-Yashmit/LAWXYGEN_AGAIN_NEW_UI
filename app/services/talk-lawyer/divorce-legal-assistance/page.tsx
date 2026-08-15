import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Divorce (Legal Assistance) | LAWXYGEN",
  description: "Divorce (Legal Assistance) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Divorce (Legal Assistance)"}
      category={"Talk to a Lawyer"}
      categorySlug={"talk-lawyer"}
      accent={"#EF4444"}
      pageClassName={styles.servicePage}
    />
  );
}
