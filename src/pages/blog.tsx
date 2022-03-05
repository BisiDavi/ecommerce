import dynamic from "next/dynamic";
import Link from "next/link";
import { HiHome } from "react-icons/hi";

import Applayout from "@/layout/Applayout";
import blogContent from "@/json/blog.json";
import BlogArticleExcerpt from "@/components/Blog/BlogArticleExcerpt";

const BlogSlider = dynamic(() => import("@/components/Slider/BlogGridSlider"), {
  ssr: false,
});

const DynamicBlogPagination = dynamic(
  () => import("@/components/Blog/BlogListPagination")
);

export default function Blog() {
  return (
    <Applayout title="Blog Gist">
      <div className="bg-gray-100 py-4 w-full">
        <div className="container m-auto flex justify-between py-2 lg:py-3">
          <div className="lg:order-2 mb-3 lg:mb-0 lg:pt-2">
            <nav aria-label="breadcrumb">
              <ol className="flex lg:flex-nowrap justify-center lg:justify-content-start">
                <li className="hover:text-red-500">
                  <Link href="/index" passHref>
                    <a className="flex items-center">
                      <HiHome className="mx-1" />
                      Home
                    </a>
                  </Link>
                </li>
                <li className="mx-2">&gt;</li>
                <li className="text-gray-500">
                  <a href="#">Blog</a>
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-1 text-center lg:text-start">
            <h1 className="text-3xl mb-0">Blog</h1>
          </div>
        </div>
      </div>
      <div className="container pb-5 mb-2 md:mb-4">
        <BlogSlider />
        <hr className="mt-5" />
        <div className="pt-5 md:mt-2">
          <div className="flex flex-wrap mb-8">
            {blogContent.post.map((content) => (
              <BlogArticleExcerpt key={content.title} content={content} />
            ))}
          </div>
          <hr className="mb-4" />
          <DynamicBlogPagination pagination={blogContent.pagination} />
        </div>
      </div>
    </Applayout>
  );
}
