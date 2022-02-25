import Image from "next/image";

import Dropdown from "@/components/Dropdown";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { updateCurrency } from "@/redux/currency-language-slice";
import useCurrency, { useCurrencies } from "@/hooks/useCurrency";
import { useToast } from "@/hooks";

interface Props {
  position?: string;
}

export default function CurrencyDropdown({ position }: Props) {
  const dispatch = useAppDispatch();
  const { isLoading, isSuccessful, hasError } = useToast();
  const { selectCurrencies } = useCurrency();
  const [currencies, status] = useCurrencies();

  const { currency } = useAppSelector((state) => state.currencyLanguage);
  // const footerStyle = position === "bottom" ? styles.bottom : "";

  function selectCurrency(e: any): any {
    const loading = isLoading();
    return selectCurrencies(e.target.value)
      .then((response) => {
        isSuccessful(loading, `${response.currency} selected`);
        dispatch(updateCurrency(response.currency));
      })
      .catch((error) => {
        hasError(loading, "an error occured, please try again");
        dispatch(updateCurrency("USD"));
        console.error("error", error);
      });
  }

  return status === "error" ? (
    <p>unable to load currencies</p>
  ) : status === "loading" ? (
    <p>loading currencies...</p>
  ) : (
    <Dropdown content={currencies}>
      <div className="flex items-center">
        <Image
          className="mr-2"
          src="/img/flags/en.png"
          width={40}
          height={40}
          alt="en"
          layout="responsive"
        />
        {`En / ${currency}`}
      </div>
    </Dropdown>
  );
}
