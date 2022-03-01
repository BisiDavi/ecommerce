import  AirwallexDropin  from "@/components/Airwallex/AirwallexDropin";
import { useCart } from "@/hooks";
import useAirwallexPayment from "@/hooks/useAirwallexPayment";
import { useAppSelector } from "@/hooks/useRedux";

export default function AirwallexPaymentMethod() {
  const { useCartData } = useCart();
  const { paymentForm }: any = useAppSelector((state) => state.payment);
  const { data: cart } = useCartData();
  const { checkoutHandler } = useAirwallexPayment();

  function onCheckout() {
    checkoutHandler(cart, paymentForm);
  }

  const { clientSecret, paymentIntentId } = useAppSelector(
    (state) => state.airwallex
  );

  return (
    <div className="accordion-item">
      <h3 onClick={onCheckout} className="accordion-header">
        <a
          className="accordion-button collapsed"
          href="#paypal"
          data-bs-toggle="collapse"
        >
          <i className="ci-paypal me-2 align-middle"></i>
          Pay with Airwallex
        </a>
      </h3>
      <div
        className="accordion-collapse collapse"
        id="paypal"
        data-bs-parent="#payment-method"
      >
        <div className="accordion-body fs-sm">
          <p>
            <span className="fw-medium">Airwallex</span> - the safer, easier way
            to pay
          </p>
          <AirwallexDropin
            intent_id={paymentIntentId}
            client_secret={clientSecret}
          />
        </div>
      </div>
    </div>
  );
}
