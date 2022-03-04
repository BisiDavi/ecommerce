/* eslint-disable react-hooks/exhaustive-deps */
import { QueryClient } from "react-query";
import { useState } from "react";

import swellClientInit from "@/lib/config";
import { useAppSelector } from "@/hooks/useRedux";

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
  const [currencyList, setCurrencyList] = useState<any>(null);
  const { listEnabledCurrencies } = useCurrency();

  if (currencyList === null) {
    getCurrencies(listEnabledCurrencies)
      .then((response) => setCurrencyList(response))
      .catch((error) => setCurrencyList(error));
  }

  return { currencyList };
}

export async function getCurrencies(listEnabledCurrencies: any) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  return await queryClient.fetchQuery("currencies", listEnabledCurrencies);
}
