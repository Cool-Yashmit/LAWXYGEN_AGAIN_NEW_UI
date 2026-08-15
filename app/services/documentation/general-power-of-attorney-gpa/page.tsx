import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "General Power of Attorney (GPA) | LAWXYGEN",
  description: "General Power of Attorney (GPA) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"General Power of Attorney (GPA)"}
      category={"Documentation"}
      categorySlug={"documentation"}
      accent={"#F59E0B"}
      pageClassName={styles.servicePage}
    />
  );
}
