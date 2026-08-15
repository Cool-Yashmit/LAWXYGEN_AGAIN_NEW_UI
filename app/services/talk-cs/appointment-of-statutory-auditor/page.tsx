import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Appointment of Statutory Auditor | LAWXYGEN",
  description: "Appointment of Statutory Auditor service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Appointment of Statutory Auditor"}
      category={"Talk to a CS"}
      categorySlug={"talk-cs"}
      accent={"#6366F1"}
      pageClassName={styles.servicePage}
    />
  );
}
