import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Changes in Private Limited Company (Name, Address, Directors, MOA/AOA) | LAWXYGEN",
  description: "Changes in Private Limited Company (Name, Address, Directors, MOA/AOA) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Changes in Private Limited Company (Name, Address, Directors, MOA/AOA)"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
