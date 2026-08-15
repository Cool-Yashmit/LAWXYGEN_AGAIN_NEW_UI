import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Service Level Agreement (SLA) | LAWXYGEN",
  description: "Service Level Agreement (SLA) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Service Level Agreement (SLA)"}
      category={"Documentation"}
      categorySlug={"documentation"}
      accent={"#F59E0B"}
      pageClassName={styles.servicePage}
    />
  );
}
