/* eslint-disable @next/next/no-img-element */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";
import carouselContent from "@/json/blog-grid-carousel.json";
import "@splidejs/splide/dist/css/splide.min.css";

export default function BlogGridSlider() {
  return (
    <div className="pt-5 position-relative">
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
          autoplay: true,
          type: "loop",
        }}
      >
        {carouselContent.map((content) => (
          <SplideSlide key={content.title}>
            <article>
              <Link href={content.link} passHref>
                <a className="blog-entry-thumb mb-3">
                  <span className="blog-entry-meta-label fs-sm">
                    <i className="ci-time"></i>
                    {content.date}
                  </span>
                  <img src={content.image} alt="Featured post" />
                </a>
              </Link>
              <div className="d-flex justify-content-between mb-2 pt-1">
                <h2 className="h5 blog-entry-title mb-0">
                  <Link href={content.link} passHref>
                    <a>{content.title}</a>
                  </Link>
                </h2>
                <Link href="/blog-single-sidebar#comments" passHref>
                  <a className="blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1">
                    <i className="ci-message"></i>
                    {content.comment}
                  </a>
                </Link>
              </div>
              <div className="d-flex align-items-center fs-sm">
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
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
