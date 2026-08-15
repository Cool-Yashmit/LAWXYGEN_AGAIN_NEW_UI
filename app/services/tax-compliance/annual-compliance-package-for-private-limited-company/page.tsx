import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Annual Compliance Package for Private Limited Company | LAWXYGEN",
  description: "Annual Compliance Package for Private Limited Company service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Annual Compliance Package for Private Limited Company"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
