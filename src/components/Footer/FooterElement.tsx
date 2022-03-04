import Link from "next/link";

function FooterWidgetLink({
  groupedContent,
  onClickHandler,
  productType,
}: any) {
  const slug = (contentLink: any) =>
    productType
      ? `/shop/product-type/${contentLink.slug}`
      : `/${contentLink.slug}`;

  const onClickFunc = productType
    ? (contentLink: any) => onClickHandler(contentLink.name)
    : (contentLink: any) => onClickHandler(contentLink);
  return (
    <div className="pb-2 mb-4">
      <h3 className="text-gray-300 text-xl font-bold">{groupedContent.name}</h3>
      <ul className="text-gray-400 ">
        {groupedContent.links.map((contentLink: any, index: number) => (
          <li key={index} className="widget-list-item">
            <Link href={slug(contentLink)} passHref>
              <a
                onClick={onClickFunc}
                className="widget-list-link hover:text-white"
              >
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
    <div className="w-1/3">
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
