import styled from "styled-components";
import { Modal } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import "antd/lib/modal/style/css";
import { useContext } from "react";
import { CartItemContext } from "../../../../context/CartItemContext";
import { Counter } from "../../mocules/Counter";

type CartStatus = {
  isOpen: boolean;
  isEmpty: boolean;
  onClose: () => void;
};

export const CartModal = ({ isOpen, isEmpty, onClose }: CartStatus) => {
  const cartItemContext = useContext(CartItemContext);
  const cartItems = cartItemContext?.inCartItems;
  const setCartItem = cartItemContext?.setInCartItems!;

  const handleCalculateOrderTotal = () =>
    cartItems?.reduce((prev, cur) => prev + cur.amount * cur.price!, 0);

  const handleRemoveAll = () => setCartItem([]);

  return (
    <Container>
      <Modal
        title="Your cart"
        footer={null}
        style={{ top: 50, left: 373 }}
        bodyStyle={{
          width: "554px",
          padding: "3rem 60px",
          textAlign: "center",
        }}
        visible={isOpen}
        onCancel={onClose}
        mask={false}
      >
        {isEmpty ? (
          <div className="empty-page">
            <div className="content">Your cart is empty</div>
            <div className="sub-content">
              Next step: add a product to your cart
            </div>
          </div>
        ) : (
          <div className="added-cart-modal">
            <div className="products">
              {cartItems?.map((item) => (
                <div key={item.id} className="product-info">
                  <div className="image-wrapper">
                    <img src={item.image} alt="avatar" />
                  </div>
                  <div className="control-center">
                    <div className="top-center">
                      <div className="product-name">{item.name}</div>
                      <div className="price">{item.price}</div>
                    </div>
                    <div className="bottom-center">
                      <Counter id={item.id} quantity={item.amount} />
                      <div className="delete-btn">{<DeleteFilled />}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>{" "}
            <div className="remove-all-btn" onClick={handleRemoveAll}>
              Remove all
            </div>
            <div className="promocode-center">
              <input type="text" placeholder="Add promocode" />
              <div className="apply-btn">Apply</div>
            </div>
            <div className="payment-center">
              <div className="payment-info">
                <div className="key">Shipping</div>
                <div className="value">FREE</div>
              </div>
              <div className="payment-info">
                <div className="key">Order total</div>
                <div className="value">{handleCalculateOrderTotal()}</div>
              </div>
            </div>
            <div className="checkout-btn-wrapper">
              <div className="checkout-btn">Checkout</div>
            </div>
          </div>
        )}
      </Modal>
    </Container>
  );
};
const Container = styled.div`
  text-align: initial;
  .product-info {
    display: flex;
    align-items: center;
    .image-wrapper {
      width: 100px;
      height: 100px;
    }
  }
`;
