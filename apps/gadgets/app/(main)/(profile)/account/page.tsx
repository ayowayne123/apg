import MyAccountForm from "@/components/user/myAccount";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Account | Articulate Plugs and Gadgets",
  description:
    "Manage your personal information, contact details, and billing address on Articulate Plugs and Gadgets.",
};

export default function MyAccountPage() {
  return (
    <div className="container mx-auto py-10">
      <MyAccountForm />
    </div>
  );
}
