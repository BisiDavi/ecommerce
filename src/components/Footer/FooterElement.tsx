import Link from "next/link";

function FooterWidgetLink({
  groupedContent,
  onClickHandler,
  productType,
}: any) {
  const slug = (contentLink: any) =>
    productType
      ? `/collections/product-type/${contentLink.slug}`
      : `/${contentLink.slug}`;

  const onClickFunc = productType
    ? (contentLink: any) => onClickHandler(contentLink.name)
    : (contentLink: any) => onClickHandler(contentLink);
  return (
    <div className="widget widget-links widget-light pb-2 mb-4">
      <h3 className="widget-title text-light">{groupedContent.name}</h3>
      <ul className="widget-list">
        {groupedContent.links.map((contentLink: any, index: number) => (
          <li key={index} className="widget-list-item">
            <Link href={slug(contentLink)} passHref>
              <a onClick={onClickFunc} className="widget-list-link">
                {contentLink.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FooterLink({ content, multiple, onClickHandler }: any) {
  return (
    <div className="col-md-4 col-sm-6">
      {multiple ? (
        content.group.map((groupedContent: any, index: number) => (
          <FooterWidgetLink
            key={index}
            groupedContent={groupedContent}
            onClick={onClickHandler}
          />
        ))
      ) : (
        <FooterWidgetLink
          groupedContent={content}
          productType
          onClick={onClickHandler}
        />
      )}
    </div>
  );
}
