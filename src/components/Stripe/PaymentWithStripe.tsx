import Image from "next/image";
import StripePaymentMethod from "@/components/Stripe/StripePaymentMethod";

export default function PaymentWithStripe() {
  return (
    <div className="accordion-item">
      <h3 className="accordion-header">
        <a className="accordion-button" href="#card" data-bs-toggle="collapse">
          <i className="ci-card fs-lg me-2 mt-n1 align-middle"></i>
          Pay with Credit Card (powered by Stripe)
        </a>
      </h3>
      <div
        className="accordion-collapse collapse show"
        id="card"
        data-bs-parent="#payment-method"
      >
        <div className="accordion-body">
          <div className="body-title flex items-center justify-between mb-2">
            <p className="fs-sm mb-0">
              We accept following credit cards:&nbsp;&nbsp;
            </p>
            <div className="image-container">
              <Image
                className="d-inline-block align-middle"
                src="/img/cards.png"
                width={150}
                height={30}
                alt="Cerdit Cards"
                layout="responsive"
              />
            </div>
          </div>
          <StripePaymentMethod />
        </div>
      </div>
      <style jsx>{`
        .image-container {
          height: 30px;
          width: 150px;
        }
      `}</style>
    </div>
  );
}
