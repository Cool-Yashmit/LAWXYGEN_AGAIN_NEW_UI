import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Trademark Registration (Indian) | LAWXYGEN",
  description: "Trademark Registration (Indian) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Trademark Registration (Indian)"}
      category={"Intellectual Property"}
      categorySlug={"intellectual-property"}
      accent={"#8B5CF6"}
      pageClassName={styles.servicePage}
    />
  );
}
