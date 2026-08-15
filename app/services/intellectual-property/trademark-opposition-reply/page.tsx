import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Trademark Opposition Reply | LAWXYGEN",
  description: "Trademark Opposition Reply service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Trademark Opposition Reply"}
      category={"Intellectual Property"}
      categorySlug={"intellectual-property"}
      accent={"#8B5CF6"}
      pageClassName={styles.servicePage}
    />
  );
}
