/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { replaceSpaceWithHypen } from "@/lib/formatString";
import { productType } from "@/types";

interface Props {
  product: productType;
}

export default function ProductBanner({ product }: Props) {
  return (
    <div className="w-full bg-gray-700 h-60 items-center flex">
      <div className="container mx-auto items-center -mt-14 flex justify-between">
        <div className="lg:order-2 mb-3 lg:mb-0 lg:pt-2 w-1/2">
          <nav aria-label="w-full text-start">
            <ol className="lg:flex text-white justify-center lg:justify-content-start">
              <li>
                <Link href="/" passHref>
                  <a className="hover:text-red-500">
                    <i className="ci-home"></i>Home
                  </a>
                </Link>
              </li>
              <li className="mx-2">
                <span>&gt;</span>
              </li>
              <li>
                <Link href="/shop" passHref>
                  <a className="hover:text-red-500">Shop</a>
                </Link>
              </li>
              <li className="mx-2">
                <span>&gt;</span>
              </li>
              <li>
                <Link
                  href={`/shop/vendors/${replaceSpaceWithHypen(
                    product.vendor
                  )}`}
                  passHref
                >
                  <a className="hover:text-red-500">{product.vendor}</a>
                </Link>
              </li>
              <li className="mx-2">
                <span>&gt;</span>
              </li>
              <li
                className="breadcrumb-item text-gray-400 text-nowrap active"
                aria-current="page"
              >
                {product.name}
              </li>
            </ol>
          </nav>
        </div>
        <div className="lg:order-1 text-start w-1/2">
          <h1 className="text-white mb-0">{product.name}</h1>
        </div>
      </div>
    </div>
  );
}
