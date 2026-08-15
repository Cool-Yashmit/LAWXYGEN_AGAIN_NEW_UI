import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "GST LUT Filing | LAWXYGEN",
  description: "GST LUT Filing service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"GST LUT Filing"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
