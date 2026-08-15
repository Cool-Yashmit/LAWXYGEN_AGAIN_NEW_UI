import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Professional Tax Registration & Filing | LAWXYGEN",
  description: "Professional Tax Registration & Filing service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Professional Tax Registration & Filing"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
