import BlogPage from "@/components/blog/blogPage";
import { getBlogPost } from "@/utils/calls";

export default async function Blog({ params }) {
  const { slug } = await params;

  const blog = await getBlogPost(slug);

  if (!blog) {
    return <div className="py-20 text-center">Blog not found</div>;
  }

  return <BlogPage blog={blog.data} />;
}
