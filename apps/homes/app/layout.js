import { Wix_Madefor_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import PluggedIn from "@/components/ui/pluggedIn";

const wixFont = Wix_Madefor_Display({
  variable: "--font-wix-madefor-display",
  subsets: ["latin"],
});

export const metadata = {
  title: "Articulate Homes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${wixFont.className} antialiased`}>
        <Header />
        {children}
        <PluggedIn />
        <Footer />
      </body>
    </html>
  );
}
