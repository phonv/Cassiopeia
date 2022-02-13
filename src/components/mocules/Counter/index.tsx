import { useContext } from "react";
import styled from "styled-components";
import { CartItemContext } from "../../../context/CartItemContext";

type CounterProps = {
  id?: string;
  quantity: number;
};

export const Counter = ({ id, quantity }: CounterProps) => {
  const cartItemContext = useContext(CartItemContext);
  const cartItems = cartItemContext?.inCartItems!;
  const setItemQuantity = cartItemContext?.setInCartItems!;

  const handleIncrease = () => {
    const updater = cartItems?.map((item) => {
      if (item.id === id) return { ...item, amount: item.amount + 1 };
      return item;
    });
    setItemQuantity(updater);
  };
  const handleDecrease = () => {
    if (quantity <= 1) return;

    const updater = cartItems?.map((item) => {
      if (item.id === id) return { ...item, amount: item.amount-- };
      return item;
    });
    setItemQuantity(updater);
  };

  return (
    <Container>
      <div className="btn" onClick={handleDecrease}>
        -
      </div>
      <div className="amount">{quantity}</div>
      <div className="btn" onClick={handleIncrease}>
        +
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  .amount {
    font-size: 1.1rem;
  }
  .btn {
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
  }
`;
