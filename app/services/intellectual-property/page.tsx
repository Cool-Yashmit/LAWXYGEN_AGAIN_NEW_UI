import { ServiceCategoryPage } from "@/components/services/ServiceCategoryPage";

export const metadata = {
  title: "Intellectual Property | LAWXYGEN",
  description: "Browse LAWXYGEN Intellectual Property services.",
};

export default function Page() {
  return <ServiceCategoryPage groupSlug="intellectual-property" />;
}
