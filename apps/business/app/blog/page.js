import React from "react";
import PageHeader from "@/components/ui/pageHeader";
import AllBlogs from "./allBlogs";

function BlogPage() {
  return (
    <div className="bg-white">
      <div className="container ">
        <PageHeader type="blog" />
        <AllBlogs />
      </div>
    </div>
  );
}

export default BlogPage;
