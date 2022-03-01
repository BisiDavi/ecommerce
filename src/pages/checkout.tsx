/* eslint-disable react-hooks/exhaustive-deps */
import dynamic from "next/dynamic";
import { useQuery } from "react-query";

import { useAccount } from "@/hooks";
import Applayout from "@/layout/Applayout";
import CheckoutBanner from "@/components/Banner/CheckoutBanner";
import useCart from "@/hooks/useCart";
import SpinnerRipple from "@/components/Loader/SpinnerLoader";

const DynamicCheckoutSidebar = dynamic(
  () => import("@/components/Sidebar/CheckoutSidebar")
);
const DynamicCheckoutForm = dynamic(
  () => import("@/components/Form/CheckoutForm")
);
const CheckoutWelcomeBanner = dynamic(
  () => import("@/components/Banner/CheckoutWelcomeBanner")
);

export default function Checkout() {
  const { getUserAccount } = useAccount();
  const { useCartData } = useCart();
  const { data: cart } = useCartData();
  const { data } = useQuery("userDetails", getUserAccount);

  return (
    <Applayout title="Checkout your order">
      <CheckoutBanner title="Checkout" breadcrumb="Checkout" />
      <div className="container checkout-page-content">
        <div className="row mb-5">
          <section className="col-lg-8 flex flex-col">
            <CheckoutWelcomeBanner />
            <DynamicCheckoutForm />
          </section>
          {cart ? (
            <DynamicCheckoutSidebar cart={cart} />
          ) : (
            <div className="loader flex col-lg-4 justify-center m-auto">
              <SpinnerRipple />
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .checkout-page-content {
          min-height: 500px;
        }
      `}</style>
    </Applayout>
  );
}

// Checkout.whyDidYouRender = true;
