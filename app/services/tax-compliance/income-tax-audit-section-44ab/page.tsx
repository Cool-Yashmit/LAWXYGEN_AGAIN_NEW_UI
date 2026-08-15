import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Income Tax Audit (Section 44AB) | LAWXYGEN",
  description: "Income Tax Audit (Section 44AB) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Income Tax Audit (Section 44AB)"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
