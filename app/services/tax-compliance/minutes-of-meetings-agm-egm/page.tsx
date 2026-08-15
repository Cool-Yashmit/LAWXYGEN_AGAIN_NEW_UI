import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Minutes of Meetings (AGM / EGM) | LAWXYGEN",
  description: "Minutes of Meetings (AGM / EGM) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Minutes of Meetings (AGM / EGM)"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
