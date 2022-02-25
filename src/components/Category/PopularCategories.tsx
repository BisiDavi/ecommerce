import { useCategoryData } from "@/hooks/useCategory";
import PopularCategory from "@/components/Category/PopularCategory";
import LoadingPopularCategory from "@/components/Loader/PopularCategoryLoader";

export default function PopularCategories() {
  const [data, status] = useCategoryData();

  // re-render component on data change
  const topCategories = data?.results?.filter(
    (category: { topId: string }) => !category.topId
  );

  const getFirstThreeCategories = (category: any[]) =>
    category !== undefined ? category.slice(12, 15) : [];

  return (
    <div className="container flex justify-start">
      <section className="w-1/2 md:w-5/6 shadow-lg flex bg-white -mt-32 relative p-4 rounded-lg">
        <div className="flex popularCategoriesRow w-full">
          {status === "error" ? (
            "Unable to fetch"
          ) : status === "loading" ? (
            <LoadingPopularCategory />
          ) : (
            getFirstThreeCategories(topCategories).map(
              (category: {
                name: any;
                images: { file: { url: string } }[];
                slug: string;
              }) => <PopularCategory key={category.name} category={category} />
            )
          )}
        </div>
        <style jsx>
          {`
            .popularCategories {
              z-index: 2000;
            }
          `}
        </style>
      </section>
    </div>
  );
}
