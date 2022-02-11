import React, {
  createContext,
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
} from "react";
import { CartItemProps } from "../../types";

type CartItemContextProps = {
  inCartItems: CartItemProps[];
  setInCartItems: Dispatch<SetStateAction<CartItemProps[]>>;
};

const CartItemContext = createContext<CartItemContextProps | undefined>(
  undefined
);

const CartItemProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [inCartItems, setInCartItems] = useState<CartItemProps[]>([]);

  const cartItemContext: CartItemContextProps = useMemo(
    () => ({
      inCartItems,
      setInCartItems,
    }),
    [inCartItems]
  );

  return (
    <CartItemContext.Provider value={cartItemContext}>
      {children}
    </CartItemContext.Provider>
  );
};

export { CartItemContext, CartItemProvider };
