import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Consumer Complaint Drafting | LAWXYGEN",
  description: "Consumer Complaint Drafting service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Consumer Complaint Drafting"}
      category={"Documentation"}
      categorySlug={"documentation"}
      accent={"#F59E0B"}
      pageClassName={styles.servicePage}
    />
  );
}
