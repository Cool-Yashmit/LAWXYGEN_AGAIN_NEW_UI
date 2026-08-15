import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Accounts Payable & Receivable Management | LAWXYGEN",
  description: "Accounts Payable & Receivable Management service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Accounts Payable & Receivable Management"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
