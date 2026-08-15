import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Income Tax Calculator | LAWXYGEN",
  description: "Income Tax Calculator service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Income Tax Calculator"}
      category={"Specialized Services"}
      categorySlug={"specialized-services"}
      accent={"#EF5DA8"}
      pageClassName={styles.servicePage}
    />
  );
}
