/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";

import Applayout from "@/layout/Applayout";
import BloglistBanner from "@/components/Blog/BloglistBanner";
import BloglistSidebar from "@/components/Sidebar/BloglistSidebar";

const BlogSlider = dynamic(
  () => import("@/components/Slider/BlogGridSlider"),
  {
    ssr: false,
  }
);
const BlogListArticle = dynamic(() => import("@/components/Blog/BlogListArticle"));

export default function BlogListSidebar() {
  return (
    <Applayout title="Blog">
      <BloglistBanner />
      <div className="container pb-5 mb-2 mb-md-4">
        <BlogSlider />
        <hr className="mt-5" />
        <div className="row pt-5 mt-2">
          <BlogListArticle />
          <BloglistSidebar />
        </div>
      </div>
    </Applayout>
  );
}
