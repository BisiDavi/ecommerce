import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";
import "@splidejs/splide/dist/css/splide.min.css";

import Image from "@/components/Image";
import sliderContent from "@/json/homepage-slider.json";
import styles from "@/styles/HomepageSlider.module.css";

export default function HomepageSlider() {
  return (
    <section className={`${styles.carousel} mb-4 mb-lg-5 w-100`}>
      <Splide
        options={{
          autoplay: true,
          type: "loop",
        }}
        className={styles.slider}
      >
        {sliderContent.map((item, index) => (
          <SplideSlide className={styles.SplideSlide} key={index}>
            <div className="px-lg-5 sliderItem">
              <div
                className={`${styles.imageContainer} d-block order-lg-2 me-lg-5 flex-shrink-0 justify-content-between align-items-center ps-lg-4`}
              >
                <Image
                  src={item.sliderImg}
                  alt={item.sliderTitle}
                  height={300}
                  width={400}
                  layout="responsive"
                  size="true"
                  priority={true}
                />
              </div>
              <div className="sliderWidth position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1">
                <div className="sliderText pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                  <h3 className="text-light fw-light pb-1 from-start">
                    {item.sliderCaption}
                  </h3>
                  <h2 className="text-light display-5 from-start delay-1">
                    {item.sliderTitle}
                  </h2>
                  <p className="fs-lg text-light pb-3 from-start delay-2">
                    {item.sliderDescription}
                  </p>
                  <div className="d-table scale-up delay-4 mx-auto mx-lg-0">
                    <Link href="/shop" passHref>
                      <a className="btn btn-primary">
                        Shop Now
                        <i className="ci-arrow-right ms-2 me-n1"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <style jsx>{`
              .sliderContent {
                display: flex;
                align-items: center;
              }
              .slider {
                background-color: #3aafd2;
                height: 680px;
                width: 100%;
              }
              .sliderItem {
                background-color: ${item.bgColor};
                display: flex;
                width: 100%;
                height: 100%;
                align-items: center;
                justify-content: space-around;
              }
              .sliderWidth {
                z-index: 10;
              }
              @media (max-width: 768px) {
                .sliderItem {
                  flex-direction: column;
                }
                .sliderText h3 {
                  font-size: 20px;
                }
                .sliderText h2 {
                  font-size: 24px;
                }
                .sliderText p {
                  font-size: 16px;
                }
              }
            `}</style>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
