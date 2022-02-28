import {
  FooterBottomFeatures,
  FooterBottomSocials,
  FooterBottomWidgets,
} from "@/components/Footer/FooterBottomElement";

export default function BottomFooter() {
  return (
    <div className="w-full bg-gray-800 py-6">
      <div className="container flex flex-col m-auto justify-center">
        <FooterBottomFeatures />
        <hr className="hr-light mb-5" />
        <div className="flex items-center justify-between">
          <FooterBottomWidgets />
          <FooterBottomSocials />
        </div>
        <div className="pb-4 text-gray-400 text-xs">
          © All rights reserved. Made by{" "}
          <a className="text-red-500" href="#" target="_blank" rel="noreferrer">
            Bandicoot Studio
          </a>
        </div>
      </div>
    </div>
  );
}
