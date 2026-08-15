import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Family Law – Divorce, Alimony, Child Custody | LAWXYGEN",
  description: "Family Law – Divorce, Alimony, Child Custody service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Family Law – Divorce, Alimony, Child Custody"}
      category={"Talk to a Lawyer"}
      categorySlug={"talk-lawyer"}
      accent={"#EF4444"}
      pageClassName={styles.servicePage}
    />
  );
}
