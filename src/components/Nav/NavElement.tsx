import dynamic from "next/dynamic";
import FormattedPrice from "@/lib/formatPrice";
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import Tooltip from "@/components/Tooltip";

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
        <AiOutlineUser fontSize={20} className="mr-2" />
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
    <div className="d-flex items-center ms-5 me-0">
      <AiOutlineUser />
      <div className="text d-flex flex-column">
        <a className="navbar-tool cursor-pointer ms-1 me-n1 me-lg-2">
          <span className="navbar-tool-tooltip">
            Welcome {userDetail.firstName}
          </span>
          <div className="navbar-tool-text ms-n3">
            <div className="d-flex flex-column me-3">
              <span>Hello,</span>{" "}
              <span className="fs-sm text-accent fw-bold">
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
  return (
    <>
      <div className="dropdown ms-1 flex items-center">
        <div onClick={toggleSlideCartMobile} className="cart-counter">
          {cart?.items?.length > 0 && (
            <span className="navbar-tool-label">{cart?.items?.length}</span>
          )}
          <BsCart4 fontSize={20} />
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
        {cart?.items.length > 0 && <HeaderCartDropdown cart={cart} />}
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
