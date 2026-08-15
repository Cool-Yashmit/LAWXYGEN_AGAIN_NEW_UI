import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Conversion of Business Structure | LAWXYGEN",
  description: "Conversion of Business Structure service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Conversion of Business Structure"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
