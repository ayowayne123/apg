import type { Metadata } from "next";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import PluggedIn from "@/components/ui/pluggedIn";
import Why from "@/components/ui/why";
import { Toaster } from "react-hot-toast";
import Stories from "@/components/ui/stories";

export const metadata: Metadata = {
  title: "Articulate Plugs & Gadgets",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {" "}
      <Header />
      <Toaster position="top-right" />
      {children}
      <Why />
      <Stories />
      <PluggedIn />
      <Footer />
    </>
  );
}
