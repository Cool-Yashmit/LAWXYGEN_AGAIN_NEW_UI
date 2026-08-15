import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Cyber Crime Legal Support | LAWXYGEN",
  description: "Cyber Crime Legal Support service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Cyber Crime Legal Support"}
      category={"Talk to a Lawyer"}
      categorySlug={"talk-lawyer"}
      accent={"#EF4444"}
      pageClassName={styles.servicePage}
    />
  );
}
