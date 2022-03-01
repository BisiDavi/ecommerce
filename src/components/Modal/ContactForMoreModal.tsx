/* eslint-disable @next/next/no-img-element */
import { Dispatch, SetStateAction, useState } from "react";
// import { Modal } from "react-bootstrap";

import { modalType } from "@/types";
import ContactForMoreForm from "@/components/Form/ContactForMoreForm";

interface Props extends modalType {
  productName: string;
}

export default function ContactForMoreModal({
  show,
  onHide,
  productName,
}: Props) {
  const [stage, setStage] = useState(0);

  function onClose() {
    setStage(0);
    onHide();
  }

  return (
    <Modal show={show} onHide={onClose} role="dialog">
      <Modal.Header
        className="bg-secondary border-0"
        closeButton
      ></Modal.Header>
      <div className="flex title flex-col m-auto">
        <h4 className="text-center mb-0">Larger Order Enquiry</h4>
        <p className="mb-0 text-center">for</p>
        <h4 className="text-center mb-0">{productName}</h4>
      </div>
      <Modal.Body className="mb-5">
        {displayFormContent(stage, setStage)}
      </Modal.Body>
    </Modal>
  );
}

function ContactMessage() {
  return (
    <div className="flex m-auto text-center flex-col mb-3">
      <div className="text">
        <p className="mb-0">Thank you for your message.</p>
        <p>We will be in touch with you shortly.</p>
      </div>
      <div className="icon mt-5">
        <img src="/img/check-mark-verified.gif" alt="message sent" />
      </div>
    </div>
  );
}

function displayFormContent(
  stage: number,
  setStage: Dispatch<SetStateAction<number>>
) {
  switch (stage) {
    case 0: {
      return <ContactForMoreForm setStage={setStage} />;
    }
    case 1: {
      return <ContactMessage />;
    }
  }
}
