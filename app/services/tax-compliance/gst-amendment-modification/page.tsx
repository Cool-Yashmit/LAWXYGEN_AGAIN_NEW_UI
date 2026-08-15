import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "GST Amendment / Modification | LAWXYGEN",
  description: "GST Amendment / Modification service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"GST Amendment / Modification"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
