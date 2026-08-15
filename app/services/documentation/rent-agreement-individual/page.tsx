import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Rent Agreement (Individual) | LAWXYGEN",
  description: "Rent Agreement (Individual) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Rent Agreement (Individual)"}
      category={"Documentation"}
      categorySlug={"documentation"}
      accent={"#F59E0B"}
      pageClassName={styles.servicePage}
    />
  );
}
