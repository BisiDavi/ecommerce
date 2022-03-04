import Link from "next/link";

import Modal from "@/components/Modal";
import { quickViewModal } from "@/redux/ui-slice";
import { useAppDispatch } from "@/hooks/useRedux";
import ProductGallery from "@/components/Products/ProductGallery";
import ProductdetailsView from "@/components/Products/ProductDetailsView";

interface QuickViewModalProps {
  product: {
    active: boolean;
    productToView: any;
  };
}

function ModalHeader({ productToView }) {
  return (
    <h6 className="modal-title product-title">
      <Link href={`/products/${productToView.slug}`} passHref>
        <a
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Go to product page"
        >
          {productToView.name}
          <i className="ci-arrow-right fs-lg ms-2"></i>
        </a>
      </Link>
    </h6>
  );
}

export default function QuickViewModal({ product }: QuickViewModalProps) {
  const dispatch = useAppDispatch();
  const { productToView } = product;

  function quickViewHandler() {
    dispatch(quickViewModal(product));
  }

  return (
    <Modal
      modal={product.active}
      modalHandler={quickViewHandler}
      header={<ModalHeader productToView={productToView} />}
    >
      <ProductGallery product={productToView} />
      <ProductdetailsView product={product} />
      <style jsx>
        {`
          .description {
            height: 400px;
            overflow: auto;
          }
          .description::-webkit-scrollbar {
            width: 1em;
          }

          .description::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          }

          .percentage {
            height: 35px;
            width: 50px;
            color: white;
            background-color: #fb696a;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
          }

          .percentage:hover {
            background-color: #fe3638;
          }

          .description::-webkit-scrollbar-thumb {
            background-color: darkgrey;
            outline: 1px solid slategrey;
            border: 0px !important;
          }
        `}
      </style>
    </Modal>
  );
}
