export default function discountPrice(product: any) {
  const priceDifference =
    product.hkd_compare_at_price - product.hkd_selling_price;
  const productPriceRatio = priceDifference / product.hkd_compare_at_price;

  const productDiscount = Math.ceil(productPriceRatio * 100);
  return productDiscount;
}
