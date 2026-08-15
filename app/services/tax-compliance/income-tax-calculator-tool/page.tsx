import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Income Tax Calculator Tool | LAWXYGEN",
  description: "Income Tax Calculator Tool service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Income Tax Calculator Tool"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
