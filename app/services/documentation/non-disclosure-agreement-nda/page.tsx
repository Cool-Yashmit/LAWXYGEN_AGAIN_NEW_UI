import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Non-Disclosure Agreement (NDA) | LAWXYGEN",
  description: "Non-Disclosure Agreement (NDA) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Non-Disclosure Agreement (NDA)"}
      category={"Documentation"}
      categorySlug={"documentation"}
      accent={"#F59E0B"}
      pageClassName={styles.servicePage}
    />
  );
}
