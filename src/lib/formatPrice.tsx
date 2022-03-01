import { currencySymbolFormatter, useCurrencies } from "@/hooks/useCurrency";
import { useAppSelector } from "@/hooks/useRedux";

export function formatPrice(price: number) {
  const productPrice = price?.toFixed(2);
  return numberWithCommas(productPrice);
}

interface formattedPriceProps {
  price: number;
  oldPrice?: boolean;
  isProduct?: boolean;
  className?: string;
}

interface formatCurrencyProps extends formattedPriceProps {
  currencies: any[];
  currency: any;
  className: string;
}

function FormatCurrency({
  price,
  oldPrice,
  isProduct,
  currencies,
  currency,
  className,
}: formatCurrencyProps): JSX.Element {
  const selectedCurrency = currencies?.filter(
    (currencyP: { code: string }) => currencyP.code === currency
  );

  const currencyRate = currencies[1].rate;

  const priceRate = oldPrice
    ? (price / currencyRate) * selectedCurrency[0].rate
    : price * selectedCurrency[0].rate;

  const productItemPrice = isProduct ? priceRate : price;
  const itemPrice = formatPrice(productItemPrice);
  return (
    <div className={`flex items-center ${className}`}>
      {currencySymbolFormatter(selectedCurrency[0])}
      {itemPrice}
    </div>
  );
}

export default function FormattedPrice({
  price,
  oldPrice,
  isProduct,
  className,
}: formattedPriceProps): JSX.Element {
  const [currencies, status] = useCurrencies();
  const { currency } = useAppSelector((state) => state.currencyLanguage);

  return (
    <div className="flex items-center">
      {status === "error" ? (
        "unable to fetch price"
      ) : status === "loading" ? (
        "loading ..."
      ) : (
        <FormatCurrency
          price={price}
          oldPrice={oldPrice}
          isProduct={isProduct}
          currencies={currencies}
          currency={currency}
          className={className}
        />
      )}
    </div>
  );
}

export function numberWithCommas(x: number | string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
