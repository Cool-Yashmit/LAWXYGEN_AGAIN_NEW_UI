import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Special Power of Attorney (SPA) | LAWXYGEN",
  description: "Special Power of Attorney (SPA) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Special Power of Attorney (SPA)"}
      category={"Documentation"}
      categorySlug={"documentation"}
      accent={"#F59E0B"}
      pageClassName={styles.servicePage}
    />
  );
}
