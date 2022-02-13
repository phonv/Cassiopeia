import { Dispatch, SetStateAction } from "react";

export interface CartItemProps {
  id?: string;
  name?: string;
  price?: number;
  image?: string;
  detail?: string;
  amount: number;
}
export interface ApiProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  detail: string;
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
