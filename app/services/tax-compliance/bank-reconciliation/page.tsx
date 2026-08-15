import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Bank Reconciliation | LAWXYGEN",
  description: "Bank Reconciliation service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Bank Reconciliation"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
