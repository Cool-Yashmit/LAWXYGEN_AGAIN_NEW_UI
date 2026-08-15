import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Shops & Establishment Act Compliance | LAWXYGEN",
  description: "Shops & Establishment Act Compliance service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Shops & Establishment Act Compliance"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
