import { useQuery } from "react-query";
import swellClientInit from "@/lib/config";
import { useAppSelector } from "./useRedux";

export default function useCurrency() {
  const { swell, initializeSwell } = swellClientInit();
  initializeSwell();

  const { currency } = useAppSelector((state) => state.currencyLanguage);

  async function listEnabledCurrencies() {
    return await swell.currency.list();
  }

  async function selectCurrencies(currency: string) {
    return await swell.currency.select(currency);
  }

  async function getSelectedCurrencies() {
    return await swell.currency.selected();
  }

  return {
    listEnabledCurrencies,
    selectCurrencies,
    getSelectedCurrencies,
    currency,
  };
}

export function currencySymbolFormatter(currency: {
  symbol: string;
  code: string;
}) {
  const currencyCode = currency ? currency.code : "";
  if (currency.symbol === "$" && currency.code !== "USD") {
    return `${currencyCode} ${currency.symbol}`;
  } else {
    return currency.symbol;
  }
}

export function useCurrencies() {
  const { listEnabledCurrencies } = useCurrency();
  const { data: currencies, status } = useQuery(
    "currencies",
    listEnabledCurrencies,
    {
      staleTime: Infinity,
    }
  );
  return [currencies, status];
}
