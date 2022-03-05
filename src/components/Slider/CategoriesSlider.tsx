import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import { useCategoryData } from "@/hooks/useCategoryData";
import Category from "../Category";
import LoadCategory from "@/components/Loader/LoadCategory";

export default function CategoriesSlider() {
  const [categories, status] = useCategoryData();
  const sliceCategories = (category: any[]) => category.slice(12);

  return (
    <div className="lg:w-2/3 md:w-full">
      {status === "error" ? (
        "error loading categories"
      ) : status === "loading" ? (
        <LoadCategory arrayType={2} gridStyle="w-1/2 m-auto" />
      ) : (
        <Splide
          className="lg:px-12 px-4"
          options={{
            type: "loop",
            perPage: 2,
            gap: "1rem",
            autoplay: true,
            breakpoints: {
              450: {
                perPage: 2,
                gap: "1rem",
              },
              600: {
                perPage: 2,
                gap: "1.5rem",
              },
              1200: {
                perPage: 2,
                gap: "1.5rem",
              },
            },
          }}
        >
          {sliceCategories(categories.results).map(
            (category: any, index: number) => (
              <SplideSlide key={index}>
                <Category key={category.id} category={category} />
              </SplideSlide>
            )
          )}
        </Splide>
      )}
    </div>
  );
}
