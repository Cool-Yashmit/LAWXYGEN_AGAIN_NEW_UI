import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Income Tax Return (ITR) Filing – Businesses | LAWXYGEN",
  description: "Income Tax Return (ITR) Filing – Businesses service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Income Tax Return (ITR) Filing – Businesses"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
