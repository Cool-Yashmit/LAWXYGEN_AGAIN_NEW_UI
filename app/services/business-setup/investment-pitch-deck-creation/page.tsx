import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Investment Pitch Deck Creation | LAWXYGEN",
  description: "Investment Pitch Deck Creation service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Investment Pitch Deck Creation"}
      category={"Business Setup"}
      categorySlug={"business-setup"}
      accent={"#2F80ED"}
      pageClassName={styles.servicePage}
    />
  );
}
