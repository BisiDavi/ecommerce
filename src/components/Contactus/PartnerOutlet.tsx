/* eslint-disable @next/next/no-img-element */
import partnerContent from "@/json/contact-us.json";

export default function PartnerOutlet() {
  return (
    <section className="container pt-4 mt-md-4 mb-5">
      <h2 className="h3 text-center mb-3">Partner outlet stores</h2>
      <div className="row pt-4">
        {partnerContent.outlet.map((content) => (
          <div
            key={content.address}
            className="col-md-4 col-sm-6 mb-grid-gutter"
          >
            <div className="card border-0 shadow">
              <img className="card-img-top" src={content.image} alt="Orlando" />
              <div className="card-body">
                <h6>{content.address}</h6>
                <ul className="list-unstyled mb-0">
                  {content.info.map((content) => (
                    <li
                      key={content.action}
                      className="d-flex pb-3 border-bottom"
                    >
                      <i
                        className={`${content.icon} fs-lg mt-2 mb-0 text-primary`}
                      ></i>
                      <div className="ps-3">
                        <span className="fs-ms text-muted">
                          {content.action}
                        </span>
                        {content.action === "Find us" ? (
                          <a className="d-block text-heading fs-sm" href="#">
                            {content.text}
                          </a>
                        ) : content.action === "Call us" ? (
                          <a
                            className="d-block text-heading fs-sm"
                            href={`tel:${content.text.replace(" ", "")}`}
                          >
                            {content.text}
                          </a>
                        ) : (
                          <a
                            className="d-block text-heading fs-sm"
                            href={`mailto:${content.text}`}
                          >
                            {content.text}
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
