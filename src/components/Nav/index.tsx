import Logo from "@/components/Logo";
import Input from "@/components/Form/Input";
import Navmenu from "@/components/Nav/Navmenu";

export default function Nav() {
  return (
    <div className="nav bg-white w-full h-20 flex items-center justify-center border-b-2 shadow-sm">
      <div className="container flex justify-between">
        <Logo />
        <Input className="w-1/2" placeholder="Search for products..." />
        <Navmenu />
      </div>
    </div>
  );
}
