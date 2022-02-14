import React, { createContext, useState, useMemo, useEffect } from "react";
import { CartItemProps } from "../../types";
import { CartItemContextProps } from "../../types";

const CartItemContext = createContext<CartItemContextProps | undefined>(
  undefined
);

const CartItemProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [inCartItems, setInCartItems] = useState<CartItemProps[]>(
    JSON.parse(localStorage.getItem("products")!) || []
  );

  const cartItemContext: CartItemContextProps = useMemo(
    () => ({
      inCartItems,
      setInCartItems,
    }),
    [inCartItems]
  );

  useEffect(() => {
    const localProducts = window.localStorage.getItem("products");
    localProducts && setInCartItems(JSON.parse(localProducts));
  }, [inCartItems]);

  return (
    <CartItemContext.Provider value={cartItemContext}>
      {children}
    </CartItemContext.Provider>
  );
};

export { CartItemContext, CartItemProvider };
