import Link from "next/link";

interface contentProps {
  content: {
    image: string;
    title: string;
    text: string;
    imgPosition: string;
    buttons?: {
      text: string;
      link: string;
      color: string;
    }[];
    imgLinks?: string[];
  };
}

export default function Aboutus({ content }: contentProps) {
  const imageOrder =
    content.imgPosition === "left" ? "order-md-1" : "order-md-2";
  const textOrder =
    content.imgPosition === "left" ? "order-md-2" : "order-md-1";

  return (
    <section className="row g-0">
      <div
        className={`about-us-bg col-md-6 bg-position-center bg-size-cover bg-secondary ${imageOrder}`}
      ></div>
      <div className={`col-md-6 px-3 px-md-5 py-5 ${textOrder}`}>
        <div className="content-text mx-auto py-lg-5">
          <h2 className="h3 pb-3">{content.title}</h2>
          <p className="fs-sm pb-3 text-muted">{content.text}</p>
          {content.buttons?.map((button) => (
            <Link key={button.color} href={button.link} passHref>
              <a className={`btn ${button.color} btn-shadow`}>{button.text}</a>
            </Link>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .about-us-bg {
            min-height: 15rem;
            background-image: url(${content.image});
          }
          .content-text {
            max-width: 35rem;
          }
        `}
      </style>
    </section>
  );
}
