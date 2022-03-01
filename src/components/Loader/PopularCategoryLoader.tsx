import useMediaQuery from "@/hooks/useMediaQuery";
import { useMemo } from "react";
import ContentLoader from "react-content-loader";

function PopularCategoryLoader(props: any) {
  const loaderStyle = useMemo(() => ({ width: "100%" }), []);
  const mobileView = useMediaQuery("(max-width:768px)");

  const contentLoaderSize = mobileView
    ? { height: 350, width: 400 }
    : { height: 200, width: 200 };

  const viewBox = mobileView ? "0 0 100 100" : "0 0 200 150";

  const loaderSize = mobileView
    ? {
        first: { x: 10, y: 90, rx: 3, ry: 3, width: "80%", height: 6 },
        second: { x: 0, y: 0, rx: 0, ry: 0, width: "100%", height: "85%" },
      }
    : {
        first: { x: 48, y: 125, rx: 3, ry: 3, width: "60%", height: 6 },
        second: { x: 10, y: 0, rx: 0, ry: 0, width: "100%", height: "80%" },
      };
  const { first, second } = loaderSize;
  const { height, width } = contentLoaderSize;

  return (
    <ContentLoader
      speed={2}
      width={width}
      height={height}
      viewBox={viewBox}
      style={loaderStyle}
      backgroundColor="#b5a6a6"
      foregroundColor="#ecebeb"
      className="w-full md:w-1/3"
      {...props}
    >
      <rect
        x={first.x}
        y={first.y}
        rx={first.rx}
        ry={first.ry}
        width={first.width}
        height={first.height}
      />
      <rect
        x={second.x}
        y={second.y}
        rx={second.rx}
        ry={second.ry}
        width={second.width}
        height={second.height}
      />
    </ContentLoader>
  );
}

export default function LoadingPopularCategory() {
  const newPopularCategories = new Array(3).fill(0);

  return (
    <div className="flex flex-col w-full md:flex-row items-center justify-center">
      {newPopularCategories.map((category, index) => (
        <PopularCategoryLoader key={index} />
      ))}
    </div>
  );
}
