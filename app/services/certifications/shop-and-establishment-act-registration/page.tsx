import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Shop & Establishment Act Registration | LAWXYGEN",
  description: "Shop & Establishment Act Registration service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Shop & Establishment Act Registration"}
      category={"Certifications"}
      categorySlug={"certifications"}
      accent={"#06B6D4"}
      pageClassName={styles.servicePage}
    />
  );
}
