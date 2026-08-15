import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Affidavit Drafting | LAWXYGEN",
  description: "Affidavit Drafting service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Affidavit Drafting"}
      category={"Documentation"}
      categorySlug={"documentation"}
      accent={"#F59E0B"}
      pageClassName={styles.servicePage}
    />
  );
}
