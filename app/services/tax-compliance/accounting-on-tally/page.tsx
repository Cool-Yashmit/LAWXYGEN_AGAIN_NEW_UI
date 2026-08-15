import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Accounting on Tally | LAWXYGEN",
  description: "Accounting on Tally service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Accounting on Tally"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
