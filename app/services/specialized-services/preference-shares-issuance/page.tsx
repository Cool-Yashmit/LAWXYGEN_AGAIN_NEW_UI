import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Preference Shares Issuance | LAWXYGEN",
  description: "Preference Shares Issuance service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Preference Shares Issuance"}
      category={"Specialized Services"}
      categorySlug={"specialized-services"}
      accent={"#EF5DA8"}
      pageClassName={styles.servicePage}
    />
  );
}
