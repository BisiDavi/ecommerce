import swellClientInit from "@/lib/config";

export default function useOrder() {
  const { swell, initializeSwell } = swellClientInit();
  initializeSwell();

  async function getLastOrderDetails() {
    return await swell.cart.getOrder();
  }
  return {
    getLastOrderDetails,
  };
}
