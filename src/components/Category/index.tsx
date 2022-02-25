import Image from "next/image";
import Link from "next/link";

import RatingStar from "@/components/RatingStar";

interface CategoryProps {
  category: {
    name: string;
    slug: string;
    images: {
      file: {
        url: string;
      };
      name: string;
    }[];
  };
}
export default function Category({ category }: CategoryProps): JSX.Element {
  return (
    <div className="category">
      <div className="card mx-2">
        <button
          className="btn-wishlist btn-sm"
          type="button"
          aria-label="Add to Wishlist"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Add to wishlist "
        >
          <i className="ci-heart"></i>
        </button>
        {category?.images && (
          <Link href={`/collections/product-type/${category.slug}`} passHref>
            <a className="card-img-top d-block overflow-hidden">
              <Image
                height={300}
                width={400}
                className="categoryImg"
                src={category.images[0].file.url}
                alt={category.name}
                blurDataURL={category.images[0].file.url}
                loading="lazy"
                layout="responsive"
              />
            </a>
          </Link>
        )}
        <div className="card-body py-2">
          <h3 className="product-title fs-sm">
            <Link href={`/collections/${category.slug}`} passHref>
              <a>{category.name}</a>
            </Link>
          </h3>
          <RatingStar rate={5} />
        </div>
      </div>
      <style jsx>
        {`
          .card-img-top .categoryImg:hover {
            transform: scale(1.03);
            -webkit-transition: -webkit-transform 300ms ease-in 0s;
            -webkit-transition: -webkit-transform 300ms ease-in 0s;
            transition: transform 300ms ease-in 0s;
          }
          @media (max-width: 768px) {
            .category {
              padding: 0px 5px !important;
            }
          }
        `}
      </style>
    </div>
  );
}
