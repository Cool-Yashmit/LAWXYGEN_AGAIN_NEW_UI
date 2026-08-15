import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Copyright Infringement Advisory | LAWXYGEN",
  description: "Copyright Infringement Advisory service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Copyright Infringement Advisory"}
      category={"Intellectual Property"}
      categorySlug={"intellectual-property"}
      accent={"#8B5CF6"}
      pageClassName={styles.servicePage}
    />
  );
}
