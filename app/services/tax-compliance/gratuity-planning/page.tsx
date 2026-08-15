import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Gratuity Planning | LAWXYGEN",
  description: "Gratuity Planning service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Gratuity Planning"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
