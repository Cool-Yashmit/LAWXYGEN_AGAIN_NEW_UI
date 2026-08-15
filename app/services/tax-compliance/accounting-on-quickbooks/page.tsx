import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Accounting on QuickBooks | LAWXYGEN",
  description: "Accounting on QuickBooks service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Accounting on QuickBooks"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
