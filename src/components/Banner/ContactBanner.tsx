/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function ContactBanner() {
  return (
    <div className="bg-secondary py-4">
      <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
        <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb flex-lg-nowrap justify-center justify-content-lg-start">
              <li className="breadcrumb-item">
                <Link href="/" passHref>
                  <a className="text-nowrap">
                    <i className="ci-home"></i>Home
                  </a>
                </Link>
              </li>
              <li
                className="breadcrumb-item text-nowrap active"
                aria-current="page"
              >
                Contacts
              </li>
            </ol>
          </nav>
        </div>
        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
          <h1 className="h3 mb-0">Contacts</h1>
        </div>
      </div>
    </div>
  );
}
