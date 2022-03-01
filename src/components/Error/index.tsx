import Link from "next/link";

export default function Error404() {
  return (
    <div className="container py-5 mb-lg-3">
      <div className="row justify-center pt-lg-4 text-center">
        <div className="col-lg-5 col-md-7 col-sm-9">
          <img
            className="d-block mx-auto mb-5"
            src="/img/pages/404.png"
            width="340"
            alt="404 Error"
          />
          <h1 className="h3">404 error</h1>
          <h3 className="h5 fw-normal mb-4">
            We can&#39;t seem to find the page you are looking for.
          </h3>
          <p className="fs-md mb-4">
            <u>Here are some helpful links instead:</u>
          </p>
        </div>
      </div>
      <div className="row justify-center">
        <div className="col-xl-8 col-lg-10">
          <div className="row">
            <div className="col-sm-4 mb-3">
              <Link href="/" passHref>
                <a className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <div className="flex items-center">
                      <i className="ci-home text-primary h4 mb-0"></i>
                      <div className="ps-3">
                        <h5 className="fs-sm mb-0">Homepage</h5>
                        <span className="text-muted fs-ms">
                          Return to homepage
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-sm-4 mb-3">
              <a className="card h-100 border-0 shadow-sm" href="#">
                <div className="card-body">
                  <div className="flex items-center">
                    <i className="ci-search text-success h4 mb-0"></i>
                    <div className="ps-3">
                      <h5 className="fs-sm mb-0">Search</h5>
                      <span className="text-muted fs-ms">
                        Find with advanced search
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-4 mb-3">
              <Link href="/help-topics" passHref>
                <a className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <div className="flex items-center">
                      <i className="ci-help text-info h4 mb-0"></i>
                      <div className="ps-3">
                        <h5 className="fs-sm mb-0">Help &amp; Support</h5>
                        <span className="text-muted fs-ms">
                          Visit our help center
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
