import HeroSlider from "./home/hero";
import ExperienceSection from "./home/about";
import Offer from "./home/offer";
import Browse from "./home/browse";
import Integrity from "./home/integrity";
import Stories from "./home/stories";

export const metadata = {
  title: "APG Business Hub ",
  description:
    "APG Business Hub is your one-stop destination for high-quality gadgets and trusted real estate solutions. We focus on innovation, integrity, and lifestyle enhancement — bridging the gap between technology and property.",
  keywords: [
    "APG Business Hub",
    "gadgets",
    "real estate solutions",
    "tech and property",
    "innovation",
    "business hub",
    "high-quality gadgets",
    "trusted real estate",
  ],
  openGraph: {
    title: "APG Business Hub | Gadgets & Real Estate Solutions",
    description:
      "Your trusted destination for high-quality gadgets and real estate solutions. Innovation, integrity, and lifestyle enhancement all in one hub.",
    url: "https://apgbusinessHub.com",
    siteName: "APG Business Hub",
    images: [
      {
        url: "https://apgbusinessHub.com/og-image.jpg", // Replace with actual OG image path
        width: 1200,
        height: 630,
        alt: "APG Business Hub Hero",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "APG Business Hub | Gadgets & Real Estate Solutions",
    description:
      "Discover high-quality gadgets and trusted real estate solutions with APG Business Hub.",
    images: ["https://apgbusinessHub.com/og-image.jpg"], // same OG image
  },
  alternates: {
    canonical: "https://apgbusinessHub.com",
  },
};

export default function Home() {
  return (
    <>
      <div className="container text-greyText ">
        <HeroSlider />
        <ExperienceSection />
      </div>
      <Offer />
      <Browse />
      <Integrity />
      <Stories />
    </>
  );
}
