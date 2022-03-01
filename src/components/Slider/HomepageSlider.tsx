import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { memo } from "react";

import "@splidejs/splide/dist/css/splide.min.css";

import Image from "@/components/Image";
import sliderContent from "@/json/homepage-slider.json";
import styles from "@/styles/HomepageSlider.module.css";

function SliderItem({ item }): JSX.Element {
  return (
    <>
      <SplideSlide>
        <div className="sliderItem w-full h-full">
          <div className="container m-auto flex items-center h-full">
            <div
              className={`${styles.imageContainer} w-1/2 lg:order-2 lg:mx-4 flex-shrink-0 justify-between items-center lg:ps-4`}
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
            <div className="w-1/2 text-white flex flex-col py-5 px-4 lg:mb-5 lg:order-1">
              <h3 className="text-light text-2xl font-light pb-1 from-start">
                {item.sliderCaption}
              </h3>
              <h2 className="font-semibold my-2 text-4xl from-start delay-1">
                {item.sliderTitle}
              </h2>
              <p className="font-medium text-xl py-2 from-start delay-2">
                {item.sliderDescription}
              </p>
              <Link href="/shop" passHref>
                <a className="scale-up mt-2 w-1/4 flex items-center justify-center delay-4 p-3 border-2 border-red-500 text-white font-bold rounded-lg hover:text-white hover:bg-red-500">
                  Shop Now
                </a>
              </Link>
            </div>
          </div>
        </div>
      </SplideSlide>
      <style jsx>{`
        .sliderItem {
          background-color: ${item.bgColor};
        }
      `}</style>
    </>
  );
}

function HomepageSliderComponent() {
  return (
    <>
      <section className={`${styles.carousel} carousel mb-4 mb-lg-5 w-100`}>
        <Splide
          options={{
            autoplay: true,
            type: "loop",
          }}
          className={styles.slider}
        >
          {sliderContent.map((item, index) => (
            <SliderItem item={item} key={index} />
          ))}
        </Splide>
      </section>
      <style jsx>{`
        .carousel {
          background-color: #3aafd2;
        }
      `}</style>
    </>
  );
}

const HomepageSlider = memo(HomepageSliderComponent);

export default HomepageSlider;
