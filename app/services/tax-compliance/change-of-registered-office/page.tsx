import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Change of Registered Office | LAWXYGEN",
  description: "Change of Registered Office service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Change of Registered Office"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
