import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import { useCategoryData } from "@/hooks/useCategoryData";
import Category from "../Category";
import LoadCategory from "@/components/Loader/LoadCategory";

export default function CategoriesSlider() {
  const [categories, status] = useCategoryData();
  const sliceCategories = (category: any[]) => category.slice(12);

  return (
    <div className="w-2/3">
      {status === "error" ? (
        "error loading categories"
      ) : status === "loading" ? (
        <LoadCategory arrayType={4} gridStyle="w-1/2" />
      ) : (
        <Splide
          options={{
            type: "loop",
            perPage: 2,
            gap: "1rem",
            autoplay: true,
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
