import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Financial Statement Preparation (P&L, Balance Sheet) | LAWXYGEN",
  description: "Financial Statement Preparation (P&L, Balance Sheet) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Financial Statement Preparation (P&L, Balance Sheet)"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
