import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

import { ShareProductLink } from "@/components/Products/ProductView";
import { productType } from "@/types";
import FormattedPrice from "@/lib/formatPrice";
import Rating from "@/components/Rating";
import ProductForm from "../Form/ProductForm";
import { replaceSpaceWithHypen } from "@/lib/formatString";

interface Props {
  product: productType;
}

const DynamicContactModal = dynamic(
  () => import("@/components/Modal/ContactForMoreModal")
);

export default function ProductDetail({ product }: Props) {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  return (
    <div className="col-lg-5 pt-4 pt-lg-0">
      <div className="product-details ms-auto pb-3">
        <DynamicContactModal
          show={modal}
          onHide={toggleModal}
          productName={product.name}
        />
        <div className="flex justify-between items-center mb-2">
          <Rating product={product} />
          <button
            className="btn-wishlist me-0 me-lg-n3"
            type="button"
            aria-label="Add to Wishlist"
            data-bs-toggle="tooltip"
            title="Add to wishlist"
          >
            <i className="ci-heart"></i>
          </button>
        </div>
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center">
            <span className="h3 fw-normal text-accent me-1">
              <FormattedPrice price={product.price} isProduct />
            </span>
            {product.rrp && (
              <span className="h5 fw-normal text-accent mx-2">
                <del>
                  <FormattedPrice price={product.rrp} isProduct />
                </del>
              </span>
            )}
          </div>
          <span className="badge bg-danger badge-shadow align-middle mt-n2">
            Sale
          </span>
        </div>
        <ProductForm product={product} />
        <div className="flex flex-col flex-start align-items-start">
          <Link
            href={`/collections/vendors/${replaceSpaceWithHypen(
              product.vendor
            )}`}
            passHref
          >
            <a className="notEnoughLink btn btn-link link-accent text-decoration-underline px-0">
              + All {product.vendor} products
            </a>
          </Link>
          <button
            aria-label="Contact for more"
            onClick={toggleModal}
            className="notEnoughLink btn btn-link link-accent text-decoration-underline px-0"
          >
            Not enough? Contact us for more
          </button>
        </div>
        <ShareProductLink />
      </div>
      <style jsx>
        {`
          .notEnoughLink:hover {
            color: red;
          }
        `}
      </style>
    </div>
  );
}
