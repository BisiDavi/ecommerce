import { Dropdown } from "react-bootstrap";
import { connectSortBy } from "react-instantsearch-dom";

const SortBy = ({ items, refine, createURL }: any) => {
  function onClickHandler(e: any, item: any) {
    e.preventDefault();
    refine(item.value);
    createURL(item.value);
  }

  return (
    <Dropdown className="dropdown flex items-center flex-nowrap me-3 me-sm-4 pb-3">
      <Dropdown.Toggle
        className="btn btn-light dropdown-toggle text-light fs-sm me-2  d-sm-block"
        id="sort-by-dropdown"
      >
        Sort by
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu">
        {items.map((item: any) => {
          const dropdownClassName = item.isRefined ? "font-bold" : "fst-normal";
          return (
            <Dropdown.Item
              key={item.value}
              className={`dropdown-item ${dropdownClassName}`}
              onClick={(e) => onClickHandler(e, item)}
            >
              {item.label}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const AlgoliaSortby = connectSortBy(SortBy);

export default AlgoliaSortby;
