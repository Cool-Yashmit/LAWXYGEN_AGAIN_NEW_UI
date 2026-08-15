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
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
