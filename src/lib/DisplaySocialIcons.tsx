import { FaFacebook, FaInstagram, FaYoutube, FaHeadset } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";
import { RiExchangeDollarLine } from "react-icons/ri";
import { HiCreditCard } from "react-icons/hi";

interface Props {
  icon: string;
  className : string;
  size:number
}

export default function DisplaySocialIcons({ icon, className, size }: Props) {
  switch (icon) {
    case "facebook":
      return <FaFacebook size={size} className={className} />;
    case "instagram":
      return <FaInstagram size={size} className={className} />;
    case "youtube":
      return <FaYoutube size={size} className={className} />;
    case "rocket":
      return <IoRocket size={size} className={className} />;
    case "currency-exchange":
      return <RiExchangeDollarLine size={size} className={className} />;
    case "headset":
      return <FaHeadset size={size} className={className} />;
    case "creditcard":
      return <HiCreditCard size={size} className={className} />;
    default:
      return null;
  }
}
