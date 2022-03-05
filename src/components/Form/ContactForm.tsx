import contactFormData from "@/json/contact-us-form.json";

export default function ContactForm() {
  return (
    <div className="w-1/2 px-4 xl:px-5 py-5 border-t-2 border-gray-100">
      <h2 className="text-xl mb-4">Drop us a line</h2>
      <form className="needs-validation mb-3" noValidate>
        <div className="flex flex-wrap">
          {contactFormData.map((input) =>
            input.type === "input" ? (
              <div className="w-1/2 flex flex-col items-start px-2">
                <label className="text-md my-1" htmlFor="cf-name">
                  {input.label}:&nbsp;
                  <span className="text-danger">*</span>
                </label>
                <input
                  className="border-2 border-gray-200 rounded-md p-1 px-4 w-full"
                  type="text"
                  id="cf-name"
                  placeholder={input.placeholder}
                  required
                />
              </div>
            ) : (
              <div className="w-full flex flex-col items px-2">
                <label className="text-md my-1" htmlFor="cf-message">
                  {input.label}:&nbsp;
                  <span className="text-danger">*</span>
                </label>
                <textarea
                  className="border-2 border-gray-200 rounded-md p-1 px-4 w-full"
                  id="cf-message"
                  rows={6}
                  placeholder={input.placeholder}
                  required
                ></textarea>
                <button
                  aria-label="Send Message"
                  className="border-2 bg-red-500 text-white w-32 p-1 px-2 rounded-md hover:border-red-500 hover:bg-white hover:text-red-500 mt-4"
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
