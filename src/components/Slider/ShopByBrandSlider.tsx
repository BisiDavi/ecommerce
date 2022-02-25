import { Splide, SplideSlide } from "@splidejs/react-splide";

import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "@/components/Image";
import brands from "@/json/shop-by-brand.json";
import "@splidejs/splide/dist/css/splide.min.css";

export default function ShopByBrand() {
  const tabWidth = useMediaQuery("(max-width:768px)");

  const imageSize = tabWidth
    ? { height: 40, width: 120 }
    : { height: 60, width: 200 };

  return (
    <section className="bg-white py-6 flex flex-col justify-center items-center">
      <h2 className="text-center mb-4 text-2xl capitalize">Shop by brand</h2>
      <Splide
        className="container flex h-32 items-center"
        options={{
          type: "loop",
          autoplay: true,
          perPage: 6,
          breakpoints: {
            450: {
              perPage: 2,
              gap: "1rem",
            },
            600: {
              perPage: 3,
              gap: "1.5rem",
            },
            1200: {
              perPage: 4,
              gap: "2.5rem",
            },
            1400: {
              perPage: 5,
              gap: "2rem",
            },
          },
        }}
      >
        {brands.map((brand: any, index: number) => (
          <SplideSlide key={index}>
            <div className="shadow-lg mx-4 mb-4 pt-4 w-40 p-2 h-24 flex justify-center rounded-lg items-center">
              <Image
                src={brand.img}
                alt={brand.name}
                height={imageSize.height}
                width={imageSize.width}
                layout="responsive"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
