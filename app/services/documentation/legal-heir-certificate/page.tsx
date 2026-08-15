import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Legal Heir Certificate | LAWXYGEN",
  description: "Legal Heir Certificate service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Legal Heir Certificate"}
      category={"Documentation"}
      categorySlug={"documentation"}
      accent={"#F59E0B"}
      pageClassName={styles.servicePage}
    />
  );
}
