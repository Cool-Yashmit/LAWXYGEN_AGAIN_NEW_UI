import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Patent Drafting | LAWXYGEN",
  description: "Patent Drafting service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Patent Drafting"}
      category={"Intellectual Property"}
      categorySlug={"intellectual-property"}
      accent={"#8B5CF6"}
      pageClassName={styles.servicePage}
    />
  );
}
