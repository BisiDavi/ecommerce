/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";

import blogContentData from "@/json/blog-list-sidebar.json";

const DynamicBlogPagination = dynamic(
  () => import("@/components/Blog/BlogListPagination")
);

export default function BlogListArticle() {
  return (
    <section className="col-lg-8">
      {blogContentData.post.map((content) => (
        <article
          key={content.author}
          className="blog-list border-b-4 pb-4 mb-5"
        >
          <div className="blog-start-column">
            <div className="flex items-center fs-sm pb-2 mb-1">
              <a className="blog-entry-meta-link" href="#">
                <div className="blog-entry-author-ava">
                  <img src={content.authorImage} alt={content.author} />
                </div>
                {content.author}
              </a>
              <span className="blog-entry-meta-divider"></span>
              <a className="blog-entry-meta-link" href="#">
                {content.date}
              </a>
            </div>
            <h2 className="h5 blog-entry-title">
              <Link href="/blog-single" passHref>
                <a>{content.title}</a>
              </Link>
            </h2>
          </div>
          <div className="blog-end-column">
            {content.image && (
              <Link href="/blog-single" passHref>
                <a className="blog-entry-thumb mb-3">
                  <img src={content.image} alt="Post" />
                </a>
              </Link>
            )}
            <div className="flex justify-between mb-1">
              <div className="fs-sm text-muted pe-2 mb-2">
                in{" "}
                {content.tags.map((tag) => (
                  <a href="#" key={tag} className="blog-entry-meta-link">
                    {tag}
                  </a>
                ))}
              </div>
              <div className="fs-sm mb-2">
                <Link href="/blog-single#comments" passHref>
                  <a className="blog-entry-meta-link text-nowrap">
                    <i className="ci-message"></i>
                    {content.comment}
                  </a>
                </Link>
              </div>
            </div>
            <p className="fs-sm">
              {content.text}{" "}
              <Link href="/blog-single" passHref>
                <a className="blog-entry-meta-link fw-medium">[Read more]</a>
              </Link>
            </p>
          </div>
        </article>
      ))}
      <DynamicBlogPagination pagination={blogContentData.pagination} />
    </section>
  );
}
