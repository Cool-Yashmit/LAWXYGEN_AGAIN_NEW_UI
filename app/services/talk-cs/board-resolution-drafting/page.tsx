import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Board Resolution Drafting | LAWXYGEN",
  description: "Board Resolution Drafting service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Board Resolution Drafting"}
      category={"Talk to a CS"}
      categorySlug={"talk-cs"}
      accent={"#6366F1"}
      pageClassName={styles.servicePage}
    />
  );
}
