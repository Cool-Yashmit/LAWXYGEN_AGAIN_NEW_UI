import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "RD Calculator | LAWXYGEN",
  description: "RD Calculator service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"RD Calculator"}
      category={"Specialized Services"}
      categorySlug={"specialized-services"}
      accent={"#EF5DA8"}
      pageClassName={styles.servicePage}
    />
  );
}
