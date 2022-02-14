import styled from "styled-components";
import { Modal } from "antd";
import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import "antd/lib/modal/style/css";
import { useContext } from "react";
import { CartItemContext } from "../../../../context/CartItemContext";
import { Counter } from "../../mocules/Counter";
import { StyledLink } from "../../../../App";

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

  const handleRemoveAll = () => {
    setCartItem([]);
    localStorage.setItem("products", JSON.stringify([]));
  };

  const handleRemoveItem = (id?: string) => {
    const newCartItems = cartItems?.filter((item) => item.id !== id)!;
    setCartItem(newCartItems);
    localStorage.setItem("products", JSON.stringify(newCartItems));
  };

  return (
    <>
      <Modal
        title="Your cart"
        closable={false}
        footer={null}
        style={{ top: 50, left: 373, minWidth: 554 }}
        bodyStyle={{
          padding: "3rem 0",
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
          <AddedCart>
            <div className="products">
              {cartItems?.map((item) => (
                <Product key={item.id}>
                  <div className="image-wrapper">
                    <img src={item.image} alt="avatar" />
                    <div className="detail-btn-wrapper">
                      <StyledLink to={"/product/" + item.id}>
                        <div className="detail-button">
                          <SearchOutlined />
                        </div>
                      </StyledLink>
                    </div>
                  </div>
                  <div className="control-center">
                    <div className="top-center">
                      <div className="product-name">{item.name}</div>
                      <div className="price">${item.price}</div>
                    </div>
                    <div className="bottom-center">
                      <Counter id={item.id} quantity={item.amount} />
                      <div
                        className="delete-btn"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        {<DeleteOutlined />}
                      </div>
                    </div>
                  </div>
                </Product>
              ))}
            </div>
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
                <div className="value">${handleCalculateOrderTotal()}</div>
              </div>
            </div>
            <StyledLink to="/checkout">
              <div className="checkout-btn-wrapper">
                <div className="checkout-btn">
                  <span>Checkout</span>
                  <div className="arrow-wrapper">
                    <img
                      className="arrow"
                      src="https://cassiopeia.store/svgs/line-right-arrow.svg"
                      alt="arrow"
                    />
                  </div>
                </div>
              </div>
            </StyledLink>
          </AddedCart>
        )}
      </Modal>
    </>
  );
};
const AddedCart = styled.div`
  text-align: initial;
  .remove-all-btn {
    color: #595cff;
    font-weight: 500;
    font-size: 1rem;
    margin: 30px 0;
    cursor: pointer;
  }
  .promocode-center {
    gap: 15px;
    align-items: center;
    height: 42px;
    input {
      flex: 1;
      outline: none;
      height: 100%;
      border: 1px solid #ddd;
      background-color: rgba(200, 200, 200, 0.2);
      padding: 10px;
      font-size: 0.8rem;
      color: #000;
    }
    .apply-btn {
      padding: 10px;
      border: 1px solid #595cff;
      font-size: 0.9rem;
      font-weight: 500;
      border-radius: 5px;
      width: 150px;
      text-align: center;
      transition: background-color 0.2s ease;
      cursor: pointer;
      &:hover {
        background-color: #595cff;
        color: white;
        transition: background-color 0.2s ease;
      }
    }
  }
  .payment-center {
    margin: 3rem 0 1rem;
    font-size: 16px;
    .payment-info {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #ddd;
      padding: 15px 0;
      .key {
        font-weight: 400;
      }
    }
  }
  .checkout-btn-wrapper {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    .checkout-btn {
      background: black;
      width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      padding: 10px 0;
      border-radius: 7px;
      font-weight: 500;
      font-size: 1rem;
      transition: background-color 0.2s ease;
      cursor: pointer;
      .arrow-wrapper {
        width: 25px;
      }
      &:hover {
        background: #444;
        transition: background-color 0.2s ease;
      }
    }
  }
  .top-center,
  .bottom-center,
  .promocode-center {
    display: flex;
  }
  .top-center,
  .bottom-center {
    width: 100%;
    justify-content: space-between;
  }
  .value,
  .price {
    font-weight: 500;
  }
`;
const Product = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  .image-wrapper {
    width: 100px;
    position: relative;
    .detail-btn-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transition: opacity 0.2s ease;
      opacity: 0;
      .detail-button {
        background: white;
        font-size: 17px;
        width: 35px;
        height: 35px;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.2s ease;
        :hover {
          background: rgba(255, 255, 255, 0.8);
          transition: background-color 0.2s ease;
        }
      }
    }
    :hover {
      .detail-btn-wrapper {
        transition: opacity 0.2s ease;
        opacity: 1;
      }
    }
  }
  .control-center {
    flex: 1;
    .top-center {
      margin-bottom: 10px;
      font-size: 17px;
      font-weight: 450;
      white-space: normal;
      .product-name {
        max-width: 225px;
      }
    }
    .bottom-center {
      .delete-btn {
        cursor: pointer;
        font-size: 1.2rem;
      }
    }
  }
`;
