import dynamic from "next/dynamic";
import Link from "next/link";

import Applayout from "@/layout/Applayout";
import blogContent from "@/json/blog.json";
import BlogArticleExcerpt from "@/components/Blog/BlogArticleExcerpt";

const BlogSlider = dynamic(() => import("@/components/Slider/BlogGridSlider"), {
  ssr: false,
});

const DynamicBlogPagination = dynamic(
  () => import("../components/Blog/BlogListPagination")
);

export default function Blog() {
  return (
    <Applayout title="Blog Gist">
      <div className="bg-secondary py-4">
        <div className="container d-lg-flex justify-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb flex-lg-nowrap justify-center justify-content-lg-start">
                <li className="breadcrumb-item">
                  <Link href="/index" passHref>
                    <a className="text-nowrap">
                      <i className="ci-home"></i>Home
                    </a>
                  </Link>
                </li>
                <li className="breadcrumb-item text-nowrap">
                  <a href="#">Blog</a>
                </li>
                <li
                  className="breadcrumb-item text-nowrap active"
                  aria-current="page"
                >
                  Grid no sidebar
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 mb-0">Blog grid no sidebar</h1>
          </div>
        </div>
      </div>
      <div className="container pb-5 mb-2 mb-md-4">
        {/*<!-- Featured posts carousel-->*/}
        <BlogSlider />
        <hr className="mt-5" />
        <div className="pt-5 mt-md-2">
          {/*<!-- Entries grid-->*/}
          <div className="masonry-grid" data-columns="3">
            {/*<!-- Entry-->*/}
            {blogContent.post.map((content) => (
              <BlogArticleExcerpt key={content.title} content={content} />
            ))}
          </div>
          <hr className="mb-4" />
          {/*<!-- Pagination-->*/}
          <DynamicBlogPagination pagination={blogContent.pagination} />
        </div>
      </div>
    </Applayout>
  );
}
