export default function SlideCartNote() {
  return (
    <div>
      <div className="note">
        <h5>
          Pro Club is our all-access community of doctors,medical professionals
          and administrators who receive first access to our new products,
          industry insights and enhanced data profiles.
        </h5>
        <button
        aria-label="Sailfish Pro Club - Learn more"
          className="learnMore btn btn-outline-primary d-block m-auto"
          type="button"
        >
          LEARN MORE
        </button>
      </div>
      <style jsx>
        {`
          .note {
            padding: 10px;
            border-radius: 5px;
            background-color: #eef2fb;
            margin: 20px;
          }

          .note h5 {
            text-align: center;
            font-size: 16px;
            color: black;
            line-height: 24px;
          }

          @media (max-width: 768px) {
            .note h5 {
              font-size: 13px;
              line-height: 18px;
            }
            .learnMore {
              font-size: 12px;
              padding: 5px 10px;
            }
          }
        `}
      </style>
    </div>
  );
}

export function CheckoutNote() {
  return (
    <div className="">
      <p className="text-center">Free Shipping worldwide.</p>
      <p className="text-center">
        All orders are shipped from Hong Kong or China using Air Freight.
        Deliveries may take between 1 to 4 weeks depending on your location.
      </p>
    </div>
  );
}
