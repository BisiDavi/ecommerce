import { useState } from "react";
import Modal from "@/components/Modal";
import { useRouter } from "next/router";

import Image from "@/components/Image";
import { useAppDispatch } from "@/hooks/useRedux";
import { toggleAuthModal } from "@/redux/ui-slice";
import useModal from "@/hooks/useModal";

export default function ExistingUserNotificationModal({ show, onHide, data }) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  function forgotPassword() {
    onHide();
    router.push("/account-password-recovery");
  }

  function loginHandler() {
    onHide();
    dispatch(toggleAuthModal());
  }

  return (
    <Modal
      modal={show}
      modalHandler={onHide}
      title="A user exist with this email"
    >
      <div className="d-flex align-items-center mx-auto justify-content-center mb-1">
        <h6 className="text-center mb-0 me-1">
          Hello, thanks for shopping with us
        </h6>
        <Image
          src="/shopping-bag.png"
          alt="shopping bag"
          height={40}
          width={40}
          loading="lazy"
        />
      </div>
      <h6 className="text-center">
        A user with the email address{" "}
        <span className="text-decoration-underline fw-bold">{data} </span>{" "}
        already exist
      </h6>
      <p className="text-center">
        Please
        <a
          onClick={loginHandler}
          className="btn-link fw-bold text-decoration-underline ms-1 me-1 cursor-pointer"
        >
          login
        </a>
        with this email to continue with your payment
      </p>
      <p className="text-center">
        <a
          onClick={forgotPassword}
          className="btn-link fw-bold text-decoration-underline cursor-pointer"
        >
          Forgot password ?
        </a>
      </p>
    </Modal>
  );
}
