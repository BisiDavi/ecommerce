import Icons from "@/components/Icons";
import contactData from "@/json/contact-us.json";

export default function ContactusCard() {
  return (
    <section className="flex w-full px-10">
      {contactData.info.map((content) => {
        return content.anchor ? (
          <div
            key={content.icon}
            className="md:w-1/3 w-1/2 border-2 border-gray-100 mx-2 p-6 py-12 rounded-md"
          >
            <a className="card h-100" href={content.anchor}>
              <div className="card-body text-center">
                <Icons
                  icon={content.icon}
                  className="text-center text-red-500 flex m-auto"
                  size={24}
                />
                <h3 className="text-xl mb-2">{content.title}</h3>
                <p className="text-sm text-gray-500">{content.group.text1}</p>
                <div className="text-md text-primary">
                  Click to see map
                  <i className="ci-arrow-right align-middle ms-1"></i>
                </div>
              </div>
            </a>
          </div>
        ) : (
          <div
            key={content.icon}
            className="md:w-1/3 w-1/2 border-2 border-gray-100 mx-2 p-6 py-12 rounded-md"
          >
            <div className="card h-100">
              <div className="card-body text-center">
                <Icons
                  icon={content.icon}
                  className="text-center text-red-500 flex m-auto"
                  size={24}
                />
                <h3 className="text-xl mb-3">{content.title}</h3>
                <ul className="text-md text-gray-500 mb-0">
                  {content.group.phoneNumber1 && (
                    <li>
                      <span className="text-gray-600">
                        {content.group.text1} :
                      </span>
                      <a
                        className="mx-1"
                        href={`"tel:${content.group.phoneNumber1.replace(
                          " ",
                          ""
                        )}`}
                      >
                        {content.group.phoneNumber1}
                      </a>
                    </li>
                  )}
                  {content.group.phoneNumber2 && (
                    <li>
                      <span className="text-gray-600">
                        {content.group.text2} :
                      </span>
                      <a
                        className="mx-1"
                        href={`"tel:${content.group.phoneNumber2.replace(
                          " ",
                          ""
                        )}`}
                      >
                        {content.group.phoneNumber2}
                      </a>
                    </li>
                  )}
                  {!content.group.phoneNumber1 && !content.group.email2 && (
                    <li>{content.group.text1}</li>
                  )}
                  {!content.group.phoneNumber1 && !content.group.email1 && (
                    <li className="mb-0">{content.group?.text2}</li>
                  )}
                  {content.group.email1 && (
                    <li>
                      <span className="text-gray-600">
                        {content.group.text1}:
                      </span>
                      <a
                        className="mx-1"
                        href={`mailto:${content.group.email1}`}
                      >
                        {content.group.email1}
                      </a>
                    </li>
                  )}
                  {content.group.email1 && (
                    <li className="mb-0">
                      <span className="text-gray-600">
                        {content.group.text2}:
                      </span>
                      <a
                        className="mx-1"
                        href={`mailto:${content.group.email2}`}
                      >
                        {content.group.email2}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
