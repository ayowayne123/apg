import { getSingleHome } from "@/utils/calls";
import Details from "./details";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const res = await getSingleHome(slug);
    const listing = res?.data;

    if (!listing) {
      return {
        title: "Listing Not Found | APG Homes",
        description: "The requested listing could not be found.",
      };
    }

    return {
      title: `${listing?.title} | APG Homes`,
      description:
        listing?.description?.slice(0, 160) || "View property details.",
      openGraph: {
        title: listing?.title,
        description: listing?.description?.slice(0, 160),
        images: [
          {
            url: listing?.cover_photo?.url || "/default-image.jpg",
            alt: listing?.title,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Metadata generation failed:", error);
    return {
      title: "APG Homes",
      description: "Find homes for rent or sale.",
    };
  }
}

export default async function Listing({ params }) {
  const { slug } = await params;

  try {
    const res = await getSingleHome(slug);
    const listing = res?.data;

    if (!listing) {
      return (
        <div className="py-20 text-center text-gray-500">
          Listing not found.
        </div>
      );
    }

    return <Details listing={listing} />;
  } catch (error) {
    console.error("Failed to load listing:", error);
    return (
      <div className="py-20 text-center text-gray-500">
        Failed to load listing?. Please try again later.
      </div>
    );
  }
}
