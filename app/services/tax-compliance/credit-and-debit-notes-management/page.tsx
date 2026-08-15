import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Credit & Debit Notes Management | LAWXYGEN",
  description: "Credit & Debit Notes Management service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Credit & Debit Notes Management"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
