import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "GST Advisory & Consultation | LAWXYGEN",
  description: "GST Advisory & Consultation service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"GST Advisory & Consultation"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
