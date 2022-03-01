import contactData from "@/json/contact-us.json";

export default function ContactusCard() {
  return (
    <section className="container-fluid pt-grid-gutter">
      <div className="row">
        {contactData.info.map((content) => {
          return content.anchor ? (
            <div
              key={content.icon}
              className="col-xl-3 col-sm-6 mb-grid-gutter"
            >
              <a className="card h-100" href={content.anchor} data-scroll>
                <div className="card-body text-center">
                  <i
                    className={`${content.icon} h3 mt-2 mb-4 text-primary`}
                  ></i>
                  <h3 className="h6 mb-2">{content.title}</h3>
                  <p className="fs-sm text-muted">{content.group.text1}</p>
                  <div className="fs-sm text-primary">
                    Click to see map
                    <i className="ci-arrow-right align-middle ms-1"></i>
                  </div>
                </div>
              </a>
            </div>
          ) : (
            <div
              key={content.icon}
              className="col-xl-3 col-sm-6 mb-grid-gutter"
            >
              <div className="card h-100">
                <div className="card-body text-center">
                  <i
                    className={`${content.icon}  h3 mt-2 mb-4 text-primary`}
                  ></i>
                  <h3 className="h6 mb-3">{content.title}</h3>
                  <ul className="list-unstyled fs-sm text-muted mb-0">
                    {content.group.phoneNumber1 && (
                      <li>
                        <span className="text-muted me-1">
                          {content.group.text1}
                        </span>
                        <a
                          className="nav-link-style"
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
                        <span className="text-muted me-1">
                          {content.group.text2}
                        </span>
                        <a
                          className="nav-link-style"
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
                        <span className="text-muted me-1">
                          {content.group.text1}:
                        </span>
                        <a
                          className="nav-link-style"
                          href={`mailto:${content.group.email1}`}
                        >
                          {content.group.email1}
                        </a>
                      </li>
                    )}
                    {content.group.email1 && (
                      <li className="mb-0">
                        <span className="text-muted me-1">
                          {content.group.text2}:
                        </span>
                        <a
                          className="nav-link-style"
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
      </div>
    </section>
  );
}
