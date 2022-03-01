import { useMemo } from "react";
import ContentLoader from "react-content-loader";

import useMediaQuery from "@/hooks/useMediaQuery";

export function Loader(props: any) {
  const loaderStyle = useMemo(() => ({ width: "100%" }), []);

  return (
    <ContentLoader
      speed={2}
      viewBox="0 0 250 250"
      style={loaderStyle}
      backgroundColor="#e3d9d9"
      foregroundColor="#ada4a4"
      title="loading product..."
      animate
      {...props}
    >
      <rect x="0" y="0%" rx="5px" ry="5px" width="100%" height="90%" />
    </ContentLoader>
  );
}

export default function ShopLoader() {
  const loaderArray = new Array(9).fill(0);
  const tabWidth = useMediaQuery("(max-width:768px)");
  const mobileWidth = useMediaQuery("(max-width:500px)");

  const mobileStyle = mobileWidth ? "col-12" : tabWidth ? "col-2" : "col-4";

  return (
    <div className="row mt-5">
      {loaderArray.map((_, index: number) => (
        <div key={index} className={mobileStyle}>
          <Loader />
        </div>
      ))}
    </div>
  );
}
