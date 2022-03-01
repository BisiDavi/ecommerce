import { GiPadlock } from "react-icons/gi";
import { BiLogIn } from "react-icons/bi";

import Modal from "@/components/Modal";
import Tabs from "@/components/Tabs";
import SignupForm from "@/components/Form/SignupForm";
import SigninForm from "@/components/Form/SigninForm";

interface Props {
  show: boolean;
  onHide: () => void;
}

export default function AuthModal({ show, onHide }: Props) {
  const tabTitles = ["Signup", "Sign in"];

  return (
    <Modal modal={show} modalHandler={onHide}>
      <Tabs
        numberOfTabs={2}
        tabTitles={tabTitles}
        tabContent1={<SignupForm />}
        tabContent2={<SigninForm />}
        color="red"
        icon1={<GiPadlock className="mx-1" />}
        icon2={<BiLogIn className="mx-1" />}
      />
    </Modal>
  );
}
