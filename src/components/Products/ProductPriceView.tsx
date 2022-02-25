import FormattedPrice from "@/lib/formatPrice";
import RatingStar from "@/components/RatingStar";
import styles from "@/styles/ui.module.css";

export default function ProductPriceView({ product }: any) {
  return (
    <div className="flex justify-between">
      <ul className="product-price flex items-center">
        <li className={`mx-1 ${styles.price}`}>
          <FormattedPrice price={product.price} isProduct />
        </li>
        {product.hkd_compare_at_price > 0 && (
          <li className="mx-1">
            <del className={`text-xs ${styles.oldPrice} `}>
              <FormattedPrice
                price={product.hkd_compare_at_price}
                oldPrice
                isProduct
              />
            </del>
          </li>
        )}
      </ul>
      <div className="reviewRating flex flex-col">
        <RatingStar rate={product.rating} />
        {product.review_rating ? (
          <p className="text-sm">
            {product.review_rating === 1
              ? `${product.review_rating} review`
              : `${product.review_rating} reviews`}
          </p>
        ) : (
          ""
        )}
      </div>
      <style jsx>
        {`
          .product-price {
            padding: 0px;
          }
          .product-price li {
            list-style: none;
            padding: 0px;
          }
          ul.product-price {
            font-size: 13px;
          }
          .reviewRating p {
            font-size: 12px;
          }
          @media (max-width: 768px) {
            .reviewRating p.review {
              font-size: 10px;
            }
          }
        `}
      </style>
    </div>
  );
}
