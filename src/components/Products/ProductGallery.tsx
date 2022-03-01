import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";

import ProductGalleryView from "@/components/Products/ProductGalleryView";
import { productType } from "@/types";

const PaymentNote = dynamic((): any =>
  import("@/components/Products/ProductView").then((mod) => mod.PaymentNote)
);

interface Props {
  product: productType;
  quickView?: boolean;
}

export default function ProductGallery({ product, quickView }: Props) {
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
      <div className="col-lg-7 pe-lg-0 pt-lg-4">
        <ProductGalleryView product={product} />
        {!quickView && <PaymentNote />}
      </div>
    </>
  );
}
