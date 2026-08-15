import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Wrongful Termination Claims | LAWXYGEN",
  description: "Wrongful Termination Claims service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Wrongful Termination Claims"}
      category={"Talk to a Lawyer"}
      categorySlug={"talk-lawyer"}
      accent={"#EF4444"}
      pageClassName={styles.servicePage}
    />
  );
}
