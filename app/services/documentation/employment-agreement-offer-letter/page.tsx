import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Employment Agreement / Offer Letter | LAWXYGEN",
  description: "Employment Agreement / Offer Letter service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Employment Agreement / Offer Letter"}
      category={"Documentation"}
      categorySlug={"documentation"}
      accent={"#F59E0B"}
      pageClassName={styles.servicePage}
    />
  );
}
