import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import { StyledLink } from "../../../../App";
import { CartItemContainer } from "../CartItem";
import { CartItemProps } from "../../../../types";

export const CheckoutItem = ({
  id,
  name,
  price,
  image,
  amount,
}: CartItemProps) => {
  return (
    <CartItemContainer>
      <div className="image-wrapper">
        <img src={image} alt="avatar" />
        <div className="detail-btn-wrapper">
          <StyledLink to={"/product/" + id}>
            <div className="detail-button">
              <SearchOutlined />
            </div>
          </StyledLink>
        </div>
      </div>{" "}
      <div className="control-center">
        <div className="top-center">
          <div className="product-name">{name}</div>
          <div className="price">${price}</div>
        </div>
        <div className="bottom-center">
          <div className="left-bottom-center">
            <div
              className="quantity"
              style={{ fontWeight: 500, fontSize: "1rem" }}
            >
              Quantity: {amount}
            </div>
            <div className="total-price">
              {amount > 1 && "$" + amount * price}
            </div>
          </div>
        </div>
      </div>
    </CartItemContainer>
  );
};
