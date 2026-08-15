import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Valuation Report for Share Issuance | LAWXYGEN",
  description: "Valuation Report for Share Issuance service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Valuation Report for Share Issuance"}
      category={"Specialized Services"}
      categorySlug={"specialized-services"}
      accent={"#EF5DA8"}
      pageClassName={styles.servicePage}
    />
  );
}
