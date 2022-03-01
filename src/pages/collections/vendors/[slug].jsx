import fetchAllSwellProducts from "@/lib/processPageproduct";
import Metatag from "@/components/Metatag";

import Applayout from "@/layout/Applayout";
import VendorView from "@/components/View/VendorView";
import toTitleCase, {
  replaceHypenWithSpace,
  replaceSpaceWithHypen,
} from "@/lib/formatString";
import styles from "@/styles/shop.module.css";

export default function Vendors({ vendor }) {
  return (
    <Applayout title="Live healthy Store - Quality Australian Products - Free Shipping to HK">
      <Metatag />
      <div className={styles.shop}>
        <VendorView vendor={vendor} />
      </div>
    </Applayout>
  );
}

export async function getStaticProps({ params }) {
  const formatVendor = replaceHypenWithSpace(params.slug);
  const vendor = toTitleCase(formatVendor);

  return {
    props: {
      vendor,
    },
  };
}

export async function getStaticPaths() {
  const productData = await fetchAllSwellProducts();
  const results = await Promise.all(productData);

  let vendorArray = [];
  results[0].map((result) => vendorArray.push(result.vendor));

  let vendors = [...new Set(vendorArray)];

  return {
    paths:
      vendors?.map(
        (vendor) => `/collections/vendors/${replaceSpaceWithHypen(vendor)}`
      ) || [],
    fallback: false,
  };
}
