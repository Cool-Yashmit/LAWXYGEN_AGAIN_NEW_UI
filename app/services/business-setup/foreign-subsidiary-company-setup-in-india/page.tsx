import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Foreign Subsidiary Company Setup in India | LAWXYGEN",
  description: "Foreign Subsidiary Company Setup in India service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Foreign Subsidiary Company Setup in India"}
      category={"Business Setup"}
      categorySlug={"business-setup"}
      accent={"#2F80ED"}
      pageClassName={styles.servicePage}
    />
  );
}
