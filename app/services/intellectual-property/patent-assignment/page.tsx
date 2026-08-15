import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Patent Assignment | LAWXYGEN",
  description: "Patent Assignment service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Patent Assignment"}
      category={"Intellectual Property"}
      categorySlug={"intellectual-property"}
      accent={"#8B5CF6"}
      pageClassName={styles.servicePage}
    />
  );
}
