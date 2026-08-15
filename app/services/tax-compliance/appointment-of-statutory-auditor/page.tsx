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
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
