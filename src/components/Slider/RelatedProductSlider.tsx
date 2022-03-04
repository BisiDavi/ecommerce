import { Splide, SplideSlide } from "@splidejs/react-splide";
import Product from "@/components/Products";

import "@splidejs/splide/dist/css/splide.min.css";

interface RelatedProductSliderProps {
  relatedProducts: any[];
}

export default function RelatedProductSlider({
  relatedProducts,
}: RelatedProductSliderProps) {
  return (
    <div className="container related-products mb-5">
      <h4 className="text-center text-2xl font-bold mb-4">Related Products</h4>
      <Splide
        options={{
          autoplay: false,
          perPage: 5,
          type: "loop",
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
          },
        }}
      >
        {relatedProducts.map((item, index: number) => (
          <SplideSlide key={index}>
            <Product product={item} slider />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
