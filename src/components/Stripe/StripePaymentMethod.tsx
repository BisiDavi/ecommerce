import { useRef, MutableRefObject } from "react";

import useStripeElement from "@/hooks/useStripeElement";
import { Button } from "@/components/UIElement";
import SpinnerRipple from "@/components/Loader/SpinnerLoader";
import styles from "@/styles/ui.module.css";
import { useAppSelector } from "@/hooks/useRedux";
import { useProcessPayment } from "@/hooks";

interface PaymentInputType {
  inputRef: MutableRefObject<null>;
}

function PaymentInput({ inputRef }: PaymentInputType): JSX.Element {
  return (
    <div className="mb-0 col-sm-12">
      <div ref={inputRef} id="card-element-id"></div>
    </div>
  );
}

export default function StripePaymentMethod() {
  useStripeElement();
  const { paymentForm }: any = useAppSelector((state) => state.payment);
  const inputRef = useRef(null);

  const { makePayment, loadingState } = useProcessPayment();

  function makePaymentHandler() {
    makePayment(paymentForm);
  }

  return (
    <div className="row px-0 flex flex-col">
      <div className="flex mx-auto justify-center">
        {inputRef === null && <SpinnerRipple />}
      </div>
      <PaymentInput inputRef={inputRef} />
      <div className="col-4 mx-auto mt-3">
        <Button
          disable={loadingState}
          className={`${styles.uiElement} btn-outline-primary d-block w-100 mt-0`}
          text="Submit"
          onClick={makePaymentHandler}
          type="submit"
          loading={loadingState}
        />
      </div>
      <style jsx>
        {`
          button.btn {
            position: relative;
          }
          .loading {
            margin-left: 35px;
          }
        `}
      </style>
    </div>
  );
}
