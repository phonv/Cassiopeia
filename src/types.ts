import { Dispatch, SetStateAction } from "react";

export interface UserInfoProps {
  name?: string;
  phone?: string;
  gender?: string;
  deliveryMethod?: string;
  pickAddress?: string;
  shipProvince?: string;
  shipAddress?: string;
  // receiptDate?: Date;
  paymentMethod?: string;
}

export interface UserOrderProps {
  id?: string;
  name?: string;
  price?: number;
  image?: string;
  detail?: string;
  category?: string;
  occasion?: string;
  isPromotion?: boolean;
  amount: number;
}
export interface ApiProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  detail: string;
  isPromotion: boolean;
  category?: string;
  occasion?: string;
}

export interface CartItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  amount: number;
  onRemove?: () => void;
}

export interface CheckoutSectionProps {
  setCheckoutProgress: React.Dispatch<React.SetStateAction<string>>;
}

export interface CartItemContextProps {
  inCartItems: UserOrderProps[];
  setInCartItems?: Dispatch<SetStateAction<UserOrderProps[]>>;
}

export interface UserContextProps {
  userInfo: UserInfoProps;
  setUserInfo: Dispatch<SetStateAction<UserInfoProps>>;
}

export type PolicyProps = {
  id: string;
  title: string;
  body: string;
};
