import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Complete Patent Application | LAWXYGEN",
  description: "Complete Patent Application service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Complete Patent Application"}
      category={"Intellectual Property"}
      categorySlug={"intellectual-property"}
      accent={"#8B5CF6"}
      pageClassName={styles.servicePage}
    />
  );
}
