import { Wix_Madefor_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
// import PluggedIn from "@/components/ui/pluggedIn";

const wixFont = Wix_Madefor_Display({
  variable: "--font-wix-madefor-display",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "APG Business Hub",
    template: "%s | APG Business Hub",
  },
  description:
    "Your plug for premium gadgets, real estate, and business support in Nigeria. Trusted, affordable, and reliable — all in one hub.",
  keywords: [
    "APG Business Hub",
    "gadgets Nigeria",
    "real estate Nigeria",
    "electronics store",
    "business registration Nigeria",
    "shortlet apartments",
  ],
  metadataBase: new URL("https://apgbusinesshub.com"), // replace with your real domain
  openGraph: {
    title: "APG Business Hub",
    description:
      "Your plug for premium gadgets, real estate, and business support in Nigeria.",
    url: "https://apgbusinesshub.com",
    siteName: "APG Business Hub",
    images: [
      {
        url: "/og-image.jpg", // add a real 1200x630 image in /public
        width: 1200,
        height: 630,
        alt: "APG Business Hub",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "APG Business Hub",
    description:
      "Your plug for premium gadgets, real estate, and business support in Nigeria.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/og-image.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${wixFont.className} antialiased`}>
        <Header />
        {children}
        {/* <PluggedIn /> */}
        <Footer />
      </body>
    </html>
  );
}
