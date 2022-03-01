import { PropsWithChildren, useState } from "react";

interface Props {
  dropdownText: string | JSX.Element;
  className?: string;
}

export default function index({
  dropdownText,
  children,
  className,
}: PropsWithChildren<Props>) {
  const [active, setActive] = useState(false);

  function onClickHandler() {
    setActive(!active);
  }
  return (
    <div className="flex justify-center">
      <div>
        <div className="dropdown relative">
          <button
            onClick={onClickHandler}
            className={`${className} px-6
          py-2.5          
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          bg-red-500
          shadow-md
          border-2
          border-red-900
          hover:bg-red-700 hover:shadow-lg
          focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-red-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        `}
            type="button"
            id="dropdownMenuButton1"
            aria-expanded="false"
          >
            {dropdownText}
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-down"
              className="w-2 ml-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
              ></path>
            </svg>
          </button>
          {active && (
            <ul
              className="
          min-w-max
          absolute
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          m-0
          bg-clip-padding
          border-none
        "
              aria-labelledby="dropdownMenuButton1"
            >
              {children}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

interface DropdownItem {
  onClick: (e?: any) => void;
  className?: string;
}

export function DropdownItem({
  onClick,
  children,
  className,
}: PropsWithChildren<DropdownItem>) {
  return (
    <li>
      <a
        onClick={onClick}
        className={`
              ${className}
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            `}
        href="#"
      >
        {children}
      </a>
    </li>
  );
}
