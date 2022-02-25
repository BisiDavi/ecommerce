import BlogBanner from "@/components/Blog/BlogBanner";
import ShopFromCategories from "@/components/Category/ShopFromCategories";
import HomepageSlider from "@/components/Slider/HomepageSlider";
import ShopByBrand from "@/components/Slider/ShopByBrandSlider";
import Applayout from "@/layout/Applayout";

export default function Home() {
  return (
    <Applayout>
      <HomepageSlider />
      <ShopFromCategories />
      <ShopByBrand />
      <BlogBanner />
    </Applayout>
  );
}
