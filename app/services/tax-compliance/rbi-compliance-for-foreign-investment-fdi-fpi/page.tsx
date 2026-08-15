import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "RBI Compliance for Foreign Investment (FDI / FPI) | LAWXYGEN",
  description: "RBI Compliance for Foreign Investment (FDI / FPI) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"RBI Compliance for Foreign Investment (FDI / FPI)"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
