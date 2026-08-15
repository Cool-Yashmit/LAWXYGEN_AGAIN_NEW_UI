import { ServiceCategoryPage } from "@/components/services/ServiceCategoryPage";

export const metadata = {
  title: "Talk to a CS | LAWXYGEN",
  description: "Browse LAWXYGEN Talk to a CS services.",
};

export default function Page() {
  return <ServiceCategoryPage groupSlug="talk-cs" />;
}
