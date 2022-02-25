import axios from "axios";
import { toast } from "react-toastify";

import { useRouter } from "next/router";
import { updatePaymentIntent } from "@/redux/airwallex-slice";
import { useAppDispatch } from "@/redux/store";
import { formatIntentData } from "@/lib/formatAirwallex";
import { cartType } from "@/types";

export default function useAirwallexPayment() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const disableBtn = router.pathname.includes("checkout") ? true : false;

  function createAccessToken() {
    return axios.request({
      url: `/api/get-payment-token`,
      method: "get",
    });
  }

  function createPaymentIntent(requestBody: any) {
    return axios.request({
      url: `/api/create-payment-intent`,
      method: "post",
      data: requestBody,
    });
  }

  function checkoutHandler(cart: cartType, paymentForm: any) {
    const paymentDetails = formatIntentData(cart, paymentForm);
    createAccessToken()
      .then(({ data }) => {
        console.log("data createAccessToken", data);
        return createPaymentIntent({
          auth: data.token,
          paymentDetails,
        });
      })
      .then(({ data }: any) => {
        console.log("createPaymentIntent response", data);
        dispatch(
          updatePaymentIntent({
            clientSecret: data.client_secret,
            paymentIntentId: data.id,
          })
        );
      })
      .catch((error) => {
        console.log("error", error.response?.data);
        toast.error(error.response?.data?.message);
      });
  }

  return {
    createAccessToken,
    createPaymentIntent,
    checkoutHandler,
    disableBtn,
  };
}
