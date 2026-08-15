import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Gift Deed | LAWXYGEN",
  description: "Gift Deed service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Gift Deed"}
      category={"Documentation"}
      categorySlug={"documentation"}
      accent={"#F59E0B"}
      pageClassName={styles.servicePage}
    />
  );
}
