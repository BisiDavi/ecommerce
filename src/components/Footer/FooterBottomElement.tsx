import dynamic from "next/dynamic";
import Image from "@/components/Image";
import footerBottomContent from "@/json/footer-bottom.json";
import Logo from "@/components/Logo";
import Icons from "@/components/Icons";

const CurrencyDropdown = dynamic(
  () => import("@/components/Dropdown/CurrencyDropdown")
);

export function FooterBottomSocials() {
  return (
    <div className="w-1/5 flex flex-col items-cemter">
      <div className="mb-3 w-2/3 flex items-center justify-between">
        {footerBottomContent.social.map((data, index) => (
          <a key={`${data.name}-${index}`} href={data.link}>
            <Icons
              icon={data.name}
              className="hover:text-red-500 text-white"
              size={25}
            />
          </a>
        ))}
      </div>
      <div className="imgContainer mb-4">
        <Image
          className="d-inline-block"
          src="/cards-alt.webp"
          width={200}
          height={35}
          alt="Payment methods"
        />
      </div>
      <style jsx>{`
        @media (min-width: 768px) {
          .imgContainer {
            float: right;
          }
        }
        @media (max-width: 768px) {
          .imgContainer {
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}

export function FooterBottomWidgets() {
  return (
    <>
      <div className="flex flex-col w-2/5">
        <div className="flex items-center mb-4 w-full">
          <Logo />
          <CurrencyDropdown />
        </div>
        <p className="text-gray-400 leading-loose text-sm">
          Sailfish eCommerce Limited is a Hong Kong registered company. Launched
          in 2016, we have fulfilled thousands of orders and remain the
          preferred choice of Hong Kongers for importing high-quality Australian
          goods.
        </p>
        <ul className="flex flex-wrap my-2">
          {footerBottomContent.pageLinks.map((content) => (
            <li
              key={content.name}
              className="mr-4 text-gray-400 text-sm hover:text-red-500"
            >
              <a href={content.link}>{content.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function FooterBottomFeatures() {
  return (
    <div className="flex justify-center  text-white py-6">
      {footerBottomContent.features.map((content) => (
        <div key={content.title} className="w-1/4">
          <div className="flex">
            <Icons
              className="text-red-500 hover:text-red-300 mr-4"
              icon={content.icon}
              size={30}
            />
            <div className="ps-3">
              <h6 className="fs-base text-white mb-1">{content.title}</h6>
              <p className="mb-0 text-gray-400 text-sm">{content.text}</p>
            </div>
          </div>
        </div>
      ))}
      <style jsx>{`
        .icon-text:hover i {
          transition: 0.9s;
          transform: rotateY(180deg);
        }
        .text-primary.content-icon {
          font-size: 2.25rem;
        }
      `}</style>
    </div>
  );
}
