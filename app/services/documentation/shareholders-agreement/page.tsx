import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Shareholders Agreement | LAWXYGEN",
  description: "Shareholders Agreement service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Shareholders Agreement"}
      category={"Documentation"}
      categorySlug={"documentation"}
      accent={"#F59E0B"}
      pageClassName={styles.servicePage}
    />
  );
}
