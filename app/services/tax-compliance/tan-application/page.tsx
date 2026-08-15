import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "TAN Application | LAWXYGEN",
  description: "TAN Application service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"TAN Application"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
