import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "TDS Certificate (Form 16 / 16A) Generation | LAWXYGEN",
  description: "TDS Certificate (Form 16 / 16A) Generation service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"TDS Certificate (Form 16 / 16A) Generation"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
