import { IoTimeOutline } from "react-icons/io5";
import { GrLocation, GrMailOption } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";

interface Props {
  icon: string;
  className: string;
  size: number;
}

export default function DisplayContactIcon({ icon, className, size }: Props) {
  switch (icon) {
    case "location":
      return <GrLocation size={size} className={className} />;
    case "phone":
      return <FiPhoneCall size={size} className={className} />;
    case "mail":
      return <GrMailOption size={size} className={className} />;
    case "time":
      return <IoTimeOutline size={size} className={className} />;
    default:
      return null;
  }
}
