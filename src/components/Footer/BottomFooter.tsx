import {
  FooterBottomFeatures,
  FooterBottomSocials,
  FooterBottomWidgets,
} from "@/components/Footer/FooterBottomElement";

export default function BottomFooter() {
  return (
    <div className="w-full bg-gray-700 h-60">
      <div className="footerBottom pt-5">
        <div className="container">
          <FooterBottomFeatures />
          <hr className="hr-light mb-5" />
          <div className="row pb-2">
            <FooterBottomWidgets />
            <FooterBottomSocials />
          </div>
          <div className="pb-4 fs-xs text-light opacity-50 text-center text-md-start">
            © All rights reserved. Made by{" "}
            <a className="text-light" href="#" target="_blank" rel="noreferrer">
              Bandicoot Studio
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footerBottom {
            background-color: #2b3445;
          }
        `}
      </style>
    </div>
  );
}
