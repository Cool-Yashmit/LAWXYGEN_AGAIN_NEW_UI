import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Sale Deed | LAWXYGEN",
  description: "Sale Deed service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Sale Deed"}
      category={"Documentation"}
      categorySlug={"documentation"}
      accent={"#F59E0B"}
      pageClassName={styles.servicePage}
    />
  );
}
