import { connectHits } from "react-instantsearch-dom";

import Product from "@/components/Products";
import ProductList from "@/components/Products/ProductList";
import LoadProducts from "@/components/Loader/ProductsLoader";

export function ProductHit({ hits }: any) {
  return (
    <div className="flex flex-wrap">
      {hits.length > 0 ? (
        hits.map((hit: any, index: number) => (
          <Product key={index} product={hit} />
        ))
      ) : (
        <LoadProducts />
      )}
    </div>
  );
}

export const HitProduct = connectHits(ProductHit);

export function ProductHitList({ hits }: any) {
  return (
    <div className="flex flex-col w-full ml-4">
      {hits.length > 0 ? (
        hits.map((hit: any, index: number) => (
          <ProductList key={index} product={hit} />
        ))
      ) : (
        <LoadProducts />
      )}
    </div>
  );
}

export const HitProductList = connectHits(ProductHitList);
