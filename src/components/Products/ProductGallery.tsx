import Head from "next/head";
import Script from "next/script";

import ProductGalleryView from "@/components/Products/ProductGalleryView";
import { productType } from "@/types";

interface Props {
  product: productType;
  quickView?: boolean;
}

export default function ProductGallery({ product }: Props) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/lightgallery.js@1.4.0/src/css/lightgallery.css"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/lightgallery.js@1.4.0/lib/js/lightgallery.min.js"
        strategy="afterInteractive"
      />
      <div className="w-2/3 lg:pr-0 lg:pt-4">
        <ProductGalleryView product={product} />
      </div>
    </>
  );
}
