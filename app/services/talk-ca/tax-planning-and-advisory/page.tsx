import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Tax Planning & Advisory | LAWXYGEN",
  description: "Tax Planning & Advisory service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Tax Planning & Advisory"}
      category={"Talk to a CA"}
      categorySlug={"talk-ca"}
      accent={"#14B8A6"}
      pageClassName={styles.servicePage}
    />
  );
}
