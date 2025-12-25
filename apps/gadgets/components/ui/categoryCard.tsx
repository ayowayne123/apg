"use client";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  id: number;
  name: string;
  image: string;
  slug?: string;
}

export default function CategoryCard({ name, image, slug }: CategoryCardProps) {
  const url = slug || name.toLowerCase().replace(/\s+/g, "-");
  return (
    <Link
      href={`/${url}`}
      className=" h-[350px] lg:h-72 xl:h-[350px] group  odd:bg-apgCream even:bg-apgGrey rounded-2xl p-4 hover:shadow-md transition cursor-pointer"
    >
      <div className="relative w-full h-[256px] lg:h-52 xl:h-[256px] rounded-2xl overflow-hidden group-hover:grayscale transition">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <p className="mt-3 text-2xl font-bold tracking-[-1.4px]">{name}</p>
    </Link>
  );
}
