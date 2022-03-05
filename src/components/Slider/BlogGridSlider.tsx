/* eslint-disable @next/next/no-img-element */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";
import { GiAlarmClock } from "react-icons/gi";
import { BiMessageRoundedDots } from "react-icons/bi";

import carouselContent from "@/json/blog-grid-carousel.json";
import "@splidejs/splide/dist/css/splide.min.css";

export default function BlogGridSlider() {
  return (
    <div className="pt-5 relative">
      <div className="tns-controls" id="blog-grid-controls">
        <button aria-label="Prev" type="button">
          <i className="ci-arrow-left"></i>
        </button>
        <button aria-label="Next" type="button">
          <i className="ci-arrow-right"></i>
        </button>
      </div>
      <Splide
        options={{
          perPage: 2,
          rewind: true,
          autoplay: false,
          type: "loop",
        }}
      >
        {carouselContent.map((content) => (
          <SplideSlide key={content.title}>
            <article className="w-full relative flex flex-col">
              <Link href={content.link} passHref>
                <a className="blog-entry-thumb mb-3 relative flex">
                  <button className="w-24 flex justify-center items-center rounded-md bg-gray-200 p-1 hover:bg-gray-600 hover:text-white absolute right-8 top-8">
                    <GiAlarmClock className="mr-1" />
                    {content.date}
                  </button>
                  <img
                    className="sliderPostImg"
                    src={content.image}
                    alt="Featured post"
                  />
                </a>
              </Link>
              <div className="text-content flex flex-col">
                <div className="flex justify-between mb-2 pt-1">
                  <h2 className="h5 blog-entry-title mb-0">
                    <Link href={content.link} passHref>
                      <a>{content.title}</a>
                    </Link>
                  </h2>
                  <Link href="/blog-single-sidebar#comments" passHref>
                    <a className="blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1">
                      <BiMessageRoundedDots />
                      {content.comment}
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex items-center fs-sm">
                <a className="blog-entry-meta-link" href="#">
                  <div className="blog-entry-author-ava">
                    <img src={content.authorImage} alt={content.author} />
                  </div>
                  {content.author}
                </a>
                <span className="blog-entry-meta-divider"></span>
                <div className="fs-sm text-muted">
                  in{" "}
                  {content.category.map((category) => (
                    <a href="#" key={category} className="blog-entry-meta-link">
                      {category}
                    </a>
                  ))}
                  {content.category?.length > 1 ? "," : ""}
                </div>
              </div>
            </article>
            <style jsx>
              {`
                .sliderPostImg {
                  height: 100%;
                  width: 100%;
                }
              `}
            </style>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
