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
    content.imgPosition === "left" ? "md:order-1" : "md:order-2";
  const textOrder =
    content.imgPosition === "left" ? "md:order-2" : "md:order-1";

  return (
    <section className="flex items-center">
      <div className={`about-us-bg w-1/2 bg-position-center ${imageOrder}`}>
        <img src={content.image} />
      </div>
      <div className={`w-1/2 py-5 px-24 ${textOrder}`}>
        <div className="content-text mx-auto lg:py-5">
          <h2 className="text-2xl font-medium pb-3">{content.title}</h2>
          <p className="pb-3 text-lg">{content.text}</p>
          {content.buttons?.map((button) => (
            <Link key={button.color} href={button.link} passHref>
              <button
                className={`btn p-2 px-4 rounded-md h-10 text-white ${button.color} shadow-lg`}
              >
                {button.text}
              </button>
            </Link>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .btn-red {
            background-color: #fe696a;
          }
          button.btn:hover {
            opacity: 0.8;
          }
          .btn-blue {
            background-color: #4e54c8;
          }
          .btn-yellow {
            background-color: #fea569;
          }
        `}
      </style>
    </section>
  );
}
