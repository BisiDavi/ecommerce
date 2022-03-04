import Applayout from "@/layout/Applayout";
import ProductOverview from "@/components/Products/ProductOverview";
import fetchAllSwellProducts from "@/lib/processPageproduct";
import ProductMetatag from "@/components/Metatag/ProductMetatag";

interface ProductPage {
  pageProduct: any;
}
export default function ProductPage({ pageProduct }: ProductPage) {
  return (
    <Applayout title={pageProduct.meta_title}>
      <ProductMetatag pageProduct={pageProduct} />
      <ProductOverview pageProduct={pageProduct} />
    </Applayout>
  );
}

type propsType = {
  params: { slug: string };
};
export async function getStaticProps({ params }: propsType) {
  const productData: any = await fetchAllSwellProducts();
  const results: any = await Promise.all(productData);

  const pageProduct = results[0].filter(
    (product: { slug: any }) => product?.slug === params.slug
  );

  return {
    props: {
      pageProduct: pageProduct[0],
    },
  };
}

export async function getStaticPaths() {
  const productData: any = await fetchAllSwellProducts();

  const results: any = await Promise.all(productData);

  return {
    paths:
      results[0].map((product: { slug: any }) => `/products/${product.slug}`) ||
      [],
    fallback: false,
  };
}
