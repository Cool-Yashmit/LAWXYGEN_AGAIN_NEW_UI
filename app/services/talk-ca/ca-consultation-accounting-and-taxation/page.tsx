import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "CA Consultation – Accounting & Taxation | LAWXYGEN",
  description: "CA Consultation – Accounting & Taxation service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"CA Consultation – Accounting & Taxation"}
      category={"Talk to a CA"}
      categorySlug={"talk-ca"}
      accent={"#14B8A6"}
      pageClassName={styles.servicePage}
    />
  );
}
