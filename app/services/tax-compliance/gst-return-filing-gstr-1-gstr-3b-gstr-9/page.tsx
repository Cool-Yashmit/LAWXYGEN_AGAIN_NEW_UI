import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "GST Return Filing (GSTR-1, GSTR-3B, GSTR-9) | LAWXYGEN",
  description: "GST Return Filing (GSTR-1, GSTR-3B, GSTR-9) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"GST Return Filing (GSTR-1, GSTR-3B, GSTR-9)"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
