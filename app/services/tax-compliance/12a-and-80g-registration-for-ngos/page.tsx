import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "12A & 80G Registration for NGOs | LAWXYGEN",
  description: "12A & 80G Registration for NGOs service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"12A & 80G Registration for NGOs"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
