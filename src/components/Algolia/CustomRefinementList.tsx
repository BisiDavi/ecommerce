import { useAppSelector } from "@/hooks/useRedux";
import { RefinementList } from "react-instantsearch-dom";

interface Props {
  title: string;
  attribute: "vendor" | "tags";
  defaultRefinement?: string[];
}

export default function CustomRefinementList({ title, attribute }: Props) {
  const { defaultRefinement } = useAppSelector((state) => state.algolia);
  console.log("defaultRefinement", defaultRefinement);
  return (
    <>
      <h5 className="mb-2 text-xl font-medium">{title}</h5>
      {defaultRefinement && attribute === "vendor" ? (
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
