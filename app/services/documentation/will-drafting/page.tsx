import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Will Drafting | LAWXYGEN",
  description: "Will Drafting service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Will Drafting"}
      category={"Documentation"}
      categorySlug={"documentation"}
      accent={"#F59E0B"}
      pageClassName={styles.servicePage}
    />
  );
}
