export default function Footernewsletter() {
  return (
    <div className="w-1/3">
      <div className=" pb-2 mb-4">
        <h3 className="text-xl text-gray-300 font-bold">Stay informed</h3>
        <div className="subscription-form validate flex flex-col">
          <div className="input-group flex-nowrap my-2">
            <i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
            <input
              className="form-control rounded-l-full p-2 border-0"
              type="email"
              name="EMAIL"
              placeholder="Your email"
              required
            />
            <button
              aria-label="Subscribe to Newsletter"
              className="bg-red-500 hover:bg-red-700 p-2 px-4 border-0 rounded-r-full text-white font-bold"
              type="submit"
              name="subscribe"
            >
              Subscribe
            </button>
          </div>
          <div className="form-text text-gray-200 mt-1">
            *Subscribe to our newsletter to receive early discount offers,
            updates and new products info.
          </div>
          <div className="subscription-status"></div>
        </div>
      </div>
    </div>
  );
}
