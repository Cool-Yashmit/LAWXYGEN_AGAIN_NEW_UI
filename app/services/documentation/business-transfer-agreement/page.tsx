import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Business Transfer Agreement | LAWXYGEN",
  description: "Business Transfer Agreement service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Business Transfer Agreement"}
      category={"Documentation"}
      categorySlug={"documentation"}
      accent={"#F59E0B"}
      pageClassName={styles.servicePage}
    />
  );
}
