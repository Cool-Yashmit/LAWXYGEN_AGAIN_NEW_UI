import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Transfer Pricing Documentation | LAWXYGEN",
  description: "Transfer Pricing Documentation service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Transfer Pricing Documentation"}
      category={"Talk to a CA"}
      categorySlug={"talk-ca"}
      accent={"#14B8A6"}
      pageClassName={styles.servicePage}
    />
  );
}
