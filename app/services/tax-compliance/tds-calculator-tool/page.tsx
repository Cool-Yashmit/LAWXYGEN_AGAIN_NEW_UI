import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "TDS Calculator Tool | LAWXYGEN",
  description: "TDS Calculator Tool service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"TDS Calculator Tool"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
