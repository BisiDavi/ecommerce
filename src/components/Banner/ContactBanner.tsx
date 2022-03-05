/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function ContactBanner() {
  return (
    <div className="bg-secondary py-4">
      <div className="container flex justify-between py-2 py-lg-3">
        <div className="lg:order-2 mb-3 mb-lg-0 lg:pt-2">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb lg:flex-nowrap justify-center justify-content-lg-start">
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
        <div className="lg:order-1 lg:pr-4 text-center lg:text-start">
          <h1 className="h3 mb-0">Contacts</h1>
        </div>
      </div>
    </div>
  );
}
