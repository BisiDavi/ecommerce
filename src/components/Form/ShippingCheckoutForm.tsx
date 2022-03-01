import { Formik } from "formik";

import checkoutFormContent from "@/json/checkout-form.json";
import { checkoutFormSchema } from "@/components/Form/schema/CheckoutFormSchema";
import { displayFormElement } from "./FormElement";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { AddressInputGroup } from "@/components/Form/FormFields";
import { accordionButtonStyle } from "@/lib/single-Checkout";
import { updateFormStage, updatePaymentForm } from "@/redux/payment-slice";
import useShippingPayment from "@/hooks/useShippingPayment";

export default function ShippingCheckoutForm(): JSX.Element {
  const { stage } = useAppSelector((state) => state.payment);
  const accordion = accordionButtonStyle(stage);
  const { formValues } = useShippingPayment();
  const dispatch = useAppDispatch();
  return (
    <div className="accordion-item">
      <h2 className="h6 pt-1 pb-3 mb-3 accordion-header">
        <a
          className={accordion.shippingHead}
          href="#form1"
          data-bs-toggle="collapse"
        >
          <span className="badge-custom me-2">1</span>
          Shipping address
        </a>
      </h2>
      <div
        className={accordion.shippingBody}
        id="form1"
        data-bs-parent="#shipping-form"
      >
        <div className="accordion-body">
          <Formik
            enableReinitialize
            initialValues={formValues}
            validationSchema={checkoutFormSchema}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(updateFormStage(2));
              setSubmitting(false);
              dispatch(updatePaymentForm({ form: values, completed: true }));
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <div>
                  {checkoutFormContent.personalDetails.content.map(
                    (formRow, index) => (
                      <div key={index} className="row">
                        {formRow.map((formInput, index) => (
                          <div key={index} className="col-sm-6">
                            {displayFormElement(formInput, formik)}
                          </div>
                        ))}
                      </div>
                    )
                  )}
                  <AddressInputGroup formik={formik} />
                </div>
                <button
                  aria-label="proceed with shipping"
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="btn btn-outline-primary flex mt-3 mb-2 mx-auto font-bold"
                >
                  Proceed
                </button>
              </form>
            )}
          </Formik>
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

// ShippingCheckoutForm.whyDidYouRender = true;
