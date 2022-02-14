import React, { createContext, useState, useMemo, useEffect } from "react";
import { UserOrderProps, CartItemContextProps } from "../../types";

const CartItemContext = createContext<CartItemContextProps | undefined>(
  undefined
);

const CartItemProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [inCartItems, setInCartItems] = useState<UserOrderProps[]>(
    JSON.parse(localStorage.getItem("products")!) || []
  );

  console.log("re-render");

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
  }, []);

  return (
    <CartItemContext.Provider value={cartItemContext}>
      {children}
    </CartItemContext.Provider>
  );
};

export { CartItemContext, CartItemProvider };
