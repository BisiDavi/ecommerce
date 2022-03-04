export default function discountPrice(product: any) {
  const rrp = Number(product.rrp);
  const priceDifference = rrp - product.price;
  const productPriceRatio = priceDifference / rrp;

  const productDiscount = productPriceRatio * 100;
  // console.log("productDiscount", productDiscount);
  return productDiscount.toFixed(1);
}
