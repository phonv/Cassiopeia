import React, { createContext, useState, useMemo } from "react";
import { CartItemProps } from "../../types";
import { CartItemContextProps } from "../../types";

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
