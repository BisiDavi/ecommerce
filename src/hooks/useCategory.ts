import { useQuery, useQueryClient } from "react-query";

import swellClientInit from "@/lib/config";

export default function useCategory() {
  const { swell, initializeSwell } = swellClientInit();
  initializeSwell();

  async function listAllCategory() {
    return await swell.categories.list({
      limit: 25,
    });
  }
  async function getACategory(categoryIdOrSlug: string) {
    console.log("categoryIdOrSlug", categoryIdOrSlug);
    return await swell.categories.get(categoryIdOrSlug);
  }
  async function getProductsInACategory(slug: string) {
    return await swell.products.list({
      category: slug,
      limit: 25,
      page: 1,
    });
  }
  const queryClient = useQueryClient();

  function allCategories() {
    const categories: any = queryClient.getQueryData("listAllCategory");
    return categories;
  }

  return {
    listAllCategory,
    getACategory,
    getProductsInACategory,
    allCategories,
  };
}

export function useCategoryData() {
  const { listAllCategory } = useCategory();
  const { data, status } = useQuery("listAllCategory", listAllCategory, {
    staleTime: Infinity,
  });
  return [data, status];
}
