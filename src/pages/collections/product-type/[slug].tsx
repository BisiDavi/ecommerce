/* eslint-disable react-hooks/rules-of-hooks */
import Applayout from "@/layout/Applayout";
import { categoryType } from "@/types";
import CollectionMarketplace from "@/components/View/CollectionMarketplace";
import getStoreCategories from "@/lib/getStoreCategories";
import styles from "@/styles/shop.module.css";
import CategoryMetatag from "@/components/Metatag/CategoryMetatag";

interface collectionProps {
  collection: categoryType;
}
export default function Category({ collection }: collectionProps): JSX.Element {
  return (
    <Applayout
      title={`${collection.name} | Free Delivery to HK | Live healthy Online Store`}
    >
      <CategoryMetatag collection={collection} />
      <div className={styles.shop}>
        <CollectionMarketplace collection={collection} />
      </div>
    </Applayout>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const storeCategories: any[] = await getStoreCategories();

  const collection = storeCategories?.filter(
    (collection: { slug: any }) => collection?.slug === params.slug
  );

  return {
    props: {
      collection: collection[0],
    },
  };
}

export async function getStaticPaths() {
  const storeCategories: any[] = await getStoreCategories();

  return {
    paths:
      storeCategories?.map(
        (collection: { slug: any }) =>
          `/collections/product-type/${collection.slug}`
      ) || [],
    fallback: false,
  };
}
