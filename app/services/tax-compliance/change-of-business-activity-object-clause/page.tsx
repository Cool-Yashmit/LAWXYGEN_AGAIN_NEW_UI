import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Change of Business Activity / Object Clause | LAWXYGEN",
  description: "Change of Business Activity / Object Clause service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Change of Business Activity / Object Clause"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
