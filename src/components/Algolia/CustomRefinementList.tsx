import { RefinementList } from "react-instantsearch-dom";

interface Props {
  title: string;
  attribute: "vendor" | "tags";
  defaultRefinement?: string[];
}

export default function CustomRefinementList({
  title,
  attribute,
  defaultRefinement,
}: Props) {
  return (
    <>
      <h5 className="mb-2">{title}</h5>
      {defaultRefinement ? (
        <RefinementList
          searchable={true}
          attribute={attribute}
          showMoreLimit={100}
          showMore={true}
          defaultRefinement={defaultRefinement}
        />
      ) : (
        <RefinementList
          searchable={true}
          attribute={attribute}
          showMoreLimit={100}
          showMore={true}
        />
      )}
    </>
  );
}
