import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Adding / Removing Directors | LAWXYGEN",
  description: "Adding / Removing Directors service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Adding / Removing Directors"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
