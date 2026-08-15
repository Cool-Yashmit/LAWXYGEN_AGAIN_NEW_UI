import { ServiceCategoryPage } from "@/components/services/ServiceCategoryPage";

export const metadata = {
  title: "Talk to a Lawyer | LAWXYGEN",
  description: "Browse LAWXYGEN Talk to a Lawyer services.",
};

export default function Page() {
  return <ServiceCategoryPage groupSlug="talk-lawyer" />;
}
