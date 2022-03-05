/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import Icons from "@/components/Icons";

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
    <>
      {content.image ? (
        <article key={content.title} className="w-1/3 px-2">
          <Link href="/blog-single" passHref>
            <a className="blog-entry-thumb">
              <img className="rounded-t-lg" src={content.image} alt="Post" />
            </a>
          </Link>
          <div className="border-2 border-gray-100 border-t-0 rounded-t-none p-6 rounded-lg mb-4">
            <div>
              <h2 className="text-lg font-bold">
                <Link href="/blog-single" passHref>
                  <a>{content.title}</a>
                </Link>
              </h2>
              <p className="text-md">{content.text}</p>
              <div className="flex my-2">
                {content.tags.map((tag) => (
                  <a
                    key={tag}
                    className="border-2 border-gray-100 p-2 text-sm hover:text-white hover:bg-red-500 rounded-md mx-2"
                    href="#"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
            <div className="border-t-2 border-gray-100 mt-6 pt-2 flex items-center justify-between">
              <a className="flex items-center " href="#">
                <div className="blog-entry-author-ava">
                  <img
                    src={content.authorImage}
                    className="rounded-full ml-4"
                    alt={content.author}
                  />
                </div>
                {content.author}
              </a>
              <div className="flex items-center justify-between w-28">
                <a className="text-sm" href="#">
                  {content.date}
                </a>
                <span className="mx-1 border-r-2 border-gray-200 h-6"></span>
                <Link href="#comments" passHref>
                  <a className="text-sm flex items-center">
                    <Icons
                      className="mx-2 text-red-500"
                      size={20}
                      icon="mail"
                    />
                    {content.comment}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </article>
      ) : (
        <article key={content.title} className="w-1/3 px-2">
          <div className="card border-2 border-gray-100 p-6 rounded-lg">
            {content.image && (
              <Link href="/blog-single" passHref>
                <a className="blog-entry-thumb">
                  <img
                    className="rounded-t-lg"
                    src={content.image}
                    alt="Post"
                  />
                </a>
              </Link>
            )}
            <div className="card-body">
              <h2 className="text-lg font-bold">
                <Link href="/blog-single" passHref>
                  <a>{content.title}</a>
                </Link>
              </h2>
              <p className="text-md">{content.text}</p>
              <div className="flex my-2">
                {content.tags.map((tag) => (
                  <a
                    key={tag}
                    className="border-2 border-gray-100 p-2 text-sm hover:text-white hover:bg-red-500 rounded-md mx-2"
                    href="#"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
            <div className="border-t-2 border-gray-100 mt-6 pt-2 flex items-center justify-between">
              <a className="flex items-center " href="#">
                <div className="blog-entry-author-ava">
                  <img
                    src={content.authorImage}
                    className="rounded-full ml-4"
                    alt={content.author}
                  />
                </div>
                {content.author}
              </a>
              <div className="flex items-center justify-between w-28">
                <a className="text-sm" href="#">
                  {content.date}
                </a>
                <span className="mx-1 border-r-2 border-gray-200 h-6"></span>
                <Link href="#comments" passHref>
                  <a className="text-sm flex items-center">
                    <Icons
                      className="mx-2 text-red-500"
                      size={20}
                      icon="mail"
                    />
                    {content.comment}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
