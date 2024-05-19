export type User = {
  name: string;
  email: string;
  photo: string;
  gender: string;
  role: string;
  dob: string;
  _id: string;
};

export type Product = {
  name: string;
  category: string;
  photo: string;
  price: number;
  stock: number;
  _id: string;
};

export type ShippingInfo = {
  address: string;
  city: string;
  state: string;
  country: string;
  pinCode: number;
};

export type CartItem = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
};

export type OrderItem = Omit<CartItem, "stock"> & { _id: string };

export type Order = {
  orderItems:OrderItem[];
  shippingInfo:ShippingInfo;
  subTotal:number;
  tax:number;
  shippingCharges:number;
  discount:number;
  total:number;
  status:string;
  user:{
      name:string;
      _id:string;
  };
  _id:string;
}

type CountAndChange = {
  revenue: number;
    user: number;
    product: number;
    order: number;
}

type LatestTransactions = {
  _id: string;
  amount: number;
  discount: number;
  quantity: number;
  status: string;
}

export type Stats = {
  Changepercent:CountAndChange;
  categoryCount:Record<string, number>[];
  counts:CountAndChange;
  chart: {
    order: number[],
    revenue: number[],
  };
  userRatio:{
    male: number;
    female: number;
  };
  latestTransactions: LatestTransactions[];
}