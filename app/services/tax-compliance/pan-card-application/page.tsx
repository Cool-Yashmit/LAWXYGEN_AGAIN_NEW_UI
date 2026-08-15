import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "PAN Card Application | LAWXYGEN",
  description: "PAN Card Application service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"PAN Card Application"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
