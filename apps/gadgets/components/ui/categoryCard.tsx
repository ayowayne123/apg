"use client";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  name: string;
  image: string;
}

export default function CategoryCard({ name, image }: CategoryCardProps) {
  return (
    <Link
      href={`/${name}`}
      className=" h-[350px] group  odd:bg-apgCream even:bg-apgGrey rounded-2xl p-4 hover:shadow-md transition cursor-pointer"
    >
      <div className="relative w-full h-[256px] rounded-2xl overflow-hidden group-hover:grayscale transition">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <p className="mt-3 text-2xl font-bold tracking-[-1.4px]">{name}</p>
    </Link>
  );
}
