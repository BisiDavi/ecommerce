import TopbarSlider from "@/components/Slider/TopbarSlider";
import CurrencyDropdown from "@/components/Dropdown/CurrencyDropdown";

export default function Topbar() {
  return (
    <div className="topbar bg-gray-700 w-full h-20 text-white flex items-center justify-center">
      <div className="container flex justify-between items-center">
        <p className="support">Support 00124-567-985</p>
        <TopbarSlider />
        <CurrencyDropdown />
      </div>
    </div>
  );
}
