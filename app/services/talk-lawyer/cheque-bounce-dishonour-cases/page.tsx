import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Cheque Bounce / Dishonour Cases | LAWXYGEN",
  description: "Cheque Bounce / Dishonour Cases service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Cheque Bounce / Dishonour Cases"}
      category={"Talk to a Lawyer"}
      categorySlug={"talk-lawyer"}
      accent={"#EF4444"}
      pageClassName={styles.servicePage}
    />
  );
}
