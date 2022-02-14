import { Dispatch, SetStateAction } from "react";

export interface CartItemProps {
  id?: string;
  name?: string;
  price?: number;
  image?: string;
  detail?: string;
  category?: string,
  occasion?: string,
  isPromotion?: boolean,
  amount: number;
}
export interface ApiProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  detail: string;
  isPromotion: boolean,
  category?: string,
  occasion?: string,
}

export interface CartItemContextProps {
  inCartItems: CartItemProps[];
  setInCartItems?: Dispatch<SetStateAction<CartItemProps[]>>;
}
export type PolicyProps = {
  id: string;
  title: string;
  body: string;
};
