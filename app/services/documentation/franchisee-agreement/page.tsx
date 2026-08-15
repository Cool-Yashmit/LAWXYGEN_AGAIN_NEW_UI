import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Franchisee Agreement | LAWXYGEN",
  description: "Franchisee Agreement service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Franchisee Agreement"}
      category={"Documentation"}
      categorySlug={"documentation"}
      accent={"#F59E0B"}
      pageClassName={styles.servicePage}
    />
  );
}
