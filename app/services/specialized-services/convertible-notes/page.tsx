import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Convertible Notes | LAWXYGEN",
  description: "Convertible Notes service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Convertible Notes"}
      category={"Specialized Services"}
      categorySlug={"specialized-services"}
      accent={"#EF5DA8"}
      pageClassName={styles.servicePage}
    />
  );
}
