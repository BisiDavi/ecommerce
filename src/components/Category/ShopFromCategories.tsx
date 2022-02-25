/* eslint-disable react-hooks/exhaustive-deps */
import CategoryBanner from "@/components/Category/CategoryBanner";
import CategoriesSlider from "@/components/Slider/CategoriesSlider";

export default function ShopFromCategories() {
  return (
    <section className="container place-items-center flex my-4 items-center">
      <CategoryBanner />
      <CategoriesSlider />
    </section>
  );
}
