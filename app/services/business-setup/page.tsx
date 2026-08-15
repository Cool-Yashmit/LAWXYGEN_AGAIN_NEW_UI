import { ServiceCategoryPage } from "@/components/services/ServiceCategoryPage";

export const metadata = {
  title: "Business Setup | LAWXYGEN",
  description: "Browse LAWXYGEN Business Setup services.",
};

export default function Page() {
  return <ServiceCategoryPage groupSlug="business-setup" />;
}
