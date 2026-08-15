import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Payroll Compliance (PF, ESIC, PT) | LAWXYGEN",
  description: "Payroll Compliance (PF, ESIC, PT) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Payroll Compliance (PF, ESIC, PT)"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
