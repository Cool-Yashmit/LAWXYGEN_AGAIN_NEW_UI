import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Increase in Authorized Share Capital | LAWXYGEN",
  description: "Increase in Authorized Share Capital service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Increase in Authorized Share Capital"}
      category={"Talk to a CS"}
      categorySlug={"talk-cs"}
      accent={"#6366F1"}
      pageClassName={styles.servicePage}
    />
  );
}
