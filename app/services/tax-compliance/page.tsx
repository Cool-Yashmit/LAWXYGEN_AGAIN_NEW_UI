import { ServiceCategoryPage } from "@/components/services/ServiceCategoryPage";

export const metadata = {
  title: "Tax & Compliance | LAWXYGEN",
  description: "Browse LAWXYGEN Tax & Compliance services.",
};

export default function Page() {
  return <ServiceCategoryPage groupSlug="tax-compliance" />;
}
