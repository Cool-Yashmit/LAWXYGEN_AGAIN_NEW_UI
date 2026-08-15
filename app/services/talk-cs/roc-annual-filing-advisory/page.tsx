import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "ROC Annual Filing Advisory | LAWXYGEN",
  description: "ROC Annual Filing Advisory service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"ROC Annual Filing Advisory"}
      category={"Talk to a CS"}
      categorySlug={"talk-cs"}
      accent={"#6366F1"}
      pageClassName={styles.servicePage}
    />
  );
}
