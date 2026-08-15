import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Name Change (Gazette Notification) | LAWXYGEN",
  description: "Name Change (Gazette Notification) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Name Change (Gazette Notification)"}
      category={"Documentation"}
      categorySlug={"documentation"}
      accent={"#F59E0B"}
      pageClassName={styles.servicePage}
    />
  );
}
