import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "TDS Calculator | LAWXYGEN",
  description: "TDS Calculator service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"TDS Calculator"}
      category={"Specialized Services"}
      categorySlug={"specialized-services"}
      accent={"#EF5DA8"}
      pageClassName={styles.servicePage}
    />
  );
}
