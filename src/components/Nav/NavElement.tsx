import dynamic from "next/dynamic";
import FormattedPrice from "@/lib/formatPrice";
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import Tooltip from "@/components/Tooltip";
import { useState } from "react";

const HeaderCartDropdown = dynamic(
  () => import("@/components/Dropdown/CartDropdown")
);

interface AuthorizedViewProps {
  toggleAuthModalHandler: () => void;
}

export function NavToggler() {
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        aria-label="nav-bar"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <AiOutlineMenu className="hidden" />
      </button>
      <a className="navbar-tool navbar-stuck-toggler ms-5" href="#">
        <Tooltip text="Expand menu">
          <AiOutlineMenu />
        </Tooltip>
      </a>
    </>
  );
}

export function NotAuthorizedView({
  toggleAuthModalHandler,
}: AuthorizedViewProps) {
  return (
    <>
      <a
        className="flex items-center mx-4"
        href="#"
        onClick={toggleAuthModalHandler}
      >
        <AiOutlineUser fontSize={24} className="mr-2" />
        <Tooltip text="Sign-in / Sign-up ">
          <div className="navbar-tool-text flex flex-col me-2 items-start">
            <span className="text-xs">Hello, Sign in</span>
            <h6 className="text-base">My Account</h6>
          </div>
        </Tooltip>
      </a>
      <style jsx>
        {`
          .navbar-tool-text {
            display: flex;
            align-items: center;
            padding-left: 0px;
          }
        `}
      </style>
    </>
  );
}

interface authorizedViewProps {
  userLogout: () => void;
  userDetail: {
    firstName: string;
    lastName: string;
  };
}

export function AuthorizedView({
  userLogout,
  userDetail,
}: authorizedViewProps) {
  return (
    <div className="flex items-center ms-5 me-0">
      <AiOutlineUser />
      <div className="text flex flex-col">
        <a className="navbar-tool cursor-pointer ms-1 me-n1 me-lg-2">
          <span className="navbar-tool-tooltip">
            Welcome {userDetail.firstName}
          </span>
          <div className="navbar-tool-text ms-n3">
            <div className="flex flex-col me-3">
              <span>Hello,</span>{" "}
              <span className="fs-sm text-accent font-bold">
                {`${userDetail.lastName} ${userDetail.firstName}`}{" "}
              </span>
            </div>
          </div>
        </a>
        <a
          onClick={userLogout}
          href="#"
          className="navbar-tool logout-user cursor-pointer ms-1 me-n1 me-lg-2"
        >
          <span className="navbar-tool-tooltip">Logout</span>
          <p className="logout mb-0 fs-xs">Logout</p>
        </a>
      </div>
      <style jsx>{`
        .logout-user p:hover {
          color: red;
        }
      `}</style>
    </div>
  );
}

interface NavbarDropdownProps {
  toggleSlideCartMobile: () => void;
  cart:
    | {
        items: any[];
        grandTotal: number;
      }
    | any;
}

export function NavbarDropdown({
  toggleSlideCartMobile,
  cart,
}: NavbarDropdownProps) {
  const [dropdownStatus, setDropdownStatus] = useState(false);

  function onClickHandler() {
    setDropdownStatus(!dropdownStatus);
  }
  return (
    <>
      <div
        onClick={onClickHandler}
        className="bg-gray-50 hover:bg-gray-100 shadow-lg cursor-pointer rounded-lg p-4 ms-1 flex items-center"
      >
        <div className="flex flex-col relative">
          <div
            onClick={toggleSlideCartMobile}
            className="absolute justify-center bg-red-200 rounded-full h-6 w-6 -mt-8 mr-4 flex items-center"
          >
            {cart?.items?.length > 0 && (
              <span className="text-white">{cart?.items?.length}</span>
            )}
          </div>
          <BsCart4 fontSize={24} />
        </div>
        <div className="flex price-overview flex-col">
          <span className="text-xs">My Cart</span>
          <a className="navbar-tool-text">
            {cart?.grandTotal ? (
              <FormattedPrice price={cart?.grandTotal} />
            ) : (
              <FormattedPrice price={0} />
            )}
          </a>
        </div>
        {dropdownStatus && cart?.items.length > 0 && (
          <HeaderCartDropdown cart={cart} />
        )}
      </div>
      <style jsx>
        {`
          .price-overview {
            width: 90px;
            margin-left: 20px;
          }
        `}
      </style>
    </>
  );
}
