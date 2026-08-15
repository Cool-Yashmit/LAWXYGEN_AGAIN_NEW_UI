import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Changes in Company Structure (Name, Address, MOA/AOA) | LAWXYGEN",
  description: "Changes in Company Structure (Name, Address, MOA/AOA) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Changes in Company Structure (Name, Address, MOA/AOA)"}
      category={"Talk to a CS"}
      categorySlug={"talk-cs"}
      accent={"#6366F1"}
      pageClassName={styles.servicePage}
    />
  );
}
