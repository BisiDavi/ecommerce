/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { replaceSpaceWithHypen } from "@/lib/formatString";
import { productType } from "@/types";

interface Props {
  product: productType;
}

export default function ProductBanner({ product }: Props) {
  return (
    <div className="page-title-overlap bg-dark pt-4 w-100">
      <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
        <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
              <li className="breadcrumb-item">
                <Link href="/" passHref>
                  <a className="text-nowrap">
                    <i className="ci-home"></i>Home
                  </a>
                </Link>
              </li>
              <li className="breadcrumb-item text-nowrap">
                <Link href="/shop" passHref>
                  <a>Shop</a>
                </Link>
              </li>
              <li className="breadcrumb-item text-nowrap">
                <Link
                  href={`/collections/vendors/${replaceSpaceWithHypen(
                    product.vendor
                  )}`}
                  passHref
                >
                  <a>{product.vendor}</a>
                </Link>
              </li>
              <li
                className="breadcrumb-item text-nowrap active"
                aria-current="page"
              >
                {product.name}
              </li>
            </ol>
          </nav>
        </div>
        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
          <h1 className="productName text-light mb-0">{product.name}</h1>
        </div>
      </div>
      <style jsx>
        {`
          .productName {
            font-size: 16px;
          }
        `}
      </style>
    </div>
  );
}
