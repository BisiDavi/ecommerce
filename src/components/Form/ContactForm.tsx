import contactFormData from "@/json/contact-us-form.json";

export default function ContactForm() {
  return (
    <div className="col-lg-6 px-4 px-xl-5 py-5 border-top">
      <h2 className="h4 mb-4">Drop us a line</h2>
      <form className="needs-validation mb-3" noValidate>
        <div className="row g-3">
          {contactFormData.map((input) =>
            input.type === "input" ? (
              <div className="col-sm-6">
                <label className="form-label" htmlFor="cf-name">
                  {input.label}:&nbsp;
                  <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="cf-name"
                  placeholder={input.placeholder}
                  required
                />
                <div className="invalid-feedback">Please fill in you name!</div>
              </div>
            ) : (
              <div className="col-12">
                <label className="form-label" htmlFor="cf-message">
                  {input.label}:&nbsp;
                  <span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control"
                  id="cf-message"
                  rows={6}
                  placeholder={input.placeholder}
                  required
                ></textarea>
                <div className="invalid-feedback">Please write a message!</div>
                <button
                  aria-label="Send Message"
                  className="btn btn-primary mt-4"
                  type="submit"
                >
                  Send message
                </button>
              </div>
            )
          )}
        </div>
      </form>
    </div>
  );
}
