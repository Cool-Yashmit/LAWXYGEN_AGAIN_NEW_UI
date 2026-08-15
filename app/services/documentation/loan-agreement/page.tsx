import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Loan Agreement | LAWXYGEN",
  description: "Loan Agreement service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Loan Agreement"}
      category={"Documentation"}
      categorySlug={"documentation"}
      accent={"#F59E0B"}
      pageClassName={styles.servicePage}
    />
  );
}
