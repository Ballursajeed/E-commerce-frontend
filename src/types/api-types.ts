import { Product, User } from "./types";

export type customError = {
  status:number;
  data:{
    message:string;
    success:boolean;
  }
}

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

