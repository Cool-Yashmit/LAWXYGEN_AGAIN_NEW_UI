import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Director KYC (DIR-3 KYC) | LAWXYGEN",
  description: "Director KYC (DIR-3 KYC) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Director KYC (DIR-3 KYC)"}
      category={"Talk to a CS"}
      categorySlug={"talk-cs"}
      accent={"#6366F1"}
      pageClassName={styles.servicePage}
    />
  );
}
