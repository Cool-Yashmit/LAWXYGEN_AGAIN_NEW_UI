import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "ROC Annual Filing (AOC-4, MGT-7) | LAWXYGEN",
  description: "ROC Annual Filing (AOC-4, MGT-7) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"ROC Annual Filing (AOC-4, MGT-7)"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
