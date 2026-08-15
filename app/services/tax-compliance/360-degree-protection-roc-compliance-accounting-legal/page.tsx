import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "360 Degree Protection – ROC Compliance + Accounting + Legal | LAWXYGEN",
  description: "360 Degree Protection – ROC Compliance + Accounting + Legal service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"360 Degree Protection – ROC Compliance + Accounting + Legal"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
