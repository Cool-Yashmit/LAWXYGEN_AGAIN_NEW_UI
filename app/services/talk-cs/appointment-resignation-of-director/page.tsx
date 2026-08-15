import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Appointment / Resignation of Director | LAWXYGEN",
  description: "Appointment / Resignation of Director service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Appointment / Resignation of Director"}
      category={"Talk to a CS"}
      categorySlug={"talk-cs"}
      accent={"#6366F1"}
      pageClassName={styles.servicePage}
    />
  );
}
