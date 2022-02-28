import dynamic from "next/dynamic";

import BottomFooter from "@/components/Footer/BottomFooter";
import TopFooter from "@/components/Footer/TopFooter";
import useMediaQuery from "@/hooks/useMediaQuery";

const BottomTab = dynamic(() => import("@/components/Tabs/BottomMenuTab"));

export default function Footer() {
  const tabWidth = useMediaQuery("(max-width:768px)");

  return (
    <footer className="w-full">
      <TopFooter />
      <BottomFooter />
      {tabWidth ? <BottomTab /> : null}
    </footer>
  );
}
