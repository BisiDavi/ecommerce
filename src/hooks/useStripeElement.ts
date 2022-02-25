/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import swellClientInit from "@/lib/config";

const inputClasses = { base: "form-control StripeElement" };

export default function useStripeElement() {
  const { swell, initializeSwell } = swellClientInit();

  initializeSwell();

  useEffect(() => {
    swell.payment.createElements({
      card: {
        elementId: "#card-element-id",
        options: {
          classes: inputClasses,
          placeholder: "Credit Card Number",
          showIcon: true,
          iconStyle: "solid",
          hidePostalCode: true,
        },
      },
    });
  }, []);
}
