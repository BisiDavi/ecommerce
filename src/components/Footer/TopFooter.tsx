import { useCategoryData } from "@/hooks/useCategory";
import { contentLinkType } from "@/types";
import { addCategoryView } from "@/hooks/useVbout";
import useAlgoliaEvents from "@/hooks/useAlgoliaEvents";
import useMarketplaceCategory from "@/hooks/useMarketplaceCategory";
import footerContent from "@/json/footer.json";
import FooterLink from "@/components/Footer/FooterElement";
import Footernewsletter from "@/components/Footer/Footernewsletter";

export default function TopFooter() {
  const [categories, status] = useCategoryData();

  if (status === "success") {
    footerContent.section1[0].links = categories?.results.slice(12);
  }
  const { itemViewed } = useAlgoliaEvents();

  const selectedFooterCategory = useMarketplaceCategory();

  function vboutCategoryViewHandler(contentLink: contentLinkType) {
    addCategoryView({
      id: contentLink.id,
      categoryId: contentLink.slug,
      categoryName: contentLink?.name,
      categoryLink: `categories/${contentLink.slug}`,
      categoryImage: contentLink?.images[0]?.file?.url,
    });
  }

  function categoryEvents(contentLink: contentLinkType) {
    vboutCategoryViewHandler(contentLink);
    itemViewed("category_viewed", [contentLink.id]);
  }

  return (
    <div className="w-full bg-gray-700 justify-center flex py-6">
      <div className="container flex">
        {footerContent.section1.map((content, index) => {
          return content.group ? (
            <FooterLink
              key={index}
              content={content}
              onClickHandler={categoryEvents}
              multiple
            />
          ) : (
            <FooterLink
              key={index}
              content={content}
              onClickHandler={selectedFooterCategory}
            />
          );
        })}
        <Footernewsletter />
      </div>
      <style jsx>
        {`
          .topSection {
            background-color: #373f50;
          }
        `}
      </style>
    </div>
  );
}
