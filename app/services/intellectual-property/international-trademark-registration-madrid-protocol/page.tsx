import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "International Trademark Registration (Madrid Protocol) | LAWXYGEN",
  description: "International Trademark Registration (Madrid Protocol) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"International Trademark Registration (Madrid Protocol)"}
      category={"Intellectual Property"}
      categorySlug={"intellectual-property"}
      accent={"#8B5CF6"}
      pageClassName={styles.servicePage}
    />
  );
}
