import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "TDS Return Filing | LAWXYGEN",
  description: "TDS Return Filing service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"TDS Return Filing"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
