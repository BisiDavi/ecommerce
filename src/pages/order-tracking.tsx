import Link from "next/link";

import Applayout from "@/layout/Applayout";
import OrderTrackingBanner from "@/components/Banner/OrderTrackingBanner";
import contentData from "@/json/order-tracking.json";
import expectedOrderDate from "@/lib/formatOrderDate";

export default function OrderTracking() {
  contentData.group1[2].text = expectedOrderDate();
  return (
    <Applayout title="Track your order">
      <OrderTrackingBanner />
      <div className="container py-5 mb-2 mb-md-3">
        {/*<!-- Details-->*/}
        <div className="row gx-4 mb-4">
          {contentData.group1.map((content) => (
            <div key={content.title} className="col-md-4 mb-2">
              <div className="bg-secondary h-100 p-4 text-center rounded-3">
                <span className="fw-medium text-dark me-2">
                  {content.title}:
                </span>
                {content.text}
              </div>
            </div>
          ))}
        </div>
        {/*<!-- Progress-->*/}
        <div className="card border-0 shadow-lg">
          <div className="card-body pb-2">
            <ul className="nav nav-tabs media-tabs nav-justified">
              {contentData.group2.map((content) => (
                <li key={content.icon} className="nav-item">
                  <div className="nav-link completed">
                    <div className="flex items-center">
                      <div className="media-tab-media">
                        <i className={content.icon}></i>
                      </div>
                      <div className="ps-3">
                        <div className="media-tab-subtitle text-muted fs-xs mb-1">
                          {content.step}
                        </div>
                        <h6 className="media-tab-title text-nowrap mb-0">
                          {content.text}
                        </h6>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="d-sm-flex flex-wrap justify-between items-center text-center pt-4">
          <div className="form-check mt-2 me-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="notify-me"
              checked
            />
            <label className="form-check-label" htmlFor="notify-me">
              Notify me when order is delivered
            </label>
          </div>
          <Link href="/shop" passHref>
            <a className="btn btn-primary btn-sm mt-2">To Continue Shopping</a>
          </Link>
        </div>
      </div>
    </Applayout>
  );
}
