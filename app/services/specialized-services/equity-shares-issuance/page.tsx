import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Equity Shares Issuance | LAWXYGEN",
  description: "Equity Shares Issuance service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Equity Shares Issuance"}
      category={"Specialized Services"}
      categorySlug={"specialized-services"}
      accent={"#EF5DA8"}
      pageClassName={styles.servicePage}
    />
  );
}
