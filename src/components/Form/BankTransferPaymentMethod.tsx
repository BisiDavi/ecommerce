/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import checkoutFormContent from "@/json/checkout-form.json";
import { sendBankTransfer } from "@/hooks/useVbout";
import { useAppSelector } from "@/hooks/useRedux";
import { useToast } from "@/hooks";

export default function BankTransferPaymentMethod() {
  const [bank, setBank] = useState("");
  const { paymentForm }: any = useAppSelector((state) => state.payment);
  const { isLoading, hasError, isSuccessful } = useToast();

  function setBankHandler(e: any) {
    setBank(e.target.value);
  }

  function submitHandler(e: any) {
    e.preventDefault();
    const loading = isLoading();
    sendBankTransfer(paymentForm?.email, bank)
      .then((response) => {
        isSuccessful(
          loading,
          `An email has been sent to ${paymentForm?.email}`
        );
      })
      .catch((error) => {
        // console.error("error sendBankTransfer", error);
        hasError(loading, "an error occured");
      });
  }

  return (
    <div className="accordion-item">
      <h3 className="accordion-header">
        <a
          className="accordion-button collapsed"
          href="#points"
          data-bs-toggle="collapse"
        >
          <i className="ci-gift me-2"></i>
          Bank Transfer
        </a>
      </h3>
      <div
        className="accordion-collapse collapse"
        id="points"
        data-bs-parent="#payment-method"
      >
        <p className="mt-2 mb-0 text-center">
          Please select your preferred country and currency pair for payment to
          our bank accounts
        </p>
        <div className="accordion-body">
          <form onSubmit={submitHandler}>
            <table className="manualTransfer mb-3">
              <thead>
                <tr className="border-b-4">
                  <th>CURRENCY</th>
                  <th>BANK LOCATION</th>
                </tr>
              </thead>
              <tbody>
                {checkoutFormContent.bankTransfer.content.map(
                  (content: any, index: number) => (
                    <tr key={index} className="border-b-4">
                      <td className="flex items-center my-1">
                        <input
                          type="radio"
                          name="bankTransfer"
                          onChange={setBankHandler}
                          value={content.vboutListCode}
                          required
                        />
                        <div className="flex items-center">
                          <img
                            src={content.flag}
                            alt={content.country}
                            height="30px"
                            width="30px"
                            className="mx-3"
                          />
                          <div className="currency flex flex-col">
                            <h6 className="font-bold">
                              {content.currencyCode}
                            </h6>
                            <p className="text-muted">{content.currency}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0">{content.country}</p>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            <button
              type="submit"
              aria-label="Submit"
              className="btn btn-outline-primary flex m-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <style jsx>
        {`
          .manualTransfer th {
            width: 300px;
          }
        `}
      </style>
    </div>
  );
}
