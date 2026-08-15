import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Changes in LLP (Name, Partners, Registered Office) | LAWXYGEN",
  description: "Changes in LLP (Name, Partners, Registered Office) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Changes in LLP (Name, Partners, Registered Office)"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
