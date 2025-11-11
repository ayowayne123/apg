import Image from "next/image";

export default function ListingsGrid({ listings = [] }) {
  return (
    <div className="container mx-auto px-4 py-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {listings.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg overflow-hidden shadow-sm"
        >
          <Image
            src={item.cover_photo?.url}
            alt={item.title}
            width={500}
            height={300}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.address}</p>
            <p className="font-bold text-primary mt-2">₦{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
