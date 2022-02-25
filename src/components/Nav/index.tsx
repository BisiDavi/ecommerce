import Logo from "@/components/Logo";
import Input from "@/components/Form/Input";
import Navmenu from "@/components/Nav/Navmenu";

export default function Nav() {
  return (
    <div className="nav bg-white w-full h-24 flex items-center justify-center border-b-2 shadow-sm">
      <div className="container flex justify-between items-center">
        <Logo />
        <Input
          className="w-7/12 h-12 mx-4"
          placeholder="Search for products..."
        />
        <Navmenu />
      </div>
    </div>
  );
}
