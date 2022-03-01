import { productType } from "@/types";
import useShoppingCart from "@/hooks/useShoppingCart";
import useEvent from "@/hooks/useEvent";
import ProductListForm from "@/components/Form/ProductListForm";

interface ProductProps {
  product: productType;
}

interface ProductProps {
  product: productType;
}

export default function ProductListQuickView({ product }: ProductProps) {
  const { loadingState, addItemToCart } = useShoppingCart();
  const { algoliaQuickViewEvent } = useEvent();

  loadingState(addItemToCart, `${product.name}  added to cart`);

  function quickViewHandler() {
    algoliaQuickViewEvent(product);
  }

  return (
    <div className="row">
      <div className="card-body card-body-hidden flex items-center justify-content-between px-5">
        <ProductListForm product={product} />
        <div className="text-start">
          <a
            className="nav-link-style fs-ms"
            onClick={quickViewHandler}
            data-bs-toggle="quickViewModal"
          >
            <i className="ci-eye align-middle me-1"></i>
            Quick view
          </a>
        </div>
      </div>
    </div>
  );
}
