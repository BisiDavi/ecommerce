/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { BlogCategories } from "@/components/Blog/TrendingBlogPost";
const TrendingBlogPost = dynamic((): any =>
  import("@/components/Blog/TrendingBlogPost").then(
    (mod) => mod.TrendingBlogPost
  )
);
const PopularTags = dynamic((): any =>
  import("@/components/Blog/TrendingBlogPost").then((mod) => mod.PopularTags)
);

export default function BloglistSidebar() {
  return (
    <aside className="col-lg-4">
      <div
        className="offcanvas offcanvas-collapse offcanvas-end border-start ms-lg-auto"
        id="blog-sidebar"
      >
        <div className="offcanvas-header items-center shadow-sm">
          <h2 className="h5 mb-0">Sidebar</h2>
          <button
            className="btn-close ms-auto"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="close"
          ></button>
        </div>
        <div className="offcanvas-body py-grid-gutter py-lg-1 px-lg-4">
          <BlogCategories />
          <TrendingBlogPost />
          <PopularTags />
          <div className="blogBg bg-size-cover bg-position-center rounded-3 py-5 mx-lg-2">
            <div className="py-5 px-4 text-center">
              <h5 className="mb-2">Your Add Banner Here</h5>
              <p className="fs-sm text-muted">Hurry up to reserve your spot</p>
              <a className="btn btn-primary btn-shadow btn-sm" href="#">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          #blog-sidebar {
            max-width: 22rem;
          }
          .blogBg {
            background-image: url(img/blog/banner-bg.jpg);
          }
        `}
      </style>
    </aside>
  );
}
