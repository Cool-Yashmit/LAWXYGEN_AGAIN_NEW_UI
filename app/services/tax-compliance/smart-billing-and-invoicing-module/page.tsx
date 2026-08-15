import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Smart Billing & Invoicing Module | LAWXYGEN",
  description: "Smart Billing & Invoicing Module service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Smart Billing & Invoicing Module"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
