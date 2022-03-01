import Applayout from "@/layout/Applayout";
import BlogBanner from "@/components/Blog/BlogBanner";
import PopularCategories from "@/components/Category/PopularCategories";
import ShopFromCategories from "@/components/Category/ShopFromCategories";
import TrendingProducts from "@/components/Products/TrendingProducts";
import HomepageSlider from "@/components/Slider/HomepageSlider";
import ShopByBrand from "@/components/Slider/ShopByBrandSlider";

export default function Home() {
  return (
    <Applayout title="Live healthy Store - Quality Australian Products - Free Shipping to HK">
      <HomepageSlider />
      <PopularCategories />
      <TrendingProducts />
      <ShopFromCategories />
      <ShopByBrand />
      <BlogBanner />
    </Applayout>
  );
}
