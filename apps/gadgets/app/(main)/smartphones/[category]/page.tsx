import { notFound } from "next/navigation";
import { CATEGORY_CONFIG } from "@/app/config/categories";
import SmartPhonesCategory from "./category";

export async function generateStaticParams() {
  return CATEGORY_CONFIG.smartphones.map((c) => ({
    category: c.slug,
  }));
}

export default async function SmartPhonesCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const config = CATEGORY_CONFIG.smartphones.find((c) => c.slug === category);

  if (!config) notFound();

  return (
    <div className="container">
      <SmartPhonesCategory config={config} />
    </div>
  );
}
