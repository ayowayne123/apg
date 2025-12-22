import { notFound } from "next/navigation";
import { CATEGORY_CONFIG } from "@/app/config/categories";
import AccessoriesCategory from "./category";

export async function generateStaticParams() {
  return CATEGORY_CONFIG.accessories.map((c) => ({
    category: c.slug,
  }));
}

export default async function AccessoriesCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const config = CATEGORY_CONFIG.accessories.find((c) => c.slug === category);

  if (!config) notFound();

  return (
    <div className="container">
      <AccessoriesCategory config={config} />
    </div>
  );
}
