import RatingStar from "./RatingStar";
import { productType } from "@/types";

interface RatingProps {
  product: productType;
}
export default function Rating({ product }: RatingProps) {
  const reviews = product.review_rating > 1 ? "Reviews" : "Review";
  return (
    <a href="#reviews" className="flex">
      <RatingStar rate={product.rating} />
      <span className="d-inline-block fs-sm text-body align-middle mt-1 ms-1">
        {product.review_rating} {reviews}
      </span>
    </a>
  );
}
