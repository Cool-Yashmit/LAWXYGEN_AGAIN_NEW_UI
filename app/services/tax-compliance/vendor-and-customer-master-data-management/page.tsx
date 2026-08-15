import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Vendor & Customer Master Data Management | LAWXYGEN",
  description: "Vendor & Customer Master Data Management service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Vendor & Customer Master Data Management"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
