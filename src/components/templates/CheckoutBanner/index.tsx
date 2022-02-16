import { useContext } from "react";
import styled from "styled-components";
import { CartItemContext } from "../../../context/CartItemContext";
import { CheckoutItem } from "../../UI/mocules/CheckoutItem";
import { AddedCart } from "../../UI/organisms/CartModal";

export const CheckoutBanner = () => {
  const cartContext = useContext(CartItemContext);
  const cartItems = cartContext?.inCartItems;
  const handleCalculateOrderTotal = () =>
    cartItems?.reduce((prev, cur) => prev + cur.amount * cur.price!, 0);

  return (
    <Container>
      <div className="title">Order total ({cartItems?.length || 0})</div>
      <AddedCart>
        {cartItems!.length > 0 && cartItems && (
          <div className="products">
            {cartItems?.map((item) => (
              <CheckoutItem
                key={item.id}
                id={item.id!}
                name={item.name!}
                image={item.image!}
                amount={item.amount}
                price={item.price!}
              />
            ))}
          </div>
        )}
        <div className="payment-center">
          <div className="payment-info">
            <div className="key">Shipping</div>
            <div className="value">FREE</div>
          </div>
          <div className="payment-info">
            <div className="key">Order total</div>
            <div className="value">${handleCalculateOrderTotal()}</div>
          </div>
        </div>
      </AddedCart>
    </Container>
  );
};
const Container = styled.div`
  width: 440px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 7px;
  .title {
    margin-bottom: 2rem;
    font-size: 18px;
    font-weight: 500;
  }
`;
