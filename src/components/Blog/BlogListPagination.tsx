import { PaginationProps } from "@/types";

export default function BlogListPagination({ pagination }: PaginationProps) {
  return (
    <nav
      className="flex justify-content-between pt-2"
      aria-label="page-navigation"
    >
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#">
            <i className="ci-arrow-left me-2"></i>
            Prev
          </a>
        </li>
      </ul>
      <ul className="pagination">
        <li className="page-item d-sm-none">
          <span className="page-link page-link-static">1 / 5</span>
        </li>
        {pagination.map((paginate) =>
          paginate.active ? (
            <li
              key={paginate.count}
              className="page-item active d-none d-sm-block"
              aria-current="page"
            >
              <span className="page-link">
                {paginate.count}
                <span className="visually-hidden">(current)</span>
              </span>
            </li>
          ) : (
            <li key={paginate.count} className="page-item d-none d-sm-block">
              <a className="page-link" href="#">
                {paginate.count}
              </a>
            </li>
          )
        )}
      </ul>
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="next">
            Next
            <i className="ci-arrow-right ms-2"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}
