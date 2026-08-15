import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Writ Petitions | LAWXYGEN",
  description: "Writ Petitions service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Writ Petitions"}
      category={"Talk to a Lawyer"}
      categorySlug={"talk-lawyer"}
      accent={"#EF4444"}
      pageClassName={styles.servicePage}
    />
  );
}
