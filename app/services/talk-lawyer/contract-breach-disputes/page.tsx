import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Contract Breach Disputes | LAWXYGEN",
  description: "Contract Breach Disputes service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Contract Breach Disputes"}
      category={"Talk to a Lawyer"}
      categorySlug={"talk-lawyer"}
      accent={"#EF4444"}
      pageClassName={styles.servicePage}
    />
  );
}
