/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface CheckoutBannerProps {
  title: string;
  breadcrumb: string;
}

export default function CheckoutBanner({
  title,
  breadcrumb,
}: CheckoutBannerProps) {
  return (
    <div className="page-title-overlap bg-dark pt-4 w-100">
      <div className="container d-lg-flex justify-between py-2 py-lg-3">
        <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-center justify-content-lg-start">
              <li className="breadcrumb-item">
                <Link href="/" passHref>
                  <a className="text-nowrap">
                    <i className="ci-home"></i>Home
                  </a>
                </Link>
              </li>
              <li className="breadcrumb-item text-nowrap">
                <Link href="/shop" passHref>
                  <a>Shop</a>
                </Link>
              </li>
              <li
                className="breadcrumb-item text-nowrap active"
                aria-current="page"
              >
                {breadcrumb}
              </li>
            </ol>
          </nav>
        </div>
        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
          <h1 className="h3 text-light mb-0">{title}</h1>
        </div>
      </div>
    </div>
  );
}
