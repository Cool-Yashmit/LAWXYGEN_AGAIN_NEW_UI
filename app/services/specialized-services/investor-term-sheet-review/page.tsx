import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Investor Term Sheet Review | LAWXYGEN",
  description: "Investor Term Sheet Review service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Investor Term Sheet Review"}
      category={"Specialized Services"}
      categorySlug={"specialized-services"}
      accent={"#EF5DA8"}
      pageClassName={styles.servicePage}
    />
  );
}
