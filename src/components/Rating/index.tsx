import RatingStar from "./RatingStar";
import { productType } from "@/types";

interface RatingProps {
  product: productType;
}
export default function Rating({ product }: RatingProps) {
  return (
    <a href="#reviews" data-scroll>
      <RatingStar rate={product.rating} />
      <span className="d-inline-block fs-sm text-body align-middle mt-1 ms-1">
        {product.review_rating} Reviews
      </span>
    </a>
  );
}
