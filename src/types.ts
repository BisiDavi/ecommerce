export type productType = {
  name: string;
  description?: string | any;
  attributes?: any;
  meta_title?: string;
  content: {
    maxQuantity: number;
    productBenefits: {
      icon: string;
      text: string;
    }[];
  };
  __queryID?: any;
  __position?: any;
  objectID?: any;
  vendor: string;
  product_image?: string;
  product_images: { link: string; alt: string }[];
  image_alt_text?: any;
  images: {
    id: string;
    file: {
      url: string;
    };
  }[];
  id: string;
  options: any[];
  quantity: string;
  hkd_selling_price?: number;
  rating: number;
  product_type?: string;
  hkd_compare_at_price: number;
  category: string;
  oldPrice?: number;
  rrp?: any;
  origPrice?: number;
  slug: string;
  review_rating?: number;
  price: number;
  colorOption?: string[];
  sizeOption?: string[];
  purchaseOptions?: {
    standard: {
      salePrice: number | null;
      price: number;
      sale: boolean;
    };
  };
};

export type reviewFormContentType = {
  label: string;
  required?: boolean;
  name: string;
  inputType?: string;
  type: string;
  options?: { name: string; value: string }[];
  helperText?: string;
  size?: string;
  placeholder?: string;
};

export type cartType = {
  grandTotal: number;
  items: any;
  subTotal: number;
  price: number;
  quantity: number;
  options: any[];
  salePrice: number;
  slug: string;
  tags: string[];
  priceTotal: number;
  product: productType;
  productId: string;
  shipmentTotal: number;
  taxTotal: number;
  id: string;
  discountTotal: number;
};

export type useCartType = {
  cart: cartType | null;
};

export type itemType = {
  productId: string;
  product: productType;
  price: number;
  quantity: number;
};

export type checkoutStageProcess =
  | "cart"
  | "details"
  | "shipping"
  | "payment"
  | "review"
  | "complete";

export type categoryType = {
  name: string;
  id: string;
  parentId?: string;
  slug: string;
  images: {
    id: string;
    file: {
      url: string;
    };
  }[];
  meta_description?: string;
  topId?: string;
  meta_title?: string;
};

export type formType = {
  firstName: string;
  lastName: string;
  email: string;
  address1: string;
  address2: string;
  country: string;
  companyName: string;
  state: string;
  city: string;
  zip: string;
};

export type categorySlugType = "shop" | "categories";

export type airwallexType = {
  isAccessTokenValid: boolean;
  accessToken: null | string;
  paymentIntentId: null | string;
  clientSecret: null | string;
  error: null | any;
  paymentSuccessful: null | boolean;
  tokenExpiryDate: null | string;
};

export type paymentDetailsType = {
  request_id: string;
  amount: string;
  currency: string;
  merchant_order_id: string;
  order: {
    products: any[];
  };
};

export type paymentStateType = {
  paymentMethod: null | string;
  country: null | string;
  paymentForm: paymentFormType | null;
  userAddress: any;
  isShippingFormCompleted: boolean;
};

export type paymentFormType = {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  country: string;
  address1: string;
  state: string;
  city: string;
  zip: string;
  address2: string;
};

export type productOptions = {
  name: string;
  id: string;
  values: { id: string; name: string }[];
};

export type productOptionType = {
  name: string;
  value: string;
}[];

export type cartDetailsType = {
  name: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  card: string;
  token: string;
};

export interface modalType {
  show: boolean;
  onHide: () => void;
}

export type contentType = {
  name: string;
  placeholder: string;
  type: string;
  inputText: string;
}[];

export type createVboutContentType = {
  email: string;
  id: string;
  cartId: string;
  customerInfo: {
    firstname: string;
    lastname: string;
  };
};

export type updateVboutCartContentType = createVboutContentType & {
  firstName: string;
  lastName: string;
  company: string;
  country: string;
};

export type addCartItemVboutType = {
  email: string;
  id: string;
  cartId: string;
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  productImage: string;
};

export type createVboutOrderType = {
  cartId: string;
  uniqueId: string;
  orderId: string;
  orderNumber: string;
  paymentMethod: string;
  grandTotal: string;
  subtotal: string;
  status: string;
  customerInfo: customerInfoType;
  billingInfo: vboutInfoType;
  shippingInfo: vboutInfoType;
};

type customerInfoType = {
  firstname: string;
  lastname: string;
  email: string;
  country: string;
};

type vboutInfoType = {
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  city: string;
  statename: string;
  countryname: string;
  zipcode: string;
};

export type addCategoryViewVboutType = {
  id: string;
  categoryId: string;
  productName: string;
  categoryImage: string;
};

export type addProductViewVboutType = {
  id: string;
  productId: string;
  productName: string;
  price: number;
  productImage: string;
  description: string;
  link: string;
};

export interface FormStagesType {
  formStages: {
    stage: number;
    shippingForm: null | any;
  };
}

export type attributeType = {
  name: string;
  values: string[];
};

export type filterType = {
  color: string | null;
  size: string | null;
  price: [] | never[];
};

export type hitType = {
  name: string;
  __queryID: string;
  __position: number;
  objectID: string;
  description?: string | any;
  attributes?: any;
  meta_title?: string;
  content: {
    maxQuantity: number;
    productBenefits: {
      icon: string;
      text: string;
    }[];
  };
  vendor?: string;
  product_image?: string;
  product_images: { link: string; alt: string }[];
  image_alt_text?: any;
  images: {
    id: string;
    file: {
      url: string;
    };
  }[];
  id: string;
  options: any[];
  quantity: string;
  rating: number;
  category: string;
  oldPrice?: number;
  origPrice?: number;
  slug: string;
  review_rating?: number;
  price: number;
  colorOption?: string[];
  sizeOption?: string[];
  purchaseOptions?: {
    standard: {
      salePrice: number | null;
      price: number;
      sale: boolean;
    };
  };
};

export interface PaginationProps {
  pagination: {
    count: number;
    active: boolean;
  }[];
}

export type contentLinkType = {
  id: string;
  slug: string;
  name: string;
  images: {
    file: {
      url: string;
    };
  }[];
};

export interface CartItemProps {
  item: cartType;
  removeFromCart: (item: cartType) => void;
}

export interface ProductProps {
  product: productType;
  forCategory?: boolean;
  algoliaEvent?: "search" | "click" | "filter";
  homepage?: boolean;
  slider?:boolean
}

export type typeModal =
  | "CHECKOUT_NOTIFICATION_MODAL"
  | "AUTH_MODAL"
  | "AUTHFORM"
  | "SECURE_CHECKOUT";

export type addCategoryViewType = {
  id: string;
  categoryId: string;
  categoryName: string;
  categoryLink: string;
  categoryImage: string;
};

export type addProductSearchType = {
  id: string;
  email: string;
  query: string;
};
