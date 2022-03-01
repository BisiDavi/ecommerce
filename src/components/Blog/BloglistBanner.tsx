import Link from "next/link";

export default function BloglistBanner() {
  return (
    <div className="bg-secondary py-4">
      <div className="container d-lg-flex justify-between py-2 py-lg-3">
        <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb flex-lg-nowrap justify-center justify-content-lg-start">
              <li className="breadcrumb-item">
                <Link href="/" passHref>
                  <a className="text-nowrap">Home</a>
                </Link>
              </li>
              <li className="breadcrumb-item text-nowrap">
                <Link href="/blog" passHref>
                  <a className="text-nowrap">Blog</a>
                </Link>
              </li>
              <li
                className="breadcrumb-item text-nowrap active"
                aria-current="page"
              >
                List with sidebar
              </li>
            </ol>
          </nav>
        </div>
        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
          <h1 className="h3 mb-0">Blog list with sidebar</h1>
        </div>
      </div>
    </div>
  );
}
