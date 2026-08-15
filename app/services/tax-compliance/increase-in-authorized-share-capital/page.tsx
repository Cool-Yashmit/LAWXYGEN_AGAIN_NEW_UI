import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Increase in Authorized Share Capital | LAWXYGEN",
  description: "Increase in Authorized Share Capital service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Increase in Authorized Share Capital"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
