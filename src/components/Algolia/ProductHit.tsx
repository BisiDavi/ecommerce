import { connectHits } from "react-instantsearch-dom";

import Product from "@/components/Products";
import ProductList from "@/components/Products/ProductList";
import LoadProducts from "@/components/Loader/ProductsLoader";

export function ProductHit({ hits }: any) {
  return (
    <div className="row pt-0 mx-n2">
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
    <div className="row mx-n2">
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
