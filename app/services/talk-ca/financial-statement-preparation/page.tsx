import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Financial Statement Preparation | LAWXYGEN",
  description: "Financial Statement Preparation service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Financial Statement Preparation"}
      category={"Talk to a CA"}
      categorySlug={"talk-ca"}
      accent={"#14B8A6"}
      pageClassName={styles.servicePage}
    />
  );
}
