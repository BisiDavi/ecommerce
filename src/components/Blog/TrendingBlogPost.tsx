/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import blogContentData from "@/json/blog-list-sidebar.json";

export function TrendingBlogPost() {
  return (
    <div className="widget mb-grid-gutter pb-grid-gutter border-b-4 mx-lg-2">
      <h3 className="widget-title">Trending posts</h3>
      {blogContentData.trendingPost.map((content) => (
        <div key={content.title} className="flex items-center mb-3">
          <Link href="/blog-single" passHref>
            <a className="flex-shrink-0">
              <img
                className="rounded"
                src={content.image}
                width="64"
                alt="Post image"
              />
            </a>
          </Link>
          <div className="ps-3">
            <h6 className="blog-entry-title fs-sm mb-0">
              <Link href="/blog-single" passHref>
                <a>{content.title}</a>
              </Link>
            </h6>
            <span className="fs-ms text-muted">
              by{" "}
              <a href="#" className="blog-entry-meta-link">
                {content.author}
              </a>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function PopularTags() {
  return (
    <div className="widget pb-grid-gutter mx-lg-2">
      <h3 className="widget-title">Popular tags</h3>
      {blogContentData.popularTags.map((tag) => (
        <a key={tag} className="btn-tag me-2 mb-2" href="#">
          #{tag}
        </a>
      ))}
    </div>
  );
}

export function BlogCategories() {
  return (
    <div className="widget widget-links mb-grid-gutter pb-grid-gutter border-b-4 mx-lg-2">
      <h3 className="widget-title">Blog categories</h3>
      <ul className="widget-list">
        {blogContentData.categories.map((category) => (
          <li key={category.name} className="widget-list-item">
            <a
              className="widget-list-link flex justify-between items-center"
              href="#"
            >
              <span>{category.name}</span>
              <span className="fs-xs text-muted ms-3">{category.count}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
