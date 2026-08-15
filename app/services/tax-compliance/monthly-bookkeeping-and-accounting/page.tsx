import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Monthly Bookkeeping & Accounting | LAWXYGEN",
  description: "Monthly Bookkeeping & Accounting service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Monthly Bookkeeping & Accounting"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
