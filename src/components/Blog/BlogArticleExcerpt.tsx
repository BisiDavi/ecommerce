/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface blogExcerpt {
  content: {
    title: string;
    text: string;
    tags: string[];
    author: string;
    authorImage: string;
    date: string;
    image?: string;
    comment: number;
  };
}

export default function BlogArticleExcerpt({ content }: blogExcerpt) {
  return (
    <article key={content.title} className="masonry-grid-item">
      <div className="card">
        {content.image && (
          <Link href="/blog-single" passHref>
            <a className="blog-entry-thumb">
              <img className="card-img-top" src={content.image} alt="Post" />
            </a>
          </Link>
        )}
        <div className="card-body">
          <h2 className="h6 blog-entry-title">
            <Link href="/blog-single" passHref>
              <a>{content.title}</a>
            </Link>
          </h2>
          <p className="fs-sm">{content.text}</p>
          {content.tags.map((tag) => (
            <a key={tag} className="btn-tag me-2 mb-2" href="#">
              {tag}
            </a>
          ))}
        </div>
        <div className="card-footer flex items-center fs-xs">
          <a className="blog-entry-meta-link" href="#">
            <div className="blog-entry-author-ava">
              <img src={content.authorImage} alt={content.author} />
            </div>
            {content.author}
          </a>
          <div className="ms-auto text-nowrap">
            <a className="blog-entry-meta-link text-nowrap" href="#">
              {content.date}
            </a>
            <span className="blog-entry-meta-divider mx-2"></span>
            <Link href="/blog-single#comments" passHref>
              <a className="blog-entry-meta-link text-nowrap">
                <i className="ci-message"></i>
                {content.comment}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
