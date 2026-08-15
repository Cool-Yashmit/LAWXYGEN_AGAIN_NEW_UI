import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Lease Agreement (Commercial Property) | LAWXYGEN",
  description: "Lease Agreement (Commercial Property) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Lease Agreement (Commercial Property)"}
      category={"Documentation"}
      categorySlug={"documentation"}
      accent={"#F59E0B"}
      pageClassName={styles.servicePage}
    />
  );
}
