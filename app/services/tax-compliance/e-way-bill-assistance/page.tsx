import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "E-Way Bill Assistance | LAWXYGEN",
  description: "E-Way Bill Assistance service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"E-Way Bill Assistance"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
