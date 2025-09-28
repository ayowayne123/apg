import Image from "next/image";
import Hero from "@/app/(main)/home/hero";
import TrendyProducts from "@/app/(main)/home/trendyProducts";
import BrowseCategories from "@/app/(main)/home/categories";
import Discount from "@/app/(main)/home/discount";
import Swap from "@/app/(main)/home/swap";

export default function Home() {
  return (
    <>
      <div className="container">
        <Hero />
        <BrowseCategories />
        <TrendyProducts />
        <Discount />
        <Swap />
      </div>
    </>
  );
}
