import React from "react";
import PageHeader from "@/components/ui/pageHeader";
import Mission from "./mission";
import Values from "./values";
import Team from "./team";

function AboutPage() {
  return (
    <div className="bg-grey">
      <div className="container ">
        <PageHeader type="about" />
        <Mission />
      </div>
      <>
        <Values />
      </>
      <div className="container ">
        <Team />
      </div>
    </div>
  );
}

export default AboutPage;
