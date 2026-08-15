import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Police Clearance Certificate (PCC) | LAWXYGEN",
  description: "Police Clearance Certificate (PCC) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Police Clearance Certificate (PCC)"}
      category={"Documentation"}
      categorySlug={"documentation"}
      accent={"#F59E0B"}
      pageClassName={styles.servicePage}
    />
  );
}
