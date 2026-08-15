import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Labour Law Audit | LAWXYGEN",
  description: "Labour Law Audit service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Labour Law Audit"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
