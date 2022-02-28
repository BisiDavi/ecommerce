export default function Footernewsletter() {
  return (
    <div className="col-md-4">
      <div className="widget pb-2 mb-4">
        <h3 className="widget-title text-light pb-1">Stay informed</h3>
        <div className="subscription-form validate">
          <div className="input-group flex-nowrap">
            <i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
            <input
              className="form-control rounded-start"
              type="email"
              name="EMAIL"
              placeholder="Your email"
              required
            />
            <button
              aria-label="Subscribe to Newsletter"
              className="btn btn-primary"
              type="submit"
              name="subscribe"
            >
              Subscribe*
            </button>
          </div>
          <div className="form-text text-light opacity-50">
            *Subscribe to our newsletter to receive early discount offers,
            updates and new products info.
          </div>
          <div className="subscription-status"></div>
        </div>
      </div>
      <div className="widget pb-2 mb-4">
        <h3 className="widget-title text-light pb-1">Download our app</h3>
        <div className="d-flex flex-wrap">
          <div className="me-2 mb-2">
            <a className="btn-market btn-apple" href="#" role="button">
              <span className="btn-market-subtitle">Download on the</span>
              <span className="btn-market-title">App Store</span>
            </a>
          </div>
          <div className="mb-2">
            <a className="btn-market btn-google" href="#" role="button">
              <span className="btn-market-subtitle">Download on the</span>
              <span className="btn-market-title">Google Play</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
