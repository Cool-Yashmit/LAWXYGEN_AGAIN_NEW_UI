import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Advance Tax Computation & Payment | LAWXYGEN",
  description: "Advance Tax Computation & Payment service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Advance Tax Computation & Payment"}
      category={"Talk to a CA"}
      categorySlug={"talk-ca"}
      accent={"#14B8A6"}
      pageClassName={styles.servicePage}
    />
  );
}
