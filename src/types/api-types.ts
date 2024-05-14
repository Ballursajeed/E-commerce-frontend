import { CartItem, Order, Product, ShippingInfo, User } from "./types";

export type customError = {
  status: number;
  data: {
    message: string;
    success: boolean;
  };
};

export type messageResponse = {
  success: boolean;
  message: string;
};

export type userResponse = {
  success: boolean;
  user: User;
};

export type productResponse = {
  success: boolean;
  products: Product[];
};

export type categoriesResponse = {
  success: boolean;
  categories: string[];
};

export type searchProductResponse = productResponse & {
  totalPage: number;
};

export type searchProductRequest = {
  price: number;
  page: number;
  category: string;
  search: string;
  sort: string;
};

export type productDeatails = {
  success: boolean;
  product: Product;
};

export type newProductRequest = {
  id: string;
  formData: FormData;
};

export type updateProductRequest = {
  userId: string;
  productId: string;
  formData: FormData;
};

export type deleteProductRequest = {
  userId: string;
  productId: string;
};

export type newOrderRequest = {
  shippingInfo: ShippingInfo;
  orderItems: CartItem[];
  subTotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  user: string;
};

export type updateOrderRequest = {
  userId: string;
  orderId: string;
};

export type ordersResponse = {
  success: boolean;
  orders: Order[];
};

export type OrderDetailsResponse = {
  success: boolean;
  orders: Order;
};
