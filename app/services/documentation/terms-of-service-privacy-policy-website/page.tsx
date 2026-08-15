import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Terms of Service / Privacy Policy (Website) | LAWXYGEN",
  description: "Terms of Service / Privacy Policy (Website) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Terms of Service / Privacy Policy (Website)"}
      category={"Documentation"}
      categorySlug={"documentation"}
      accent={"#F59E0B"}
      pageClassName={styles.servicePage}
    />
  );
}
