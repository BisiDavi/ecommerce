import FormattedPrice from "@/lib/formatPrice";
import RatingStar from "@/components/Rating/RatingStar";

export default function ProductPriceView({ product }: any) {
  return (
    <div className="flex justify-between">
      <ul className="product-price flex flex-col items-start">
        <li className="text-md font-medium">
          <div className="text-blue-800">
            <FormattedPrice
              className="font-bold"
              price={product.price}
              isProduct
            />
          </div>
        </li>
        {product.rrp && (
          <li className="text-start">
            <del className="text-md text-blue-800">
              <FormattedPrice price={product.rrp} isProduct />
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
    </div>
  );
}
