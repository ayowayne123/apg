import { Toaster } from "react-hot-toast";
import AuthHeader from "@/components/ui/authHeader";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white">
      <AuthHeader />
      <Toaster position="top-right" />
      {children}
    </div>
  );
}
