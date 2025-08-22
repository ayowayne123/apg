import React from "react";
import PageHeader from "@/components/ui/pageHeader";
import TermsList from "@/app/terms-of-service/termsList";

export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="container">
        <PageHeader type="terms" />
        <TermsList />
      </div>
    </div>
  );
}
