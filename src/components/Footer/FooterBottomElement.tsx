import dynamic from "next/dynamic";
import Image from "@/components/Image";
import footerBottomContent from "@/json/footer-bottom.json";
import Logo from "@/components/Logo";

const CurrencyDropdown = dynamic(
  () => import("@/components/Dropdown/CurrencyDropdown")
);

export function FooterBottomSocials() {
  return (
    <div className="col-md-6 text-center text-md-end mb-4">
      <div className="mb-3">
        {footerBottomContent.social.map((data, index) => (
          <a
            key={`${data.name}-${index}`}
            className={`btn-social bs-light bs-${data.name} ms-2 mb-2`}
            href={data.link}
          >
            <i className={`ci-${data.name}`}></i>
          </a>
        ))}
      </div>
      <div className="imgContainer">
        <Image
          className="d-inline-block"
          src="/img/cards-alt.webp"
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
    <div className="col-md-6 text-center text-md-start mb-4">
      <div className="text-nowrap mb-4 d-flex align-items-center">
        <Logo />
        <CurrencyDropdown position="bottom" />
      </div>
      <div className="site-description">
        <p className="text-light">
          Sailfish eCommerce Limited is a Hong Kong registered company. Launched
          in 2016, we have fulfilled thousands of orders and remain the
          preferred choice of Hong Kongers for importing high-quality Australian
          goods.
        </p>
      </div>
      <div className="widget widget-links widget-light">
        <ul className="widget-list d-flex flex-wrap justify-content-center justify-content-md-start flex-row flex-column-sm">
          {footerBottomContent.pageLinks.map((content) => (
            <li key={content.name} className="widget-list-item me-4">
              <a className="widget-list-link" href={content.link}>
                {content.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .site-description {
          font-size: 13px;
        }
      `}</style>
    </div>
  );
}

export function FooterBottomFeatures() {
  return (
    <div className="row pb-3">
      {footerBottomContent.features.map((content) => (
        <div key={content.title} className="col-md-3 col-sm-6 mb-4 icon-text">
          <div className="d-flex">
            <i className={`${content.icon} text-primary content-icon`}></i>
            <div className="ps-3">
              <h6 className="fs-base text-light mb-1">{content.title}</h6>
              <p className="mb-0 fs-ms text-light opacity-50">{content.text}</p>
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
