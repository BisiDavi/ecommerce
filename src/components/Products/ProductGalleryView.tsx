import Magnifier from "react-magnifier";
import dynamic from "next/dynamic";
import { useState } from "react";
const Lightbox = dynamic(() => import("react-image-lightbox"));

import { productType } from "@/types";
import Image from "@/components/Image";
import "react-image-lightbox/style.css";

interface Props {
  product: productType;
}

export default function ProductGalleryView({ product }: Props) {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const activethumbnailImg = (index: number) =>
    activeImage === index ? "active" : "";

  function updateActiveImage(index: number) {
    setActiveImage(index);
  }

  const images = product?.images;

  const onImgClick = () => {
    setLightBoxOpen(!lightBoxOpen);
  };

  const customStyles = {
    overlay: {
      zIndex: "5000",
    },
    bodyOpen: {
      position: "fixed",
    },
  };

  return (
    <div className="product-gallery w-full flex">
      <div className="product-gallery-preview order-2 w-4/5">
        <div
          onClick={onImgClick}
          className="product-gallery-preview-item active"
        >
          <Magnifier
            mgShowOverflow={false}
            mgWidth={2000}
            mgHeight={2000}
            className="img-fluid"
            src={images[activeImage].file.url}
            zoomFactor={0.11}
          />
          <div className="image-zoom-pane"></div>
        </div>
        {lightBoxOpen && (
          <Lightbox
            mainSrc={images[activeImage].file.url}
            nextSrc={images[(activeImage + 1) % images.length].file.url}
            prevSrc={
              images[(activeImage + images.length - 1) % images.length].file.url
            }
            onCloseRequest={() => setLightBoxOpen(false)}
            imageCaption={product.image_alt_text[activeImage]}
            onMovePrevRequest={() =>
              setActiveImage((activeImage + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setActiveImage((activeImage + 1) % images.length)
            }
            enableZoom={false}
            reactModalStyle={customStyles}
          />
        )}
      </div>
      <div className="product-gallery-thumblist order-1 w-1/5">
        {images?.map((image: any, index) => (
          <a
            className={`product-thumblist-item items-center justify-center flex hover:border-gray-300 hover:border-2 ${activethumbnailImg(
              index
            )}`}
            onClick={() => updateActiveImage(index)}
            key={index}
          >
            <Image
              height={150}
              width={150}
              src={image.file.url}
              alt={product.image_alt_text[index]}
            />
          </a>
        ))}
      </div>
      <style jsx>
        {`
          .product-thumblist-item {
            width: 150px;
          }
          .product-thumblist-item.active {
            border: 1px solid red;
            opacity: 0.8;
          }
          .product-gallery-thumblist.order-1 {
            height: 720px;
            overflow-y: auto;
            overflow-x: hidden;
          }
          @media (max-width: 768px) {
            .product-gallery-thumblist.order-1 {
              display: flex;
              flex-direction: row;
              width: 100%;
              height: unset;
              overflow-y: unset;
            }
          }
        `}
      </style>
    </div>
  );
}
