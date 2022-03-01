/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";

import Applayout from "@/layout/Applayout";
import WishlistItem from "@/components/WishlistItem";
import wishlistItemContent from "@/json/wishlist-items.json";

const DynamicDashboardSidebar = dynamic(
  () => import("@/components/Sidebar/DashboardSidebar")
);

export default function AccountWishlist() {
  return (
    <Applayout title="Your Wishlist">
      {/*<!-- Page Title-->*/}
      <div className="page-title-overlap bg-dark pt-4">
        <div className="container d-lg-flex justify-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-center justify-content-lg-start">
                <li className="breadcrumb-item">
                  <a className="text-nowrap" href="index">
                    <i className="ci-home"></i>Home
                  </a>
                </li>
                <li className="breadcrumb-item text-nowrap">
                  <a href="#">Account</a>
                </li>
                <li
                  className="breadcrumb-item text-nowrap active"
                  aria-current="page"
                >
                  Wishlist
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 text-light mb-0">My wishlist</h1>
          </div>
        </div>
      </div>
      <div className="container pb-5 mb-2 mb-md-4">
        <div className="row">
          {/*<!-- Sidebar-->*/}
          <DynamicDashboardSidebar />
          {/*<!-- Content  -->*/}
          <section className="col-lg-8">
            {/*<!-- Toolbar-->*/}
            <div className="d-none d-lg-flex justify-between items-center pt-lg-3 pb-4 pb-lg-5 mb-lg-3">
              <h6 className="fs-base text-light mb-0">
                List of items you added to wishlist:
              </h6>
              <Link href="/account-signin" passHref>
                <a className="btn btn-primary btn-sm">
                  <i className="ci-sign-out me-2"></i>Sign out
                </a>
              </Link>
            </div>
            {wishlistItemContent.map((content) => (
              <WishlistItem key={content.image} content={content} />
            ))}
          </section>
        </div>
      </div>
    </Applayout>
  );
}
