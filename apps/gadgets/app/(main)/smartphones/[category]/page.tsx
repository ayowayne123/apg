import { notFound } from "next/navigation";
import { CATEGORY_CONFIG } from "@/app/config/categories";
import SmartPhonesCategory from "./category";
import { Suspense } from "react";

export async function generateStaticParams() {
  return CATEGORY_CONFIG.smartphones.map((c) => ({
    category: c.slug,
  }));
}
function Fallback() {
  return <>loading...</>;
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
      <Suspense fallback={<Fallback />}>
        <SmartPhonesCategory config={config} />
      </Suspense>
    </div>
  );
}
