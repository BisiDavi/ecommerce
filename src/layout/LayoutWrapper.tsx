import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";
import Head from "next/head";

import useCart from "@/hooks/useCart";
import useScroll from "@/hooks/useScroll";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { toggleAuthModal } from "@/redux/ui-slice";
import useModal from "@/hooks/useModal";
import displayAppModal from "@/lib/displayAppModal";
import "react-toastify/dist/ReactToastify.css";

const LayoutMetatag = dynamic(
  () => import("@/components/Metatag/LayoutMetatag")
);
const Reward = dynamic(() => import("@/components/Rewards"));
const SlideCart = dynamic(() => import("@/components/Cart/SlideCart"));
const NextNProgress = dynamic(() => import("@/components/Loader/NProgress"));
const LoadingBar = dynamic(() => import("@/components/Loader/LoadingBar"));
const SpinnerOverlay = dynamic(
  () => import("@/components/Loader/SpinnerOverlay")
);
const AuthModal = dynamic(() => import("@/components/Modal/AuthModal"));
const QuickViewModal = dynamic(
  () => import("@/components/Modal/QuickViewModal")
);

export default function LayoutWrapper({ children }: PropsWithChildren<{}>) {
  const { toggleCart } = useCart();
  const { modal, onHideModal } = useModal();
  const { scroll } = useScroll();
  const UI = useAppSelector((state) => state.UI);
  const dispatch = useAppDispatch();
  const { slideCart, loading: loadingState } = useAppSelector(
    (state) => state.UI
  );
  const { loading } = useAppSelector((state) => state.checkout);

  const showPointer = scroll > 450 ? true : false;

  function toggleAuthModalHandler() {
    dispatch(toggleAuthModal());
  }

  return (
    <div>
      <Head>
        <link
          href="https://CZT5MA7JLJ-dsn.algolia.net"
          rel="preconnect"
          crossOrigin="true"
        />
      </Head>
      <LayoutMetatag />
      <div data-aos="fade-up" id="head" />
      {slideCart && <SlideCart toggle={toggleCart} />}
      {UI?.quickViewModal?.active && (
        <QuickViewModal product={UI.quickViewModal} />
      )}
      {UI?.displayAuthModal && (
        <AuthModal onHide={toggleAuthModalHandler} show={UI.displayAuthModal} />
      )}
      {modal && displayAppModal(modal, onHideModal)}
      {loading && <SpinnerOverlay />}
      {loadingState && <LoadingBar />}
      <NextNProgress color="red" options={{ showSpinner: false }} />
      <ToastContainer />

      <div className="content position-relative h-100">{children}</div>
      <div className="position-relative sailfish-reward-widget">
        <Reward />
      </div>
      {showPointer && (
        <a
          href="#head"
          data-aos="fade-right-up"
          className="goUp position-fixed flex"
        >
          <i className="fas fa-arrow-circle-up"></i>
        </a>
      )}

      <style jsx>
        {`
          .goUp {
            font-size: 25px;
            right: 20px;
            bottom: 20px;
            z-index: 1000;
          }

          .goUp:hover {
            color: red;
            background-color: white;
          }
          .goUp:hover i {
            color: red;
          }

          .goUp i {
            position: fixed;
            right: 20px;
            z-index: 200;
            bottom: 20px;
          }
        `}
      </style>
    </div>
  );
}

// LayoutWrapper.whyDidYouRender = true;
