import { useCallback } from "react";

import { productType } from "@/types";
import useAlgoliaEvents from "@/hooks/useAlgoliaEvents";
import useProductOptions from "@/hooks/useProductOptions";
import useShoppingCart from "@/hooks/useShoppingCart";

interface ProductProps {
  product: productType;
}

export default function ProductListForm({ product }: ProductProps) {
  const { productAddedToCart } = useAlgoliaEvents();
  const { optionHandler } = useProductOptions();
  const { loadingState, addItemToCart } = useShoppingCart();

  loadingState(addItemToCart, `${product.name} added to cart`);

  function onSubmitHandler(e: any) {
    e.preventDefault();
    addItemToCart.mutate({ product, quantity: 1 });
    productAddedToCart([product.id]);
  }

  const labelBg = useCallback((name: string) => {
    const style = { backgroundColor: name.toLowerCase() };
    return style;
  }, []);

  return (
    <form onSubmit={onSubmitHandler}>
      {product?.options && product?.options.length > 0 ? (
        product?.options.map((option) => {
          return option?.name === "Color" ? (
            <div key={option.id} className="pb-2">
              {option?.values.map((value: { name: string; id: string }) => (
                <div
                  key={value.id}
                  className="form-check form-option form-check-inline mb-2"
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    value={value.name}
                    onChange={optionHandler}
                    name={option.name}
                    id={value.id}
                    required
                  />
                  <label
                    className="form-option-label rounded-circle"
                    htmlFor={value.id}
                  >
                    <span
                      className="form-option-color rounded-circle"
                      style={labelBg(value.name)}
                    ></span>
                  </label>
                </div>
              ))}
            </div>
          ) : option?.name === "Size" ? (
            <div key={option.id} className="d-flex mb-2">
              <select
                className="form-select select-size form-select-sm me-2"
                onChange={optionHandler}
                name="Size"
                required
              >
                <option value="">Select Size</option>
                {option.values.map((value: { name: string; id: string }) => (
                  <option value={value.name} key={value.id}>
                    {value.name}
                  </option>
                ))}
              </select>
              <button
                aria-label="Add to Cart"
                className="btn btn-primary btn-sm"
                type="submit"
              >
                <i className="ci-cart fs-sm me-1"></i>
                Add to Cart
              </button>
            </div>
          ) : null;
        })
      ) : (
        <button
          className="btn btn-primary btn-sm m-auto d-flex align-items-center"
          type="submit"
          aria-label="Add to Cart"
        >
          <i className="ci-cart fs-sm me-1"></i>
          Add to Cart
        </button>
      )}
      <style jsx>
        {`
          .select.form-select.select-size {
            max-width: 14rem;
          }
        `}
      </style>
    </form>
  );
}
