import { toast } from "react-toastify";

import { accordionButtonStyle } from "@/lib/single-Checkout";
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import BankTransferPaymentMethod from "@/components/Form/BankTransferPaymentMethod";
import AirwallexPaymentMethod from "@/components/Airwallex/AirwallexPaymentMethod";
import PaymentWithStripe from "@/components/Stripe/PaymentWithStripe";
import { updateFormStage } from "@/redux/payment-slice";

export default function CheckoutPaymentMethod() {
  const { stage } = useAppSelector((state) => state.payment);
  const dispatch = useAppDispatch();
  const accordion = accordionButtonStyle(stage);

  function paymentHandler() {
    dispatch(updateFormStage(1));
    if (stage === 1) {
      toast.error("Please complete stage 1");
    }
  }

  return (
    <div className="accordion-item">
      <h2 className="h6 pb-3 mb-2 accordion-header">
        <a
          className={accordion.headClassName}
          href={accordion.href}
          onClick={paymentHandler}
          data-bs-toggle="collapse"
        >
          <span className="badge-custom me-2">2</span>
          Choose payment method
        </a>
      </h2>
      <div
        className={accordion.bodyClassName}
        id="payment"
        data-bs-parent="#shipping-form"
      >
        <div className="">
          <div className="accordion-body">
            <div className="accordion mb-2" id="payment-method">
              <PaymentWithStripe />
              <AirwallexPaymentMethod />
              <BankTransferPaymentMethod />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .badge-custom {
            height: 25px;
            width: 25px;
            background-color: #fe696a;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            font-weight: bold;
            font-size: 14px;
          }
        `}
      </style>
    </div>
  );
}

// CheckoutPaymentMethod.whyDidYouRender = true;
