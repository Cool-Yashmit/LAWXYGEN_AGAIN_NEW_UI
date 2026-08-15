import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Provisional Patent Application | LAWXYGEN",
  description: "Provisional Patent Application service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Provisional Patent Application"}
      category={"Intellectual Property"}
      categorySlug={"intellectual-property"}
      accent={"#8B5CF6"}
      pageClassName={styles.servicePage}
    />
  );
}
