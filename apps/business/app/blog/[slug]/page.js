import BlogPage from "@/components/blog/blogPage";
import { blogData } from "@/components/blog/blogdata";

export default async function Blog({ params }) {
  const { slug } = await params;

  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return <div className="py-20 text-center">Blog not found</div>;
  }

  return <BlogPage blog={blog} />;
}
