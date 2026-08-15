import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Income Tax Notice Reply / Assessment Support | LAWXYGEN",
  description: "Income Tax Notice Reply / Assessment Support service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Income Tax Notice Reply / Assessment Support"}
      category={"Talk to a CA"}
      categorySlug={"talk-ca"}
      accent={"#14B8A6"}
      pageClassName={styles.servicePage}
    />
  );
}
