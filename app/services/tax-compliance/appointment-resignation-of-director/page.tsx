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
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
