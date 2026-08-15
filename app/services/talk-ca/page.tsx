import { ServiceCategoryPage } from "@/components/services/ServiceCategoryPage";

export const metadata = {
  title: "Talk to a CA | LAWXYGEN",
  description: "Browse LAWXYGEN Talk to a CA services.",
};

export default function Page() {
  return <ServiceCategoryPage groupSlug="talk-ca" />;
}
