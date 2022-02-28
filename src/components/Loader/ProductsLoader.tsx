import ContentLoader from "react-content-loader";

import useMediaQuery from "@/hooks/useMediaQuery";

export function ProductLoader(props: any) {
  return (
    <ContentLoader
      speed={2}
      viewBox="0 0 250 250"
      className="mx-4"
      backgroundColor="#e3d9d9"
      foregroundColor="#ada4a4"
      title="loading product..."
      animate
      {...props}
    >
      <rect x="0%" y="5%" rx="3" ry="3" width="20%" height="7%" />
      <rect x="88%" y="0%" rx="100" ry="100" width="12%" height="12%" />
      <rect x="0" y="15%" rx="0" ry="0" width="100%" height="50%" />
      <rect x="0" y="70%" rx="0" ry="0" width="100%" height="5%" />
      <rect x="0" y="80%" rx="0" ry="0" width="100%" height="5%" />
    </ContentLoader>
  );
}

export default function LoadProducts() {
  const tabWidth = useMediaQuery("(max-width:768px)");
  const mediumTabWidth = useMediaQuery("(max-width:700px)");
  const mobileWidth = useMediaQuery("(max-width:500px)");

  const mobileStyle = mobileWidth
    ? "w-full"
    : mediumTabWidth
    ? "w-1/2 mx-2"
    : tabWidth
    ? "w-1/3 mx-2"
    : "w-1/4";

  const productsArray = new Array(8).fill(0);
  return (
    <div className="flex flex-wrap mt-4">
      {productsArray.map((_, index: number) => (
        <div key={index} className={mobileStyle}>
          <ProductLoader />
        </div>
      ))}
    </div>
  );
}
