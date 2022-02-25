import swellClientInit from "@/lib/config";

const inputClasses = { base: "form-control StripeElement" };

export default function usePayment() {
  const { swell, initializeSwell } = swellClientInit();

  initializeSwell();

  async function tokenizePayment() {
    return await swell.payment.tokenize({
      card: {
        onError: (err: any) => {
          console.log("error tokenizePayment", err);
          return err;
        },
        onSuccess: (ev: any) => {
          console.log("erv success", ev);
          return ev;
        },
      },
    });
  }

  async function submitUserOrder() {
    return await swell.cart.submitOrder();
  }

  return {
    tokenizePayment,
    submitUserOrder,
  };
}
