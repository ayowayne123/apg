import { getProductBySlug } from "@calls/productCalls";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product?.data)
    return { title: "Product not found | Articulate Plugs and Gadgets" };

  return {
    title: `${product.data.title} | Articulate Plugs and Gadgets`,
    description: product.data.short_description,
  };
}

export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = params;
  const res = await getProductBySlug(slug);
  const product = res?.data;
  console.log(product);

  if (!product) return notFound();

  const {
    title,
    short_description,
    detailed_description,
    cover_photo,
    gallery,
    price,
    currency,
    rating_average,
    rating_count,
    general_specifications,
    laptop_specifications,
    phone_specifications,
  } = product;

  return (
    <section className="container mx-auto  space-y-10">
      {/* Header / Banner */}
      <div className="rounded-2xl bg-primary h-[400px] flex flex-col md:flex-row items-center p-6 lg:px-12 xl:px-16 gap-8">
        <div className="flex-1 space-y-2">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-sm text-gray-700">{short_description}</p>
        </div>
        <div className="relative w-[250px] h-full">
          <Image
            src={cover_photo?.url}
            alt={cover_photo?.alt || title}
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* Gallery */}
      <div className="flex gap-4 overflow-x-auto">
        {gallery.map((img: any) => (
          <div key={img.id} className="relative w-32 h-32 flex-shrink-0">
            <Image
              src={img.url}
              alt={img.alt || title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Price */}
      <div>
        <h2 className="text-2xl font-semibold">
          {currency} {price}
        </h2>
      </div>

      {/* Specifications */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Specifications</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
          {Object.entries({
            ...general_specifications,
            ...laptop_specifications,
            ...phone_specifications,
          }).map(([key, value]) => (
            <p key={key}>
              <span className="font-medium capitalize">
                {key.replaceAll("_", " ")}:
              </span>{" "}
              {value}
            </p>
          ))}
        </div>
      </div>

      {/* Description */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Detailed Description</h3>
        <p className="text-gray-700 whitespace-pre-line">
          {detailed_description?.features}
        </p>
      </div>

      {/* Ratings */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Ratings</h3>
        <div className="flex items-center gap-2">
          <Star className="text-yellow-400" />
          <span className="text-lg font-semibold">
            {parseFloat(rating_average).toFixed(1)}
          </span>
          <span className="text-gray-600">({rating_count} reviews)</span>
        </div>
      </div>

      {/* Related products placeholder */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Related Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* TODO: map related products here */}
          <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
            Coming soon...
          </div>
        </div>
      </div>
    </section>
  );
}
