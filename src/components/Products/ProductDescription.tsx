/* eslint-disable @next/next/no-img-element */
import { productType } from "@/types";

interface Props {
  product: productType;
}

export default function ProductDescription({ product }: Props) {
  return (
    <div className="container mt-4">
      <div className="w-full">
        <h2 className="text-xl mb-0 mb-1 font-bold">Product description</h2>
        <h6 className="text-base mb-0">{product.name}</h6>
        <div
          className="productInfo"
          dangerouslySetInnerHTML={{
            __html: product["description"],
          }}
        />
      </div>
    </div>
  );
}
