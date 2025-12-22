import { notFound } from "next/navigation";
import { CATEGORY_CONFIG } from "@/app/config/categories";
import ComputersCategory from "./category";
import { Suspense } from "react";

export async function generateStaticParams() {
  return CATEGORY_CONFIG.computers.map((c) => ({
    category: c.slug,
  }));
}

function Fallback() {
  return <>loading...</>;
}

export default async function ComputersCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const config = CATEGORY_CONFIG.computers.find((c) => c.slug === category);

  if (!config) notFound();

  return (
    <div className="container">
      <Suspense fallback={<Fallback />}>
        <ComputersCategory config={config} />
      </Suspense>
    </div>
  );
}
