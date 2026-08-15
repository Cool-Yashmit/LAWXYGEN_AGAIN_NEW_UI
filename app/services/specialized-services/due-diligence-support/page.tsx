import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Due Diligence Support | LAWXYGEN",
  description: "Due Diligence Support service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Due Diligence Support"}
      category={"Specialized Services"}
      categorySlug={"specialized-services"}
      accent={"#EF5DA8"}
      pageClassName={styles.servicePage}
    />
  );
}
