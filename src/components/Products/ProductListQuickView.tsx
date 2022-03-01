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
    <div className="flex mt-4 items-center justify-between">
      <ProductListForm product={product} />
      <div className="text-start">
        <a
          className="hover:text-red-500 cursor-pointer"
          onClick={quickViewHandler}
          data-bs-toggle="quickViewModal"
        >
          <i className="ci-eye align-middle me-1"></i>
          Quick view
        </a>
      </div>
    </div>
  );
}
